import React from 'react';
import './ItemOrderDetails.css';

const ItemOrderDetails = (props) => {
  return (
    <div className="ItemOrderDetails">
      <p className="ItemOrderDetails_name">{props.name}</p>
      <p className="ItemOrderDetails_price">{props.price} KGS</p>
      <p>x {props.count}</p>
      <p className="ItemOrderDetails_price">{props.fullPrice} KGS</p>
      <button
        type="button"
        className="ItemOrderDetails_rmvBtn"
        onClick={props.removeOneItem}
      >
        -
      </button>
      <button
        type="button"
        className="ItemOrderDetails_rmvAllBtn"
        onClick={props.removeAllItems}
      >
        Remove all
      </button>
    </div>
  );
};

export default ItemOrderDetails;