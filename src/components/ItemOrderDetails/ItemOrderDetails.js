import React from 'react';
import './ItemOrderDetails.css';

const ItemOrderDetails = (props) => {
  return (
    <div className="ItemOrderDetails">
      <p>{props.name}</p>
      <p className="Price">{props.price} KGS</p>
      <p>x {props.count}</p>
      <button type="button" className="RemoveBtn">-</button>
    </div>
  );
};

export default ItemOrderDetails;