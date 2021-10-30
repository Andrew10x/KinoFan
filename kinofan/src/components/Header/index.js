/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">KinoFun</div>
      <div className="contacts">
        <div className="phone">0974576333</div>
        <div className="social-networks">
          <a href="#">
            <i class="fab fa-instagram-square" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
