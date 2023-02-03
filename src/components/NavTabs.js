import React from 'react';
import { NavLink } from 'react-router-dom';
import Favicon from 'react-favicon';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li class="nav-item">
        <a class="navbar-brand" href="#">
          {/* <Favicon url='http://oflisback.github.io/react-favicon/img/github.ico' />
           */}
           <img src="react-portfolio\src\assets\images\cute-unicorn.gif" width="5em" height="5em" alt=""></img>
        </a>
      </li>
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
