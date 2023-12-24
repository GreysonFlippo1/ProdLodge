import React from "react";

const Login = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('logged in')
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <p className="login-title">ProdLodge</p>
          <p className='login-row-title'>
            Login
          </p>
          <p className='login-description'>
            Please enter login credentials below
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
            <label className="login-label">
              Password
            </label>
            <input
              type="password"
              className="login-text-inputs"
              placeholder="Enter password"
            />
          </div>
          <button type="button" className="login-button">
            Login
          </button>
          <p className='login-forgot-password'>
            Forgot Password?
          </p>
          <p className='login-signup'>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
