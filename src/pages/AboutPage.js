import React from 'react';
import { Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      {/* Include the Navbar component */}
      <Navbar />

      <div className="container my-3 py-3">
        {/* Section about the page */}
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Thank you for visiting our Mart! We are dedicated to offering an extensive selection of electronic products, catering to your diverse needs. From cutting-edge televisions to gaming consoles and advanced smartphones, we have it all.
          Our primary focus is to provide you with top-quality items that meet your expectations. We strive to deliver an exceptional shopping experience, making it effortless for you to find and purchase the latest technology. Your satisfaction is our utmost priority.
          Once again, thank you for choosing our Mart. We look forward to serving you and ensuring your complete satisfaction with our products and services.
        </p>

        {/* Section about the items */}
        <h2 className="text-center py-4">Our Items</h2>
        <div className="row" style={{ marginLeft: '325px' }}>
          {/* Item: Jewelery */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>

          {/* Item: Electronics */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
