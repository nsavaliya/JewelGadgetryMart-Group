import React, { useState, useEffect } from "react";
import { Navbar } from "../components";
import { auth } from "../firebase";
import { getDatabase, ref, query, equalTo, onValue } from "firebase/database";

const Userprofile = () => {
    // State to hold user details and email
  const [userDetails, setUserDetails] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
      // State to hold user details and email
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
         // If a user is logged in, update the user's email state
        setUserEmail(user.email || "");
        // Fetch user details from the database using the email
        fetchUserDetails(user.email);
      } else {
      // If no user is logged in, clear the email and user details state
        setUserEmail("");
        setUserDetails(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

    // Function to fetch user details based on the email
     const fetchUserDetails = (email) => {
    const usersRef = ref(getDatabase(), "userlist");
    const userQuery = query(usersRef, equalTo("email", email));
    // Set up a real-time listener for changes to the user's data
    onValue(userQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userId = Object.keys(data)[0];
      // Set the user details state with the data for the found user
        setUserDetails(data[userId]);
      } else {
        setUserDetails(null);
      }
    }, (error) => {
      console.error("Error fetching user details:", error);
    });
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">User's Profile</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div className="form my-1">
              <img
                className="card-img img-fluid"
                src="./assets/user.jpg"
                style={{ height: 100, width: '100px' }}
              />
            </div>
            <div className="form my-3">
              <label htmlFor="lastName">Last Name: Patel</label>
              {userDetails?.lastName && <span>{userDetails.lastName}</span>}
            </div>
            <div className="form my-3">
              <label htmlFor="firstName">First Name: Mayur</label>
              {userDetails?.firstName && <span>{userDetails.firstName}</span>}
            </div>
            <div className="form my-3">
              <label htmlFor="email">Email: mayur213@gmail.com</label>
              {userEmail}
            </div>
            <div className="form my-3">
              <label htmlFor="password">Password: 332211</label>
              {userDetails?.password && <span>{userDetails.password}</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
