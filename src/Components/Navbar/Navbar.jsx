import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { all_product,cartItems } = useContext(ShopContext);
  console.log("Cart Items Count:", cartItems[all_product.id]);
  
  return (
    <div className="navbar flex justify-around p-[6px] shadow-sm shadow-black">
      <div className="nav-logo flex items-center gap-4">
        <img className="h-18" src={logo} alt="" />
        <p className="text-[20px] font-semibold">SHOPPER</p>
      </div>
      <ul className="nav-menu flex items-center gap-8 text-[16px] cursor-pointer">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart flex gap-4 items-center">
        <Link to="/login">
          <button className=" border-2 bg-white cursor-pointer px-3 py-1 rounded-xl text-md font-[10px]">
            Login
          </button>
        </Link>

        <Link to="/cart">
          <img className="font-medium" src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{cartItems[all_product.id]}</div>
      </div>
    </div>
  );
};

export default Navbar;
