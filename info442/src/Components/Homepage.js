import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <body className="body">
      <div className="container">
        <h1>Ocean Biodversity</h1>
        <p>Do you know the risk of traveling?</p>
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
      /* Add calculator here */
    </div>
   </body>
  )
}

export default Homepage