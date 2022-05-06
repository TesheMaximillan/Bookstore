import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

function NavBar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
      class: 'active',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
      class: 'disable',
    },
  ];

  return (
    <div className="nav">
      <div className="nav__links">
        <h2 className="logo-text">Bookstore CMS</h2>
        <ul className="nav__links--link-items">
          {links.map((link) => (
            <li key={link.id} className="item">
              <NavLink to={link.path} className={`item__link ${link.class}`}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="btn user-btn">
        <ImUser className="user-icon" />
      </button>
    </div>
  );
}

export default NavBar;
