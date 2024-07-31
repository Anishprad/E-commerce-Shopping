import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
    pauseOnHover: true,
  };
  return (
    <div className="popular">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-pop-in">POPULAR IN WOMEN</h1>
      <hr className="w-24 mx-auto border-t-2 border-gray-500 animate-slide-in" />
      <div className="popular-item mb-3">
      <Slider {...settings}>
        {data_product.map((item, i) => {
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
        })}
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
