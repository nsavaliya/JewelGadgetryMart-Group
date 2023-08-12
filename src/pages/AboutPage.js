import React from 'react';
import { Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      {/* Include the Navbar component */}
      <Navbar />

      <div className="container my-3 py-3">
        <p className="lead text-center">
          Thank you for visiting our Mart! We are dedicated to offering an extensive selection of electronic products, catering to your diverse needs. From cutting-edge televisions to gaming consoles and advanced smartphones, we have it all.
          Our primary focus is to provide you with top-quality items that meet your expectations. We strive to deliver an exceptional shopping experience, making it effortless for you to find and purchase the latest technology. Your satisfaction is our utmost priority.
          Once again, thank you for choosing our Mart. We look forward to serving you and ensuring your complete satisfaction with our products and services.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
