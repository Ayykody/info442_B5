import React from 'react';
import logo from '../Images/Fish.png';

function NavBar() {
  return (
    <nav className=''> 
        <a href='#' className=''>
            <img src={logo} alt=''/>
        </a>
    </nav>
  )
}

export default NavBar;