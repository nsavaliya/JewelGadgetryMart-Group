import { Navbar, Main, Product } from "../components";

// Define the Home component
function Home() {
  return (
    // Render the Navbar, Main, and Product components
    // using React fragments to group multiple components together
    <>
      <Navbar /> {/* Render the Navbar component */}
      <Main /> {/* Render the Main component */}
      <Product /> {/* Render the Product component */}
    </>
  );
}

// Export the Home component as the default export
export default Home;