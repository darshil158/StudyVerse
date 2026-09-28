import { useState, useEffect } from 'react';
import { getSemesters, getSemesterById } from '../services/api.js';

export function useSemesters() {
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSemesters = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getSemesters();
      setSemesters(data);
    } catch (err) {
      console.error('Error in useSemesters:', err);
      setError(err.message || 'Failed to load semester orbits');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSemesters();
  }, []);

  return { semesters, loading, error, refetch: fetchSemesters };
}

export function useSemester(id) {
  const [semester, setSemester] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSemester = async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const data = await getSemesterById(id);
      setSemester(data);
    } catch (err) {
      console.error('Error in useSemester:', err);
      setError(err.message || 'Failed to load semester orbit details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSemester();
  }, [id]);

  return { semester, loading, error, refetch: fetchSemester };
}
