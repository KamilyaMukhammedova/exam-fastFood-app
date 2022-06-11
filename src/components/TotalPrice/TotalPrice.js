import React from 'react';
import './TotalPrice.css';

const TotalPrice = (props) => {
  return (
    <div
      className="TotalPrice"
      style={props.isEmpty === true ? {display: 'none'} : {display: 'block'}}
    >
      <p>Total price: {props.totalPrice} KGS</p>
    </div>
  );
};

export default TotalPrice;