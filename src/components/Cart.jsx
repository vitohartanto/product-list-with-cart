import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../slices/reducers/cartReducer';
import { FaRegTimesCircle } from 'react-icons/fa';
import ConfirmOrder from './ConfirmOrder';
import emptyCart from '../assets/images/illustration-empty-cart.svg';
import carbonNeutral from '../assets/images/icon-carbon-neutral.svg';

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
    <div className="mx-6 mt-6 bg-white border rounded-lg lg:w-96 lg:mt-0 lg:self-start">
      {filterCount && totalCount > 0 ? (
        <div>
          <h2 className="text-center text-2xl text-[#c83b0e] mb-4 font-bold ml-4 pt-4">
            Your Cart ({totalCount})
          </h2>
          {filterCount.map((item) => (
            <div
              key={item.id}
              className="flex justify-between pb-2 mx-8 mb-2 border-b-2"
            >
              <div>
                <h1 className="mb-1 font-medium">{item.name}</h1>
                <div className="flex">
                  <span className="text-[#c83b0e] mr-4">{item.count}x</span>
                  <span className="text-[#837874] mr-4 font-light">
                    @ ${item.price.toFixed(2)}
                  </span>
                  <span className="text-[#270f08] font-normal">
                    ${(item.count * item.price).toFixed(2)}
                  </span>
                </div>
              </div>
              <button onClick={() => removeCartHandler(item.id)}>
                <span className="text-[#837874]">
                  <FaRegTimesCircle />
                </span>
              </button>
            </div>
          ))}

          <div className="mx-8">
            <div className="flex items-center justify-between my-3">
              <h1>Order Total</h1>
              <span className="text-2xl font-bold">
                ${allPriceTotal.toFixed(2)}
              </span>
            </div>
            <div className="bg-[#fcf8f5] flex rounded-lg justify-center items-center p-4 ">
              <img
                src={carbonNeutral}
                alt="carbon neutral icon"
                className="mr-2"
              />
              <p className="text-sm ">
                This is <span className="font-medium">carbon-neutral</span>{' '}
                delivery
              </p>
            </div>
            <button
              onClick={confirmOrderHandler}
              className="bg-[#c83b0e] text-center w-full px-16 py-4 rounded-full text-lg font-medium text-white my-5"
            >
              Confirm Order
            </button>
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
      {popUp ? (
        <ConfirmOrder
          filterItem={filterCount}
          total={allPriceTotal}
          setPopUp={setPopUp}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
