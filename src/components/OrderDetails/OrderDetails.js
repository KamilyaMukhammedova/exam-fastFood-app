import React from 'react';

const OrderDetails = (props) => {
  return (
    <div>
      <div style={props.isEmpty === true ? {display: 'block'} : {display: 'none'}}>
        <p>Order is empty!</p>
        <p>Please add some items!</p>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default OrderDetails;