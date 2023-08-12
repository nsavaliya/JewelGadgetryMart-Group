import React from "react";
import {  Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  // Get cart state from Redux store using useSelector
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  // Component to display when the cart is empty
  const EmptyCart = () => {
    return (
      <div className="container" >
        <div className="row"  >
          <div className="col-md-12 py-5 bg-light text-center" >
            <h4 className="p-3 display-5" >Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4" style={{ backgroundColor: '#0E1C4E', color: '#FFDDCC' }}>
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };
  // Function to dispatch the 'addCart' action to increase the quantity of an item in the cart
  const addItem = (product) => {
    dispatch(addCart(product));
  };
    // Function to dispatch the 'delCart' action to decrease the quantity of an item in the cart
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

    // Component to display the cart items and order summary
  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
       <section className="cart-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="cart-items">
          <h2 className="section-title">Your Cart</h2>
          <div className="cart-list">
            {state.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">${item.price}</p>
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.qty}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="order-summary">
          <h2 className="section-title">Order Summary</h2>
          <ul className="summary-list">
            <li className="summary-item">
              <span className="summary-label">Products:</span>
              <span className="summary-value">{totalItems}</span>
            </li>
            <li className="summary-item">
              <span className="summary-label">Subtotal:</span>
              <span className="summary-value">${Math.round(subtotal)}</span>
            </li>
            <li className="summary-item">
              <span className="summary-label">Shipping:</span>
              <span className="summary-value">${shipping}</span>
            </li>
            <li className="summary-item total">
              <span className="summary-label">Total:</span>
              <span className="summary-value">${Math.round(subtotal + shipping)}</span>
            </li>
          </ul>
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      
    </>
  );
};

export default Cart;
