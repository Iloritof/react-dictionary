import { useEffect, useState } from 'react';

export const UseLookUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState('');
  const [error, setError] = useState(false);
  const [dict, setDict] = useState('');

  const fetchDict = async (word) => {
    try {
      setError(false);
      setIsLoading(true);

      fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => setDict(data));
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!word) return;

    fetchDict(word);
  }, [word]);

  return { isLoading, dict, setWord, error };
};
