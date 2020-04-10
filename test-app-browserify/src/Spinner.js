import React from 'react';
const pic = require('./pic.png')

const Spinner = () => {  
  return (
    <div className="spinner">
      <img src={pic} className="App-logo" alt="logo" />
    </div>
  );  
}

export default Spinner;