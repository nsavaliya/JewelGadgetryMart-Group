import React from "react";
import { Navbar } from "../components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Import the InputControl component (assuming it's a custom component)
import InputControl from "./InputControl";

// Import the 'auth' object from the 'firebase' module
import { auth } from "../firebase";

const ContactPage = () => {
  // Component for rendering the Contact Us page

  return (
    // Render the Navbar at the top of the page
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div class="row my-4 h-100">
          {/* Contact form */}
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              {/* Input for First Name */}
              <div class="form my-3">
                <label for="Name">First Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="first name"
                />
              </div>

              {/* Input for Last Name */}
              <div class="form my-3">
                <label for="Name">Last Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder=" Last name"
                />
              </div>

              {/* Input for Email */}
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>

              {/* Textarea for Message */}
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit button */}
              <div className="text-center">
                <button
                  className="btn btn-outline-dark btn-sm m-2" style={{ backgroundColor: '#0E1C4E', color: '#ffff' }}
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
