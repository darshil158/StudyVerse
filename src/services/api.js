import { supabase, isSupabaseConfigured } from '../lib/supabase.js';
import { SEMESTERS } from '../data/semesters.js';
import { SUBJECTS } from '../data/subjects.js';
import { SYLLABUS_UNITS } from '../data/syllabus_units.js';
import { MATERIALS } from '../data/materials.js';
import { PYQS } from '../data/pyqs.js';
import { CATEGORIES } from '../data/categories.js';

/**
 * Fetch all 8 academic semesters
 */
export async function getSemesters() {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from('semesters')
        .select('*')
        .order('number', { ascending: true });
      if (!error && data?.length) {
        return data.map(item => ({
          ...item,
          highlights: item.highlights || SEMESTERS.find(s => s.id === item.id)?.highlights || []
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch failed for semesters, using local fallback:', err);
    }
  }
  // Local fallback with simulated micro-latency for smooth UI transitions
  return Promise.resolve([...SEMESTERS]);
}

/**
 * Fetch semester by ID
 */
export async function getSemesterById(semId) {
  const numId = Number(semId);
  const semesters = await getSemesters();
  return semesters.find(s => s.id === numId || s.number === numId) || null;
}

/**
 * Fetch all categories
 */
export async function getCategories() {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from('categories').select('*');
      if (!error && data?.length) return data;
    } catch (err) {
      console.warn('Supabase fetch failed for categories, using local fallback:', err);
    }
  }
  return Promise.resolve([...CATEGORIES]);
}

/**
 * Fetch subjects, optionally filtered by semesterId or categoryId
 */
