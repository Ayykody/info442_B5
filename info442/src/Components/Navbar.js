import React from 'react';
import logo from '../Images/Fish.png';
import { Link } from 'react-router-dom';

export const NavBar = ()  => {
  return (
    <nav className=''> 
        <a href='#' className=''>
            <img src={logo} alt=''/>
        </a>
        <ul>
          <li>
            <Link to='/Resources'>Resources</Link>
          </li>
        </ul>
    </nav>
  )
}
