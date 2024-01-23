import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../assets/images/logo white.png'

const Logo = () => {
  return (
    <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <img src={Head} alt="react logo" style={{ width: '108.5px', height: '60px',}} />
    </div>
  );
}

export default Logo;