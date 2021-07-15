import alanBtn from '@alan-ai/alan-sdk-web';
import {useState, useEffect} from 'react';
import './Background.css';
import './Searchbar.css'

const SearchBar = () => {            // Test test
  return(
 <div>
   <input type = "text" value = "hi"/> //asdfsdaf
 </div>


  )
}          
function App() {

  const[cart, setCart] = useState([])
  const[menuItems, setMenuItems] = useState([])

  useEffect(() => {
    alanBtn({ 
      key: '7c5ee335c00b5a21983c8c964915dcc52e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if(commandData.command === 'getMenu'){
          setMenuItems(commandData.data)
        }
        else if(commandData.command === 'addTocart'){
          addtocart(commandData.data)
        }
      },
    });
  }, [])
  const addtocart = (menuItems) => {
    setCart((oldCart) => {
      return [...oldCart, menuItems]
    })
  }
  
  const uistyle = {
    color: "white",
    background: "#34BA77",
    border: "2px green",
    borderRadius: "4px",
    alignItems: 'center',
  }
  return (
    <div className="App">
      <h1 style={uistyle}>MENU</h1>
      {menuItems.map(menuItems => (
        <li key={menuItems.name}>{menuItems.name} - ${menuItems.price} - {menuItems.category}
        


        </li>
      ))}
    
    <h2 style={uistyle}>ORDERS</h2>
      {cart.map(cartItem => (
        <li key={cartItem.name}>{cartItem.name} - ${cartItem.price} - {cartItem.category}</li>
      ))}

    </div>
  );
}
//can github pls do something

export default App
