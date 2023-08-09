import React from "react";
import {  Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  // Get cart state from Redux store using useSelector
  const state = useSelector((state) => state.handleCart);

  // Component to display when the cart is empty
  const EmptyCart = () => {
    return (
      // Display a message and link to continue shopping
      <div className="container" style={{ backgroundColor: '#ffff' }}>
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Nothing in Cart</h4>
            <Link to="/" className="btn" >
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Component to display the checkout information
  const ShowCheckout = () => {
    return (
      // Display a message indicating that the user can proceed with checkout
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>Now, it is ready for checkout.</p>
      </div>
    );
  };

  return (
    // Render the Navbar and checkout section
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {/* Conditionally render the checkout information or the empty cart message */}
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      
    </>
  );
};

export default Checkout;
