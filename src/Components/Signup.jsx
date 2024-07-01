import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
      <div className='card p-4' style={{ width: '20rem' }}>
        <h3 className='card-title text-center'>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control mt-2'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control mt-2'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              className='form-control mt-2'
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm your password'
            />
          </div>
          {error && <div className='text-danger mt-3'>{error}</div>}
          <button type='submit' className='btn btn-primary mt-3 w-100'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
