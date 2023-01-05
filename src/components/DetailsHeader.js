import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

const DetailsHeader = () => (
  <header>
    <img src={logo} alt="logo" className="logo" />
    <Link to="/" state={{ color: 'white' }}> Back </Link>
  </header>
);

export default DetailsHeader;
