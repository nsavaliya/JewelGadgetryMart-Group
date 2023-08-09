import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "./InputControl";
import { auth } from "../firebase";

import styles from "./Register.module.css";
function Register() {
  const navigate = useNavigate();
  const [userdata, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    pass: "",
  });
  let name, value;
  const postUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setValues({ ...userdata, [name]: value });


  };



  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async (event) => {
    event.preventDefault();
    const { firstname, lastname, email, pass } = userdata;
    if(firstname && lastname && email && pass ) {

    
    const res = fetch("https://assignment3-9dd72-default-rtdb.firebaseio.com/userdata.json", {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        pass,
      }),

    });

    if (res) {
      setValues({
        firstname: "",
    lastname: "",
    email: "",
    pass: "",
      })
      alert("Data stored");
    } else {
      alert("fill all data");
    }
  }

     if (!userdata.firstname || !userdata.lastname || !userdata.email || !userdata.pass) {
       setErrorMsg("Fill all fields");
       return;
     }
     setErrorMsg("");

     setSubmitButtonDisabled(true);
     createUserWithEmailAndPassword(auth, userdata.email, userdata.pass)
       .then(async (res) => {
         setSubmitButtonDisabled(false);
         const user = res.user;
         await updateProfile(user, {
           displayFirstName: userdata.firstname,
           displayLastname: userdata.lastname,

         });
       navigate("/");
       })
       .catch((err) => {
         setSubmitButtonDisabled(false);
         setErrorMsg(err.message);
       });
   };

  return (
    <div className={styles.container}>

      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          type="text"
          name="firstname"
          id=""
          label="FirstName"
          placeholder="Enter your first name"
          value={userdata.firstname}
          onChange={postUserdata}
        // onChange={(event) =>
        // setValues((prev) => ({ ...prev, firstname: event.target.value }))
        // }
        />

        <InputControl
          type="text"
          name="lastname"
          id=""
          label="LastName"
          placeholder="Enter your Last name"
          value={userdata.lastname}
          onChange={postUserdata}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, lastname: event.target.value }))
        // }
        />

        <InputControl
          type="text"
          name="email"
          id=""
          label="Email"
          placeholder="Enter email address"
          value={userdata.email}
          onChange={postUserdata}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, email: event.target.value }))
        // }
        />
        <InputControl
          type="text"
          name="pass"
          id=""
          label="Password"
          placeholder="Enter password"
          value={userdata.pass}
          onChange={postUserdata}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, pass: event.target.value }))
        // }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;