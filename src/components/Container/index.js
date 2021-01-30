import React from 'react';
import './style.css';

const Container = ({ children }) => {
  return (
    <div className='container outer-container'>
      <div className='container inner-container'>
        {' '}
        <label className="label0"> </label>
        <label className='label1'>Name</label>
        <label className='label2'>Email</label>
        <label className='label3'>Phone Number</label>
        {children}
      </div>
    </div>
  );
};

export default Container;
