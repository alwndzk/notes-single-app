import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';

function Navigation() {
  return (
    <>
      <h1>
        <Link to='/'>My Personal Notes</Link>
      </h1>
      <img src={logo} />
    </>
  );
}

export default Navigation;
