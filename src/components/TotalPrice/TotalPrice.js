import React from 'react';
import './TotalPrice.css';

const TotalPrice = ({totalPrice}) => {
  return (
    <div className="TotalPrice">
      <p>Total price: {totalPrice} KGS</p>
    </div>
  );
};

export default TotalPrice;