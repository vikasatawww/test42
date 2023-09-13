import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        {/* Form fields and submit button here */}
      </form>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default Register;
