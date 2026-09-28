import { useState, useEffect } from 'react';
import { getMaterials } from '../services/api.js';

export function useMaterials(filters = {}) {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Serialize filter keys for dependency array
  const filterKey = JSON.stringify(filters);

  const fetchMaterials = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMaterials(filters);
      setMaterials(data);
    } catch (err) {
      console.error('Error in useMaterials:', err);
      setError(err.message || 'Failed to load study materials');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, [filterKey]);

  return { materials, loading, error, refetch: fetchMaterials };
}
