import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { EnvironmentContext } from "../context/EnvironmentContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDup, setPasswordDup] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const authContext = useContext(AuthContext); // user and dispatch properties
  const envContext = useContext(EnvironmentContext);
  const navigate = useNavigate();

  const preventPageAccess = () => {
    // DO not allow a user to access the signup page if already logged in
    const item = localStorage.getItem("user");

    if (item) {
      navigate("/");
    }
  };

  useEffect(() => {
    preventPageAccess();
  }, []);

  useEffect(() => {
    // Clear error and message after a set time period of being displayed

    if (!message && !error) {
      return;
    }

    let temp = setTimeout(() => {
      setError("");
      setMessage("");
    }, 5000);

    return () => {
      clearTimeout(temp);
    };
  }, [message, error]);

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const updatePasswordDup = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordDup(e.target.value);
  };
  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop page from reloading immediately when submitted

    setError("");

    if (!email || !password || !passwordDup || !userName) {
      setError("Required fields missing!");
      return;
    }

    if (password !== passwordDup) {
      setError("Passwords do not match!");
      return;
    }

    const response = await fetch(`${envContext.backendURL}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, userName: userName }),
    });

    const json = await response.json();

    if (response.ok) {
      authContext.dispatch({ type: "LOGIN", payload: json }); // save returned object to global state
      localStorage.setItem("user", JSON.stringify(json));
      navigate("/");
    } else {
      setError(json.error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <p className="login-title">ProdLodge</p>
          <p className='login-row-title'>
            Sign Up
          </p>
          <p className='login-description'>
            Please enter new login credentials below
          </p>
          <div className="login-input-row">
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-text-inputs"
              placeholder="Enter email"
            />
          </div>
          <div className="login-input-row">
            <label className="login-label">User Name</label>
            <input
              type="text"
              className="login-text-inputs"
              placeholder="Enter user name"
            />
          </div>
          <div className="login-input-row">
            <label className="login-label">
              Password
            </label>
            <input
              type="password"
              className="login-text-inputs"
              placeholder="Enter password"
            />
          </div>
          <div className="login-input-row">
            <label className="login-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="login-text-inputs"
              placeholder="Enter password"
            />
          </div>
          <button type="button" className="login-button">
            Sign Up
          </button>
          <p className='login-signup'>
          <br />
          <br />
          <br />
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
