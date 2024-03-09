import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Calculator from './Calculator';

function Homepage() {
  return (
    <body className="body">

      <div className="container">
        <h1 className="header">Life Below Water</h1>
        <p className="description">Welcome to Life Below Water! Our app is dedicated to raising awareness about marine conservation and sustainability. Dive into our interactive quizzes, learn about marine life, and discover how you can make a positive impact on our oceans.</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="300" 
            src="https://www.youtube.com/embed/pMp2raQ3pwg" 
            title="Life Below Water Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
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
  );
}

export default Homepage;
