import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();

  return <div>{}</div>;
};

export default Cart;
