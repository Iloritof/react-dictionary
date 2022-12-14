const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='flex fs-400'>
      <a href=''>
        <svg
          width='auto'
          version='1.1'
          viewBox='0 0 1562.2772 256.18977'
          xmlns='http://www.w3.org/2000/svg'
          xmlns:svg='http://www.w3.org/2000/svg'
        >
          <path
            id='circle3782'
            style='display:inline;fill:var(--clr-accent);fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1'
            d='M 165.79901,31.135668 A 125.58335,125.58335 0 0 0 40.215689,156.71909 125.58335,125.58335 0 0 0 60.567786,225.05408 H 271.02419 A 125.58335,125.58335 0 0 0 291.38245,156.71909 125.58335,125.58335 0 0 0 165.79901,31.135668 Z'
          />
          <text
            xml:space='preserve'
            style="font-style:italic;font-size:182.544px;font-family:Metropolis;-inkscape-font-specification:'Metropolis, Italic';text-align:end;text-anchor:end;fill:none;stroke-width:2.6621;stroke-linecap:round"
            x='1518.8995'
            y='201.32336'
            id='text626'
          >
            <tspan
              sodipodi:role='line'
              id='tspan624'
              style='font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Archivo;-inkscape-font-specification:Archivo;fill-opacity:1;stroke-width:2.6621'
              x='1518.8995'
              y='201.32336'
            >
              ThreeQuarters
            </tspan>
          </text>
        </svg>
      </a>

      <p>&copy; Copyright {year}. All rights reserved.</p>
      <div className='flex'>
        <a
          href='https://github.com/Iloritof'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 25 25' aria-label='GitHub link Icon'>
            <use href='#github' />
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/daniel-ilori-5097381ba/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 14 14' aria-label='LinkedIn link Icon'>
            <use href='#linkedIn' />
          </svg>
        </a>
        <a
          href='https://twitter.com/danieIlori'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 25 25' aria-label='Twitter link Icon'>
            <use href='#twitter' />
          </svg>
        </a>
        <a
          href='https://www.instagram.com/danieilori/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 25 25' aria-label='Instagram link Icon'>
            <use href='#instagram' />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
