import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  // State to store the products data
  const [data, setData] = useState([]);
  // State to store the filtered products data based on the category
  const [filter, setFilter] = useState(data);
  // State to track the loading state of data
  const [loading, setLoading] = useState(false);
  // Variable to track if the component is still mounted
  const [selectedCategory, setSelectedCategory] = useState("all");

  let componentMounted = true;

  const dispatch = useDispatch();
// Function to dispatch the 'addCart' action to add a product to the cart
  const addProduct = (product) => {
    dispatch(addCart(product))
  }
 // Fetch products data from an API using useEffect
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const data = await response.json();
        setData(data);
        setFilter(data.filter((product) => product.category === "jewelery" || product.category === "electronics"));
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);
  // Skeleton component to display loading UI
  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };
// Function to filter products based on category
const filterProduct = (category) => {
  setSelectedCategory(category);
  if (category === "all") {
    const allCategoriesData = data.filter(
      (product) =>
        product.category === "jewelery" || product.category === "electronics"
    );
    setFilter(allCategoriesData);
  } else {
    const filteredData = data.filter((product) => product.category === category);
    setFilter(filteredData);
  }
};

   // Component to display the products
  const ShowProducts = () => {
    return (
       // Render the filtered products
      <>
        <div className="buttons text-center py-5">
      
          <button className="btn btn-outline-dark btn-sm m-2" style={{ backgroundColor: '#0E1C4E', color: '#ffff' }} onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2"  style={{ backgroundColor: '#0E1C4E', color: '#ffff' }}onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">Price:${product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body" >
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1" style={{ backgroundColor: '#4682A9', color: '#ffff' }}>
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" style={{ backgroundColor: '#4682A9', color: '#ffff' }} onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;