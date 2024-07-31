import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div>
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
      <button onClick={()=>{addToCart(props.id)}} className='bg-red-500 text-white border-none px-3.5 py-3 w-[200px] rounded-xl text-base mt-7'>Add To Cart</button>
      </div>
  );
};

export default Item;
