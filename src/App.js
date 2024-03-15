import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(currentCart => {
      const cartItemIndex = currentCart.findIndex(ci => ci.name === item.name);
      if (cartItemIndex > -1) {
        // Item already exists, update the quantity
        const newCart = [...currentCart];
        newCart[cartItemIndex] = {
          ...newCart[cartItemIndex],
          quantity: newCart[cartItemIndex].quantity + 1
        };
        return newCart;
      } else {
        // Item does not exist, add a new entry
        return [...currentCart, { ...item, quantity: 1 }];
      }
    });
  };


  return (
    <div className="App">
      <div className="left-container">
        <h1>Felix's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        <div className="bakery-items-container">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem name = {item.name} description = {item.description} price = {item.price} image = {item.image} onAddToCart={() => addToCart(item)}/>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h2>My Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <div key={index} className="itemNum">
                {item.quantity} x {item.name}
              </div>
            ))}
            <div className="total">
              Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </>
        ) : (
          <div className="nothing">Nothing here just yet!</div>
        )}
      </div>
    </div>
  );
}

export default App;
