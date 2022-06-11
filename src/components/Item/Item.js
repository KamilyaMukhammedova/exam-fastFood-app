import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="Item" onClick={props.addItem}>
      <div>
        <img src={props.image} alt={props.name} className="Item_img"/>
      </div>
      <div className="Item_info">
        <p className="Item_name">{props.name}</p>
        <p>Price: {props.price} KGS</p>
      </div>
    </div>
  );
};

export default Item;