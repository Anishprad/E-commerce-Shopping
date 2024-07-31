import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import  { ShopContext } from "../../Context/ShopContext"

const ProductDisplay = ({product}) => {
  const {addToCart,removeFromCart} = useContext(ShopContext)
  return (
    <div className='productDisplay flex my-5 mx-28' >
      <div className="productDisplay-left flex gap-5">
        <div className="productDisplay-left-img-list flex flex-col gap-2.5 ">
            <img className='h-[100px]' src={product.image} alt="" /> 
            <img className='h-[100px]' src={product.image} alt="" />
            <img className='h-[100px]' src={product.image} alt="" />
            <img className='h-[100px] ' src={product.image} alt="" />
        </div>
        <div className="productDisplay-left-img ">
        <img className='productDisplay-left-main-img h-[430px]' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right flex flex-col gap-2.5 mx-14">
        <h1 className='text-#3d3d3d text-lg font-medium '>{product.name}</h1>
        <div className="productDisplay-right-stars flex items-center gap-1 h-5 text-#1c1c1c">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p className='font-medium'>(122)</p>
        </div>
        <div className="productDisplay-right-price flex gap-10 text-lg font-medium mt-3  ">
            <div className="productDisplay-right-oldPrice line-through text-#818181 ">${product.old_price}</div>
            <div className="productDisplay-right-newPrice text-#ff4141">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-size">
            <h1 className='text-2xl mt-4 font-semibold text-gray'>Select Size</h1>
            <div className="productDisplay-right-sizes flex gap-2.5 mt-7">
            <div className='py-3 px-6 rounded-lg shadow-sm shadow-black cursor-pointer bg-white '>S</div>
            <div className='py-3 px-6 rounded-lg shadow-sm shadow-black cursor-pointer bg-white '>M</div>
            <div className='py-3 px-6 rounded-lg shadow-sm shadow-black cursor-pointer bg-white '>L</div>
            <div className='py-3 px-6 rounded-lg shadow-sm shadow-black cursor-pointer bg-white '>XL</div>
            <div className='py-3 px-6 rounded-lg shadow-sm shadow-black cursor-pointer bg-white '>XXL</div>
            </div>
        </div>
        <div className='buttons flex gap-5'>
        <button onClick={()=>{addToCart(product.id)}} className='bg-red-500 text-white border-none px-3.5 py-3 w-[200px] rounded-xl text-base mt-7'>Add To Cart</button>
        <button onClick={()=>{removeFromCart(product.id)}} className='bg-red-500 text-white border-none px-3.5 py-3 w-[200px] rounded-xl text-base mt-7'>Remove From Cart</button>
        </div>
        <div className="productDisplay-right-category">
            <p><span className='font-bold text-base'>Category:</span> Women, T-Shirt, Crop-Top</p>
            <p><span className='font-bold text-base'>Tags:</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
