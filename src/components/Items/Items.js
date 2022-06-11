import React from 'react';
import Item from "../Item/Item";

const Items = (props) => {
  return props.items.map((item, index) => {
    return <Item
      key={item.id}
      image={props.ITEMS[index].image}
      price={props.ITEMS[index].price}
      name={item.name}
      addItem={() => props.addItem(item.id)}
    />
  });
};

export default Items;