import React from 'react';
import AddToCartIcon from '../assets/images/icon-add-to-cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { increment, decrement } from '../slices/reducers/cartReducer';

const CounterButton = ({ id }) => {
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  );
  const count = item ? item.count : 0;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment(id));
  };

  const decrementHandler = () => {
    dispatch(decrement(id));
  };
  return (
    <div>
      {count === 0 ? (
        <button
          onClick={incrementHandler}
          className="hover:border-[#943b2b] absolute flex items-center px-6 py-3 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-[#726666] rounded-full top-4/5 left-1/2"
        >
          <img src={AddToCartIcon} alt="Add to Cart Icon" className="mr-2" />
          <p className="text-sm font-medium">Add to Cart</p>
        </button>
      ) : (
        <div>
          <button onClick={decrementHandler}>
            <CiCircleMinus />
          </button>
          <span>{count}</span>
          <button onClick={incrementHandler}>
            <CiCirclePlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default CounterButton;
