import { useState, useEffect } from 'react';
import { getSyllabus } from '../services/api.js';

export function useSyllabus(subjectId) {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSyllabus = async () => {
    if (!subjectId) return;
    try {
      setLoading(true);
      setError(null);
      const data = await getSyllabus(subjectId);
      setUnits(data);
    } catch (err) {
      console.error('Error in useSyllabus:', err);
      setError(err.message || 'Failed to load syllabus breakdown');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSyllabus();
  }, [subjectId]);

  return { units, loading, error, refetch: fetchSyllabus };
}
