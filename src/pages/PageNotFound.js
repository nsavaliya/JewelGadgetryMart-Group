import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const PageNotFound = () => {
  return (
    <>
      {/* Render the Navbar at the top of the page */}
      <Navbar />

      {/* Container to center the content and add padding */}
      <div className="container my-3 py-3">
        <div className="container">
          <div className="row">
            {/* Full-width column for the content */}
            <div className="col-md-12 py-5 bg-light text-center">
              {/* Display the "404: Page Not Found" message */}
              <h4 className="p-3 display-5">404: Page Not Found</h4>

              {/* Link to navigate back to the homepage */}
              <Link to="/" className="btn btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
