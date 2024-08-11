import { current } from '@reduxjs/toolkit';
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import emptyCart from '../assets/images/illustration-empty-cart.svg';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const filterCount = items.filter((item) => item.count > 0);
  const allPriceTotal = filterCount.reduce(
    (accumulator, currentValue) =>
      (accumulator += currentValue.price * currentValue.count),
    0
  );

  const totalCount = filterCount.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.count),
    0
  );

  const removeCartHandler = (id) => {
    dispatch(removeCart(id));
  };

  const confirmOrderHandler = () => {
    return setPopUp((prev) => !prev);
  };

  return (
    <div>
      {filterCount && totalCount > 0 ? (
        <div>
          <h2>Your Cart ({totalCount})</h2>
          {filterCount.map((item) => (
            <div key={item.id}></div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Your Cart (0)</h2>
          <img src={emptyCart} alt="empty-cart" />
          <p>Your added items will appear here</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
