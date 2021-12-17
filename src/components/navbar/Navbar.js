import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <nav id="navbar">
            <div className="container">
              <h1 className="logo">
                <a href="index.html">TATA STRIVE</a>
              </h1>
              <ul>
                <li>
                  <a className="current" href="index.html">
                    Home
                  </a>
                </li>

                {/* <li>
                  <a href="contact.html">Contact</a>
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
