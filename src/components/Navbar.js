import React from 'react';
import back from '../assets/MIT_Preserving-Privacy-01-PRESS.jpg';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={back} />
        </div> 
      <div className="rightSide"></div>
      {/* <Link to='/'>Home</Link>
      <Link to='/Trending'>Home</Link>
      <Link to='/Following'>Home</Link>
      <Link to='/New Search'>Home</Link> */}


      <a href="/trending">Trending</a>
      <a href="/following">Following</a>
      <a href="/new-search">New Search</a>

      
    </div>
  )
}

export default Navbar
