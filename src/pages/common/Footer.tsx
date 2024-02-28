import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="app-footer">
      <div className="d-inline-flex align-items-center app-footer__content">
        <span className="app-footer__copyright">spacex &copy; 2024</span>
        <ul className="list-unstyled d-inline-flex align-items-center app-footer__nav">
          <li className="app-footer__nav-item">
            <Link
              to="/"
              className="app-footer__nav-item__link text-decoration-none"
            >
              privacy policy
            </Link>
          </li>
          <li className="app-footer__nav-item">
            <Link
              to="/"
              className="app-footer__nav-item__link text-decoration-none"
            >
              suppliers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
