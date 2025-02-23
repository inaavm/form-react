import { useState } from 'react'
import './App.css'
import Contact from "./Contact.jsx"
import BigButton from "./BigButton.jsx"
import Product from './Product.jsx'
import Player from './Player.jsx'
import Greeting from './Greeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import GreetingHello from './GreetingHello.jsx'
import ButtonComponentFunction from './ButtonComponentFunction.jsx';
import GroceryItem from './GroceryItem.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonComponentFunction />
      <Contact />
      <Product name="Apple" price = {399} rating = "4.5/5.0" />;
      <Player songName = "mysong" artist= "myfavartist"/>;
      <Player>Props Child</Player>;
      <Greeting name="Alison" signedIn={true} />
      <BigButton>Props for children personlized</BigButton>
      <div>
        <ul>
          <li><GroceryItem customproperty = "Eggs"></GroceryItem></li>
          <li><GroceryItem customproperty = "Strawberry"></GroceryItem></li>
          <li><GroceryItem customproperty = "Banana"></GroceryItem></li>
          <li><GroceryItem customproperty = "Bread"></GroceryItem></li>
         </ul>
      </div>

      <Button text="something"/>
        <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    </>
    
  )
}

export default App

// function List(props) {
//   let titleText = `Favorite ${props.type}`;
//   if (props.children instanceof Array) {
//     titleText += 's';
//   }
//   return (
//     <div>
//       <h1>{titleText}</h1>
//       <ul>{props.children}</ul>
//     </div>
//   );
// }

// export default List;