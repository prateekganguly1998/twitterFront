import React from "react";
import {NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/case-studies' exact>
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                  Approach
                </NavLink>
              </li>
             
              <li>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <p>gangulyprateek0@gmail.com</p>
                </li>
                <li>
                  <p>aggarwal.rohan.me@gmail.com</p>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
