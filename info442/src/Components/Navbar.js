import React, {useState} from 'react';
import logo from '../Images/Fish.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const NavBar = ()  => {

  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if(window.scrolly >= 50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <nav className={nav ? 'nav active': 'nav'}> 
         <Link to='/Homepage' className='logo'>
            <img src={logo} alt='fish' />
          </Link>
        <ul>
          <li>
            <Link to='/Quiz'>Quiz</Link>
            <Link to='/Resources'>Resources</Link>
            <Link to='/Events'>Events</Link>
          </li>
        </ul>
    </nav>
  )
}
