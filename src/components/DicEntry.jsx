import { useState, useEffect } from 'react';

const DicSection = ({ callback, data }) => {
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    callback(searchWord);
  }, [searchWord]);

  const handleFetch = (e) => {
    e.preventDefault();
    setSearchWord(e.target.textContent);
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.scrollTop = 0;
  };

  return (
    <section>
      <h2 className='fs-400 italic'>{data.partOfSpeech}</h2>
      <ol className='flow' style={{ '--flow-space': '1rem' }}>
        {data.definitions.map((definition, i) => {
          if (definition.example) {
            return (
              <li key={i}>
                {definition.definition}{' '}
                <p className=''>Example: '{definition.example}'</p>
              </li>
            );
          }
          if (!definition.example) {
            return <li key={i}>{definition.definition}</li>;
          }
        })}
      </ol>

      {data.synonyms[0] ? (
        <div>
          <h3 className='fs-300'>Synonyms</h3>
          <div>
            {data.synonyms.map((synonym, i) => (
              <a key={i} onClick={handleFetch} className='link fs-400'>
                {synonym}
              </a>
            ))}
          </div>
        </div>
      ) : undefined}

      {data.antonyms[0] ? (
        <div>
          <h3 className='fs-300'>Antonyms</h3>
          {data.antonyms.map((antonym, i) => (
            <a key={i} onClick={handleFetch} className='link fs-400'>
              {antonym}
            </a>
          ))}
        </div>
      ) : undefined}
    </section>
  );
};

const DicEntry = ({ data, callback }) => {
  const sound = () => {
    for (let i = 0; i < data.phonetics.length; i++) {
      if (data.phonetics[i].text) return data.phonetics[i].text;
    }
    data.phonetics.for;
  };

  return (
    <div className={data && 'grow'}>
      <article
        className={`display flow ${data && 'grow'}`}
        style={{ '--flow-space': '3.8rem' }}
      >
        {data && (
          <>
            <header>
              <h1 className='fs-700'>{data.word}</h1>
              <p>{sound()}</p>
            </header>
            {data.meanings.map((meaning, i) => (
              <DicSection key={i} data={meaning} callback={callback} />
            ))}
          </>
        )}

        <p className='fs-300'>
          Powered by{' '}
          <a
            href='http://dictionaryapi.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Free Dictionary API
          </a>
        </p>
      </article>
    </div>
  );
};

export default DicEntry;
