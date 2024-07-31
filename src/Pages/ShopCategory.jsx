import React, { useContext } from "react";
import "./CSS/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-Category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      <div className="shopCategory-sort">
       <p>Sort By</p>  
        <img src={drop_down} alt="" />
      </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                key={i}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
