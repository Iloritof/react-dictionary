import { useEffect, useRef, useState } from 'react';
import { UseLookUp } from '../hooks/UseLookUp';
import SearchBar from './SearchBar';
import DicEntry from './DicEntry';

const Main = () => {
  const { isLoading, dict, setWord, error } = UseLookUp();
  const [searchWord, setSearchWord] = useState('');
  const initial = useRef(true);

  const content = () => {
    if (isLoading)
      return (
        <section className='display ta-center'>
          <div className='loader'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      );
    if (error)
      return (
        <section className='display ta-center'>
          <p>{searchWord} Not Found</p>
        </section>
      );
    if (dict.title) {
      return (
        <section className='display ta-center'>
          <h1>{searchWord}</h1>
          <h3>{dict.title}</h3>
          <p>{dict.message}</p>
        </section>
      );
    }
    if (!isLoading && !error) {
      return <DicEntry callback={setSearchWord} data={dict[0]} />;
    }
    return undefined;
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setWord(searchWord);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchWord]);

  // console.log(dict);
  return (
    <main>
      <SearchBar callback={setSearchWord} value={searchWord} />
      {content()}
    </main>
  );
};

export default Main;
