import hamburgerImage from './assets/hamburger.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';
import {useState} from "react";
import {nanoid} from "nanoid";

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


  return (
    <div className="Container">

    </div>
  );
};

export default App;
