import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        {/* Form fields and submit button here */}
      </form>
      <Link to="/register">Don't have an account? Register</Link>
    </div>
  );
}

export default Login;
