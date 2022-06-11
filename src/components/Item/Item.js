import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="Item">
      <div>
        <img src={props.image} alt={props.name}/>
      </div>
      <p>{props.name}</p>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Item;