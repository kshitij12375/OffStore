import React, { useState } from 'react';
import './Cart.css';
import kurti6 from '../assets/kurti6.webp';
import shirt5new from '../assets/shirt5new.png';
import kurti1 from '../assets/kurti1.webp';

const Cart = () => {
  const cartItems = [
    {
      image: kurti6,
      title: 'Vbuyz',
      description: 'Boat Neck Printed Layered Tunic',
      pricePerItem: 480,
    },
    {
      image: kurti1,
      title: 'Kalini',
      description: 'High Slit Kurta',
      pricePerItem:599,
      imageStyle: { width:'150px' },
      descriptionStyle: { marginRight:'26px' }
     
    },
    {
      image: shirt5new,
      title: 'Snitch',
      description: 'Menm Solid CasualShirt',
      pricePerItem:640,
      
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
        const totalPrice = item.pricePerItem * quantity;

        return (
          <div key={index} className="item-details" >
            <div className="item">
              <img src={item.image} alt="item" className="photo"  style={item.imageStyle} />
            </div>
            <div className="description" style={item.descriptionStyle}>
              <p className="title">{item.title}</p>
              <p style={item.descriptionStyle}>{item.description}</p>
              <p className="price">Rs.{item.pricePerItem}</p>
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
