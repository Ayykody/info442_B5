import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Calculator from './Calculator';


function Homepage() {
 return (
   <body className="body">
 
     <div className="container">
       <h1>Life Below Water</h1>
   </div>
   <div>
     <h1 className="container">Take the Quiz!</h1>
     <div className="b">
       <Link to="/Quiz">
         <button>Go to Quiz</button>
       </Link>
     </div>
   </div>
   <div>
   <div className="b">
     <Calculator />
   </div>
   <div class="bubble bubble--1"></div>
   <div class="bubble bubble--2"></div>
   <div class="bubble bubble--3"></div>
   <div class="bubble bubble--4"></div>
   <div class="bubble bubble--5"></div>
   <div class="bubble bubble--6"></div>
   <div class="bubble bubble--7"></div>
   <div class="bubble bubble--8"></div>
   <div class="bubble bubble--9"></div>
   <div class="bubble bubble--10"></div>
   <div class="bubble bubble--11"></div>
   <div class="bubble bubble--12"></div>
   </div>
  </body>
 )
}


export default Homepage