import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import { FiLogOut } from 'react-icons/fi';

function Navigation({ logout, name }) {
  return (
    <React.Fragment>
      <h1>
        <Link to='/'>Aplikasi Catatan Ku</Link>
      </h1>
      {logout !== undefined && (
        <button className='button-logout' onClick={logout}>{name}<FiLogOut /></button>
      )}
      <img src={logo} />
    </React.Fragment>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Navigation;
