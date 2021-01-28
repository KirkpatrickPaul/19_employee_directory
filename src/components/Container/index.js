import React from 'react';
import './style.css';

const Container = ({ children }) => {
  return (
    <div className='container outer-container'>
      <label>Name</label>
      <label>Email</label>
      <label>Phone Number</label>
      <div className='container inner-container'>{children}</div>
    </div>
  );
}

export default Container;
