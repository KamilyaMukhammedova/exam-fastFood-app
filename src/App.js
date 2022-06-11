import {useState} from "react";
import {nanoid} from "nanoid";
import hamburgerImage from './assets/hamburger.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';
import Items from "./components/Items/Items";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import ItemOrderDetails from "./components/ItemOrderDetails/ItemOrderDetails";

const ITEMS = [
  {name: 'Hamburger', price: 80, image: hamburgerImage},
  {name: 'Cheeseburger', price: 90, image: cheeseburgerImage},
  {name: 'Fries', price: 45, image: friesImage},
  {name: 'Coffee', price: 70, image: coffeeImage},
  {name: 'Tea', price: 50, image: teaImage},
  {name: 'Cola', price: 40, image: colaImage},
];

const App = () => {
  const [items, setItems] = useState([
    {name: 'Hamburger', count: 0, id: nanoid()},
    {name: 'Cheeseburger', count: 0, id: nanoid()},
    {name: 'Fries', count: 0, id: nanoid()},
    {name: 'Coffee', count: 0, id: nanoid()},
    {name: 'Tea', count: 0, id: nanoid()},
    {name: 'Cola', count: 0, id: nanoid()},
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const checkOrderState = () => {
    let isEmpty;
    const orders = items.filter(item => item.count !== 0);
    isEmpty = orders.length === 0;
    return isEmpty;
  };

  const addItem = itemId => {
    const itemsCopy = items.map((item, index) => {
      if (item.id === itemId) {
        setTotalPrice(prev => prev + ITEMS[index].price);
        return {
          ...item,
          count: item.count + 1,
        }
      }
      return item;
    });
    setItems(itemsCopy);
  };

  const removeOneItem = itemId => {
    const itemsCopy = items.map((item, index) => {
      if (item.id === itemId) {
        setTotalPrice(prev => prev - ITEMS[index].price);
        return {
          ...item,
          count: item.count - 1,
        }
      }
      return item;
    });
    setItems(itemsCopy);
  };

  const removeAllItems = itemId => {
    const itemsCopy = items.map((item, index) => {
      if (item.id === itemId) {
        setTotalPrice(prev => prev - (ITEMS[index].price * item.count));
        return {
          ...item,
          count: 0,
        }
      }
      return item;
    });
    setItems(itemsCopy);
  };

  const getItemOrderDetailsComponent = () => {
    return items.map((item, index) => {
      if (item.count !== 0) {
        return <
          ItemOrderDetails
          key={index}
          name={item.name}
          price={ITEMS[index].price}
          count={item.count}
          fullPrice={ITEMS[index].price * item.count}
          removeOneItem={() => removeOneItem(item.id)}
          removeAllItems={() => removeAllItems(item.id)}
        />;
      } else {
        return null;
      }
    });
  };

  const itemsComponent = <Items items={items} ITEMS={ITEMS} addItem={addItem}/>;
  const orderDetailsComponent =
    <OrderDetails
      isEmpty={checkOrderState()}
      children={getItemOrderDetailsComponent()}
      totalPrice={totalPrice}
    />;

  return (
    <div className="Container">
      <div className="Container_order">
        <h2>Order Details</h2>
        <div>
          {orderDetailsComponent}
        </div>
      </div>
      <div className="Container_items">
        <h2>Add items</h2>
        <div className="Container_items_inner">
          {itemsComponent}
        </div>
      </div>
    </div>
  );
};

export default App;

