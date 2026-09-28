import { useState, useEffect } from 'react';
import { getSubjects } from '../services/api.js';

export function useSubjects(semId = null, categoryId = null) {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getSubjects(semId, categoryId);
      setSubjects(data);
    } catch (err) {
      console.error('Error in useSubjects:', err);
      setError(err.message || 'Failed to load subjects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, [semId, categoryId]);

  return { subjects, loading, error, refetch: fetchSubjects };
}
