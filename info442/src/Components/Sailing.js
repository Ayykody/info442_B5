import React from 'react';
import sailingImage from '../Images/sailing.jpg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function Sailing() {
  let navigate = useNavigate();

  return (
    <div className='body'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1 className='header'>Eco-friendly Sailing Adventure</h1>
      <img className='image' src={sailingImage} alt="Eco-friendly Sailing" />
      <h2>Overview</h2>
      <p className='overview'>
        Set sail with us on an eco-friendly vessel. Learn about marine life, enjoy bird-watching, and discover the importance of ocean conservation.
        This sailing adventure takes you through the beautiful waters of Cape Cod, offering a unique experience to explore the marine ecosystem responsibly.
        Our guides are knowledgeable about the local wildlife and will share insights on how to protect our oceans while enjoying its vast beauty.
      </p>
      {/*  */}
    </div>
  );
}

export default Sailing;