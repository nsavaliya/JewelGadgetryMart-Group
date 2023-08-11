import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = (props) => {
  const state = useSelector(state => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> JewelGadgetry Mart</NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto"> {/* Use ml-auto to align to the right */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/userprofile">User's Profile</NavLink>
            </li>
          </ul>

          <div className="buttons text-center">
            <NavLink to="/login" className="btn btn-outline-dark btn-sm m-2" style={{ backgroundColor: '#0E1C4E', color: '#ffff' }}>Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark btn-sm m-2" style={{ backgroundColor: '#0E1C4E', color: '#ffff' }} >Register</NavLink>
            {/* Display the number of items in the cart using Redux state */}
            <NavLink to="/cart"className="btn btn-outline-dark btn-sm m-2" style={{ backgroundColor: '#0E1C4E', color: '#ffff' }}>Cart ({state.length})</NavLink>
          </div>
        </div>
      </div>

      <div className="welcome-message">
        {props.name && <h2 className="text-center mt-3">Welcome, {props.name}!</h2>}
      </div>
    </nav>
  );
};

export default Navbar;
