import { useState, useEffect } from 'react';
import { searchAll } from '../services/api.js';
import { useDebounce } from './useDebounce.js';

export function useSearch(query, delay = 250) {
  const debouncedQuery = useDebounce(query, delay);
  const [results, setResults] = useState({
    subjects: [],
    materials: [],
    syllabus: [],
    pyqs: [],
    total: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.trim().length === 0) {
      setResults({
        subjects: [],
        materials: [],
        syllabus: [],
        pyqs: [],
        total: 0
      });
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    searchAll(debouncedQuery)
      .then((data) => {
        if (isMounted) {
          setResults(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error('Search error in useSearch:', err);
          setError(err.message || 'Search execution failed');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [debouncedQuery]);

  return { results, loading, error, debouncedQuery };
}
