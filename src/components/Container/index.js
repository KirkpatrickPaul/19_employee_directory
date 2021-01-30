import React from 'react';
import './style.css';

const Container = ({ children, handleSearchInput, handleSort, ...props }) => {
  return (
    <div className='container outer-container'>
      <input
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
          Name  <i className={props.nameSort}></i>
        </label>
        <label name='email' className='label2' onClick={handleSort}>
          Email<i className={props.emailSort}></i>
        </label>
        <label name='phone' className='label3' onClick={handleSort}>
          Phone Number<i className={props.phoneSort}></i>
        </label>
        {children}
      </div>
    </div>
  );
};

export default Container;
