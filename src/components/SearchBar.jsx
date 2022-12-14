import { useEffect, useState } from 'react';

const SearchBar = ({ callback, value }) => {
  const [searchWord, setSearchWord] = useState('');

  // useEffect(() => {
  //   callback(searchWord);
  // }, [searchWord]);

  const handleFetch = (e) => {
    e.preventDefault();
    callback(searchWord);
    setSearchWord('');
  };

  return (
    <form className='search-bar flex bg-white fs-700' onSubmit={handleFetch}>
      <label htmlFor='word-input' className={searchWord && 'hide'}>
        Enter a word
      </label>
      <input
        minLength='auto'
        type='text'
        id='word-input'
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type='submit'>
        <svg viewBox='0 0 48 48' aria-label='search button'>
          <use href='#search' />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