export async function getSubjects(semId = null, categoryId = null) {
  if (isSupabaseConfigured()) {
    try {
      let query = supabase.from('subjects').select('*');
      if (semId) {
        query = query.eq('semester_id', Number(semId));
      }
      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }
      const { data, error } = await query;
      if (!error && data?.length) {
        return data.map(sub => ({
          ...sub,
          semesterId: sub.semester_id,
          categoryId: sub.category_id,
          importantTopics: sub.important_topics || [],
          relatedSubjectIds: sub.related_subject_ids || []
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch failed for subjects, using local fallback:', err);
    }
  }

  let results = [...SUBJECTS];
  if (semId) {
    results = results.filter(s => s.semesterId === Number(semId));
  }
  if (categoryId) {
    results = results.filter(s => s.categoryId === categoryId);
  }
  return Promise.resolve(results);
}

/**
 * Fetch a single subject by ID or Code
 */
export async function getSubject(idOrCode) {
  if (!idOrCode) return null;
  const normalized = String(idOrCode).toLowerCase();

  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from('subjects')
        .select('*')
        .or(`id.eq.${idOrCode},code.eq.${idOrCode}`)
        .single();
      if (!error && data) {
        return {
          ...data,
          semesterId: data.semester_id,
          categoryId: data.category_id,
          importantTopics: data.important_topics || [],
          relatedSubjectIds: data.related_subject_ids || []
        };
      }
    } catch (err) {
      console.warn('Supabase fetch failed for single subject, using local fallback:', err);
    }
  }

  const subject = SUBJECTS.find(s => 
    s.id.toLowerCase() === normalized || 
    s.code.toLowerCase() === normalized
  );

  return Promise.resolve(subject || null);
}

/**
 * Fetch syllabus units for a specific subject
 */
export async function getSyllabus(subjectId) {
  if (!subjectId) return [];

  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from('syllabus_units')
        .select('*')
        .eq('subject_id', subjectId)
        .order('unit_number', { ascending: true });
      if (!error && data?.length) {
        return data.map(u => ({
          ...u,
          subjectId: u.subject_id,
          unitNumber: u.unit_number,
          topics: u.topics || []
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch failed for syllabus units, using local fallback:', err);
    }
  }

  const units = SYLLABUS_UNITS.filter(u => u.subjectId === subjectId);
  return Promise.resolve(units);
}

/**
 * Fetch academic materials with flexible filters
 */
export async function getMaterials(filters = {}) {
  const { semesterId, subjectId, type, search, sort = 'popular' } = filters;

  if (isSupabaseConfigured()) {
    try {
      let query = supabase.from('materials').select('*');
      if (semesterId) query = query.eq('semester_id', Number(semesterId));
      if (subjectId) query = query.eq('subject_id', subjectId);
      if (type && type !== 'all') query = query.eq('type', type);

      const { data, error } = await query;
      if (!error && data?.length) {
        let results = data.map(m => ({
          ...m,
          subjectId: m.subject_id,
          semesterId: m.semester_id,
          uploadedDate: m.uploaded_date,
          fileUrl: m.file_url,
          tags: m.tags || []
        }));

        if (search) {
          const q = search.toLowerCase();
          results = results.filter(m => 
            m.title.toLowerCase().includes(q) || 
            m.author.toLowerCase().includes(q) ||
            m.description.toLowerCase().includes(q)
          );
        }

        if (sort === 'popular') results.sort((a, b) => b.downloads - a.downloads);
        else if (sort === 'latest') results.sort((a, b) => new Date(b.uploadedDate) - new Date(a.uploadedDate));
        else if (sort === 'rating') results.sort((a, b) => b.rating - a.rating);

        return results;
      }
    } catch (err) {
      console.warn('Supabase fetch failed for materials, using local fallback:', err);
    }
  }

  let results = [...MATERIALS];

  if (semesterId) {
    results = results.filter(m => m.semesterId === Number(semesterId));
  }
  if (subjectId) {
    results = results.filter(m => m.subjectId === subjectId);
  }
  if (type && type !== 'all') {
    results = results.filter(m => m.type.toLowerCase() === type.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(m => 
      m.title.toLowerCase().includes(q) || 
      m.author.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (sort === 'popular') {
    results.sort((a, b) => b.downloads - a.downloads);
  } else if (sort === 'latest') {
    results.sort((a, b) => new Date(b.uploadedDate) - new Date(a.uploadedDate));
  } else if (sort === 'rating') {
    results.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'name') {
    results.sort((a, b) => a.title.localeCompare(b.title));
  }

  return Promise.resolve(results);
}

/**
 * Fetch previous year exam question papers (PYQs)
 */
export async function getPYQs(filters = {}) {
  const { semesterId, subjectId, year, season, search, sort = 'latest' } = filters;

  if (isSupabaseConfigured()) {
    try {
      let query = supabase.from('pyqs').select('*');
      if (semesterId) query = query.eq('semester_id', Number(semesterId));
      if (subjectId) query = query.eq('subject_id', subjectId);
      if (year && year !== 'all') query = query.eq('year', Number(year));
      if (season && season !== 'all') query = query.eq('season', season);

      const { data, error } = await query;
      if (!error && data?.length) {
        let results = data.map(p => ({
          ...p,
          subjectId: p.subject_id,
          semesterId: p.semester_id,
          paperCode: p.paper_code,
          maxMarks: p.max_marks,
          hasSolution: p.has_solution,
          fileUrl: p.file_url
        }));

        if (search) {
          const q = search.toLowerCase();
          results = results.filter(p => 
            p.title.toLowerCase().includes(q) || 
            p.paperCode.toLowerCase().includes(q)
          );
        }

        if (sort === 'latest') results.sort((a, b) => b.year - a.year);
        else if (sort === 'popular') results.sort((a, b) => b.downloads - a.downloads);

        return results;
      }
    } catch (err) {
      console.warn('Supabase fetch failed for pyqs, using local fallback:', err);
    }
  }

  let results = [...PYQS];

  if (semesterId) {
    results = results.filter(p => p.semesterId === Number(semesterId));
  }
  if (subjectId) {
    results = results.filter(p => p.subjectId === subjectId);
  }
  if (year && year !== 'all') {
    results = results.filter(p => p.year === Number(year));
  }
  if (season && season !== 'all') {
    results = results.filter(p => p.season.toLowerCase() === season.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.paperCode.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (sort === 'latest') {
    results.sort((a, b) => b.year - a.year);
  } else if (sort === 'popular') {
    results.sort((a, b) => b.downloads - a.downloads);
  }

  return Promise.resolve(results);
}

/**
 * Universal search across subjects, materials, syllabus units, and PYQs
 */
export async function searchAll(query) {
  if (!query || !query.trim()) {
    return {
      subjects: [],
      materials: [],
      syllabus: [],
      pyqs: [],
      total: 0
    };
  }

  const q = query.trim().toLowerCase();

  const subjects = SUBJECTS.filter(s => 
    s.name.toLowerCase().includes(q) ||
    s.shortName.toLowerCase().includes(q) ||
    s.code.includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.importantTopics.some(t => t.toLowerCase().includes(q))
  ).slice(0, 8);

  const materials = MATERIALS.filter(m => 
    m.title.toLowerCase().includes(q) ||
    m.description.toLowerCase().includes(q) ||
    m.author.toLowerCase().includes(q) ||
    m.tags.some(t => t.toLowerCase().includes(q))
  ).slice(0, 8);

  const syllabus = SYLLABUS_UNITS.filter(u => 
    u.title.toLowerCase().includes(q) ||
    u.topics.some(t => t.toLowerCase().includes(q))
  ).slice(0, 6);

  const pyqs = PYQS.filter(p => 
    p.title.toLowerCase().includes(q) ||
    p.paperCode.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  ).slice(0, 6);

  const total = subjects.length + materials.length + syllabus.length + pyqs.length;

  return Promise.resolve({
    subjects,
    materials,
    syllabus,
    pyqs,
    total
  });
}
