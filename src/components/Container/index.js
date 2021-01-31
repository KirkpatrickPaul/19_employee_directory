import React from 'react';
import './style.css';

const Container = ({ children, handleSearchInput, handleSort, ...props }) => {
  return (
    <div className='container outer-container'>
      <input
        className='search'
        value={props.search}
        name='search'
        onChange={handleSearchInput}
        type='search'
        placeholder='Search for a name...'
      />
      <div className='container inner-container'>
        {' '}
        <label className='label0'> </label>
        <label name='name' className='label1' onClick={handleSort}>
          Name  
        </label>
        <label name='email' className='label2' onClick={handleSort}>
          Email
        </label>
        <label name='phone' className='label3' onClick={handleSort}>
          Phone Number  
        </label>
        {children}
      </div>
    </div>
  );
};

export default Container;
