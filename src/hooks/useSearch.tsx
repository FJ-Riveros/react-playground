import { useEffect, useState } from 'react';
export default function search() {
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (!search) return;

    if (search.length < 3) return;

    console.log('searching');
  }, [search]);

  return { search, setSearch };
}
