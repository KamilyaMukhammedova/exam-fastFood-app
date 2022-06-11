import React from 'react';
import './ItemOrderDetails.css';

const ItemOrderDetails = (props) => {
  return (
    <div className="ItemOrderDetails">
      <p className="ItemOrderDetails_name">{props.name}</p>
      <p className="Price">{props.price} KGS</p>
      <p>x {props.count}</p>
      <p className="Price">{props.fullPrice} KGS</p>
      <button
        type="button"
        className="RemoveBtn"
        onClick={props.removeOneItem}
      >
        -
      </button>
    </div>
  );
};

export default ItemOrderDetails;