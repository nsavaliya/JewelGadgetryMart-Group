import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = (props) => {
  // Access the cart state from Redux store using `useSelector`
  const state = useSelector(state => state.handleCart);

  return (
    // Navigation bar component
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        {/* Brand logo with a link to the homepage */}
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> JewelGadgetry Mart</NavLink>
        
        {/* Button to toggle the navigation menu on small screens */}
        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation links */}
          <ul className="navbar-nav m-auto my-2 text-center">
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

          {/* Buttons section */}
          <div className="buttons text-center">
            <NavLink to="/login" className="btn btn-outline-dark m-2">Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2">Register</NavLink>
            {/* Display the number of items in the cart using Redux state */}
            <NavLink to="/cart" className="btn btn-outline-dark m-2">Cart ({state.length})</NavLink>
          </div>
        </div>

        {/* Conditional rendering of a welcome message */}
        <h2>{props.name ? `Welcome - ${props.name}` : ""}</h2>
      </div>
    </nav>
  );
};

export default Navbar;
