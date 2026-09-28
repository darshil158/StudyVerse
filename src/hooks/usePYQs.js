import { useState, useEffect } from 'react';
import { getPYQs } from '../services/api.js';

export function usePYQs(filters = {}) {
  const [pyqs, setPYQs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filterKey = JSON.stringify(filters);

  const fetchPYQs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPYQs(filters);
      setPYQs(data);
    } catch (err) {
      console.error('Error in usePYQs:', err);
      setError(err.message || 'Failed to load question papers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPYQs();
  }, [filterKey]);

  return { pyqs, loading, error, refetch: fetchPYQs };
}
