import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart()); // when getDefaultCart is called only its key and its quantity is updated
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // console.log(cartItems)
  };
  
  const contextValue = { all_product, cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
export default ShopContextProvider;

// const removeFromCart=(itemId)=>{
//   setCartItems((prevCart)=>prevCart.filter((item)=>item!==itemId))
//   console.log(cartItems)
// };
// state.cartItems=state.cartitems.filter((item)=>{item.id !==id})

const addToCart=(items)=>{
  setCartItems((prev)=>({...prev, [items]:prev[items]+1}))
}

  