import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import './Cart.css';
import kurti6 from '../assets/kurti6.webp';
import shirt5new from '../assets/shirt5new.png';
import kurti1 from '../assets/kurti1.webp';
import tshirt1 from '../assets/tshirt1.jpg';
import tshirt3 from '../assets/tshirt3.jpg';
import tshirt4 from '../assets/tshirt4.webp';
import tshirt5 from '../assets/tshirt5.webp';
import tshirt7 from '../assets/tshirt7.png';
const Cart = () => {
  const location = useLocation();
  const { image, description, priceperitem } = location.state || {};
  const cartItems = [
    {
      image: image,
      description : description,
      priceperitem :priceperitem,
    }
  ];
  

  const [quantities, setQuantities] = useState(cartItems.map(() => 0));

  const increaseQuantity = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const decreaseQuantity = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index && qty > 0 ? qty - 1 : qty))
    );
  };
  return (
    <div>
      <h2 className="heading1">Your Cart</h2>
      <div className="heading2">({cartItems.length} Items)</div>
      <div className="heading3">
        <div className="subhead">Items</div>
        <div className="subhead">Details</div>
        <div className="subhead">Quantity</div>
        <div className="subhead">Total</div>
      </div>
      <hr />

      {cartItems.map((item, index) => {
        const quantity = quantities[index];
        const totalPrice = item.priceperitem * quantity;

        return (
          <div key={index} className="item-details" >
            <div className="item">
              <img src={item.image} alt="item" className="photo" />
            </div>
            <div className="description">
              <p  className = "title">{item.description}</p>
              <p className="price">Rs.{item.priceperitem}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => increaseQuantity(index)}>+</button>
            </div>
            <div className="totalPrice">Rs.{totalPrice}</div>
            
          </div>
          
        );
      })}
      
    </div>
  );
};

export default Cart;
