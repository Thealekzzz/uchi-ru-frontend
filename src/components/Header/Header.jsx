import './Header.css';

import { Link, useLocation } from 'react-router-dom';

const navlinks = [
  {
    link: '/',
    text: 'Все котики',
  },
  {
    link: '/liked',
    text: 'Любимые котики',
  },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <div className="container">
        <nav className="header__nav">
          {navlinks.map(({ link, text }, i) => (
            <Link to={link} key={i}><button className={`header__link ${location.pathname === link ? `header__link_active` : ''}`}>{text}</button></Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;