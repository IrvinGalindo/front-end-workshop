import React from 'react';

import './footer.scss';

const Footer = () => (
    <footer className="yta_Footer">
    <nav>
      <h2 className="yta_u-onlyRead">Redes sociales</h2>
      <ul className="yta_Footer-socialNetwork">
        <li className="yta_Footer-socialNetwork-item">
          <a href="#">
            <span data-icon="ei-sc-facebook" data-size="m"></span>
            <span className="yta_u-onlyRead">facebook</span>
          </a>
        </li>
        <li className="yta_Footer-socialNetwork-item">
          <a href="#">
            <span data-icon="ei-sc-twitter" data-size="m"></span>
            <span className="yta_u-onlyRead">twitter</span>
          </a>
        </li>
        <li className="yta_Footer-socialNetwork-item">
          <a href="#">
            <span data-icon="ei-sc-instagram" data-size="m"></span>
            <span className="yta_u-onlyRead">instagram</span>
          </a>
        </li>
        <li className="yta_Footer-socialNetwork-item">
          <a href="#">
            <span data-icon="ei-sc-youtube" data-size="m"></span>
            <span className="yta_u-onlyRead">youtube</span>
          </a>
        </li>
      </ul>
    </nav>
    <p className="yta_Footer-copyright">Copyright © 2018 Yo te adopto.</p>
  </footer>
);

export default Footer; 