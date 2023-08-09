import React from "react";

// Home Component: Renders a hero section with an image
const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          {/* Image container */}
          <div style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              className="card-img img-fluid"
              src="./assets/img.png"
              style={{ height: 300, width: 400 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
