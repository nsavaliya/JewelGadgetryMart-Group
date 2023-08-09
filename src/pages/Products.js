import React from 'react';
import { Navbar, Product } from "../components";

const Products = () => {
  return (
    <>
      {/* Render the Navbar at the top of the page */}
      <Navbar />
      
      {/* Render the Product component to display products or a single product */}
      <Product />
    </>
  );
};

export default Products;
