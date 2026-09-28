import { useState, useEffect } from 'react';
import { getSubject } from '../services/api.js';

export function useSubject(idOrCode) {
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubject = async () => {
    if (!idOrCode) return;
    try {
      setLoading(true);
      setError(null);
      const data = await getSubject(idOrCode);
      setSubject(data);
    } catch (err) {
      console.error('Error in useSubject:', err);
      setError(err.message || 'Failed to load subject profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubject();
  }, [idOrCode]);

  return { subject, loading, error, refetch: fetchSubject };
}
