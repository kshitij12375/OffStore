import { useCart } from './CartContext';
import React, { useState } from 'react';
import './Cart.css'; 

const Cart = () => {
  const { cartItems } = useCart();
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

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
          <div key={index} className="item-details">
            <div className="item">
              <img src={item.image} alt="item" className="photo" />
            </div>
            <div className="description">
              <p className="title">{item.description}</p>
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
