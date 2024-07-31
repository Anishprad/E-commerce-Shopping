import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import LongTitleProduct from "../TruncatedTitle/LongTitleProduct";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons/faGreaterThan";

const CartItems = () => {
  const { all_product, cartItems,addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItems font-medium my-10">
      <div className="cartitems-format-main grid grid-cols-7 mx-28 items-center mb-4">
        <p className="col-span-1 text-center">Products</p>
        <p className="col-span-2 text-center">Title</p>
        <p className="col-span-1 text-center">Price</p>
        <p className="col-span-1 text-center">Quantity</p>
        <p className="col-span-1 text-center">Total</p>
        <p className="col-span-1 text-center">Add/Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="flex flex-col gap-2">
              <div className="cartitems-format grid grid-cols-7 mx-28 my-4 items-center">
                <img src={item.image} className="cart-icon h-24 col-span-1 justify-self-center" alt="" />
                <div className="col-span-2 items-center">
                  <LongTitleProduct title={item.name} maxLength={40} />
                </div>
                <p className="col-span-1 text-center">${item.new_price}</p>
                <button className="cart-quantity col-span-1 text-center ">{cartItems[item.id]}</button>
                <p className="col-span-1 text-center">${cartItems[item.id] * item.new_price}</p>
                <div className="col-span-1 flex justify-center items-center gap-4 text-[24px] text-black cursor-pointer">
                  <FontAwesomeIcon onClick={() => addToCart(item.id)} icon={faPlus}/>
                <FontAwesomeIcon onClick={() => removeFromCart(item.id)} icon={faMinus} /> 
                </div>
              </div>
              <hr />
              </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
