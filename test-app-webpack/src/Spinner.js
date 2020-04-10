import React from 'react';
import pic from './pic.png';
// const pic = require('./DV2021_laurila.jpg')

const Spinner = () => {  
  return (
    <div className="spinner">
      <img src={pic} className="App-logo" alt="logo" />
    </div>
  );  
}

export default Spinner;