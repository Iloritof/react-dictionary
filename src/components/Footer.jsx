const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='flex fs-400'>
      <a href=''>
        <img src='' alt='' />
        ThreeQuarters
      </a>

      <p>&copy; Copyright {year}. All rights reserved.</p>
      <div className='flex'>
        <a
          href='https://github.com/Iloritof'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 25 25'>
            <use href='#github' />
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/daniel-ilori-5097381ba/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 14 14'>
            <use href='#linkedIn' />
          </svg>
        </a>
        <a
          href='https://twitter.com/danieIlori'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 25 25'>
            <use href='#twitter' />
          </svg>
        </a>
        <a
          href='https://www.instagram.com/danieilori/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 25 25'>
            <use href='#instagram' />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
