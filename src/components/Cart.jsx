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
    <div className="mx-6 mt-6 bg-white border rounded-lg">
      {filterCount && totalCount > 0 ? (
        <div>
          <h2>Your Cart ({totalCount})</h2>
          {filterCount.map((item) => (
            <div key={item.id}>
              <div></div>
              <button>✖️</button>
            </div>
          ))}

          <div>
            <h1>Order Total</h1>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="">
            <h2 className="text-center text-2xl text-[#c83b0e] font-bold ml-4 pt-4">
              Your Cart (0)
            </h2>
            <img
              src={emptyCart}
              alt="empty-cart"
              className="mx-auto mt-6 mb-6"
            />
            <p className="pb-6 text-center">
              Your added items will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
