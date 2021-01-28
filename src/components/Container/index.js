import React from 'react';
import './style.css';

const Container = ({ children }) => {
  return (
    <div className='container outer-container'>
      <label className='label1'>Name</label>
      <label className='label2'>Email</label>
      <label className='label3'>Phone Number</label>
      <div className='container inner-container'>{children}</div>
    </div>
  );
}

export default Container;
