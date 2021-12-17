import React, { useState, useEffect } from "react";
import axios from "axios";

import baseURL from "../../api/springapi";

import "./registration-form.css";

const Registration = () => {
  useEffect(() => {
    document.title = "Add users";
  }, []);

  //set the user to load data from database
  const [user, setUser] = useState({});

  //form handler function for submit
  const handleForm = (e) => {
    console.log(user); //get data check
    postDataToServer(user);
    e.preventDefault();
  };

  //create function to post data on server (create course)
  const postDataToServer = (data) => {
    axios.post(`${baseURL}/users`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        alert("User Added Successfully !!!");

        //making fields blank after submit
        
      },
      (error) => {
        console.log(error);
        console.log("error");
        alert("Oops, Something Went Wrong !!!");
      },
    );
  };

  return (
    <>
      <div>
        <section id="registration-form" className="py-3">
          <div className="container">
            <h1 className="l-heading">
              <span className="text-primary">Register</span> Here
            </h1>
            <p>Please fill out the form below to register</p>
            <form onSubmit={handleForm}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Address</label>
                <textarea
                  name="address"
                  id="address"
                  onChange={(e) => {
                    setUser({ ...user, address: e.target.value });
                  }}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
              <button type="reset" className="btn-reset">
                Clear 
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Registration;
