/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">KinoFun</div>
      </Link>
      <div className="contacts">
        <div className="phone">0974576333</div>
        <div className="social-networks">
          <a href="#">
            <i className="fab fa-instagram-square" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube-square" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fab fa-telegram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
