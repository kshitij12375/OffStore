import { useCart } from './CartContext';
import React, { useState, useEffect } from 'react';
import './Cart.css'; 
import deletebtn from '../assets/deletebtn.png';
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    setQuantities(cartItems.map(() => 1)); // Sync quantities with cart
  }, [cartItems]);

  const increaseQuantity = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const decreaseQuantity = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  const handleDelete = (index) => {
    removeFromCart(index);
    setQuantities((prev) => prev.filter((_, i) => i !== index));
  };

  const totalAmount = cartItems.reduce(
    (acc, item, i) => acc + item.priceperitem * quantities[i],
    0
  );

  return (
    <>
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
            <div key={index} className="item-details">
              <div className="item">
                <img src={item.image} alt="item" className="photo" />
              </div>
              <div className="description">
                <p className="title">{item.description}</p>
              </div>
              <div className="quantity-controls">
                <button id="btn1"onClick={() => decreaseQuantity(index)}>-</button>
                <span>{quantity}</span>
                <button id="btn2"onClick={() => increaseQuantity(index)}>+</button>
                   <button id="btn3" onClick={() => handleDelete(index)}><img src ={deletebtn}></img></button>
              
              </div>
              
              <div className="totalPrice">Rs.{totalPrice}</div>
             
            </div>
          );
        })}
      </div>

      <div className="total-amount">
        <h3>Total Amount: Rs.{totalAmount}</h3>
      </div>
    </>
  );
};

export default Cart;
