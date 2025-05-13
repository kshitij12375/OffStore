import { useCart } from './CartContext';
import React, { useState, useEffect } from 'react';
import './Cart.css';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    setQuantities(cartItems.map(() => 1));
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

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/shop" className="shop-now-btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="heading1">Shopping Cart</h2>
        <div className="heading2">{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</div>
      </div>

      <div className="heading3">
        <div className="subhead">Product</div>
        <div className="subhead">Details</div>
        <div className="subhead">Quantity</div>
        <div className="subhead">Price</div>
        <div className="subhead"></div>
      </div>

      {cartItems.map((item, index) => {
        const quantity = quantities[index];
        const totalPrice = item.priceperitem * quantity;

        return (
          <div key={index} className="item-details">
            <div className="item">
              <img src={item.image} alt={item.description} className="photo" />
            </div>
            <div className="description">
              <p className="title">{item.description}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => increaseQuantity(index)}>+</button>
            </div>
            <div className="totalPrice">₹{totalPrice}</div>
            <button id="btn3" onClick={() => handleDelete(index)}>
              <FaTrash />
            </button>
          </div>
        );
      })}

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>₹{totalAmount}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
