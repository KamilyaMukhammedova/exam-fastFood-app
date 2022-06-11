import React from 'react';
import './OrderDetails.css';
import TotalPrice from "../TotalPrice/TotalPrice";

const OrderDetails = (props) => {
  return (
    <div>
      <div
        className="OrderDetails_message"
        style={props.isEmpty === true ? {display: 'block'} : {display: 'none'}}
      >
        <p>Order is empty! Please add some items!</p>
      </div>
      <div>{props.children}</div>
      <TotalPrice totalPrice={props.totalPrice} isEmpty={props.isEmpty}/>
    </div>
  );
};

export default OrderDetails;