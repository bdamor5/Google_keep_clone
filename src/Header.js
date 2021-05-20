import React from 'react';
import logo from './Images/images.png';

const Header = () =>{
  return (
    <div className="header">
    	<img src={logo} alt="logo"/>
    	<h1> Keep Notes </h1>
    </div>
  );
}

export default Header;
