import React, { Component } from "react";
import "./NewCollections.css";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import new_image from "../NewCartimages/Image.png";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const NewCollections = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="NewCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="NewCollections-item w-full">
        <Slider {...settings}>
          {new_collections.map((item, i) => {
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
      

      <div className="cart w-[261px] h-261px border-gray-400 border-2 radiuss">
        <img src={new_image} className="w-[261px] h-[160px] newss" alt="" />
        <div className="flex flex-col gap-2 content w-[265.25px] h-[101px] radius p-2 ">
          <div className="w-[233.25px] gap-2 text-[15px]">
          <p className="">Nepal</p>
          </div>
          <div className="name flex justify-between w-[233.25px] text-[19px] gap-2">
            <p className="w-[137px] h-5 font-semibold">ABC camp</p>
            <span className="w-[88.25px] h-4">7D/6N</span>
          </div>
          <div className="names flex justify-between w-[233.25px] text-[19px] gap-2" >
            <p className="w-[137px] h-4">Starting Price</p>
            <span className="w-[88.25px] h-4 font-semibold">$500</span>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default NewCollections;
