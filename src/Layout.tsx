import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles/layout.css"; // Import the CSS file

const Layout = () => {
  return (
    <div className="layout">
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
