import React from 'react';

const OrderDetails = (props) => {
  return (
    <div style={props.isEmpty ? {display: 'block'} : {display: 'none'}}>
      <p>Order is empty!</p>
      <p>Please add some items!</p>
    </div>
  );
};

export default OrderDetails;