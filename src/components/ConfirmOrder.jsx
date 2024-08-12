import { addItems } from '../slices/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import data from '../data.json';
import orderConfirmed from '../assets/images/icon-order-confirmed.svg';

const ConfirmOrder = ({ filterItem, total, setPopUp }) => {
  const dispatch = useDispatch();
  const startNewOrderHandler = () => {
    dispatch(addItems({ items: data }));
    setPopUp(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex-col px-4 bg-white rounded-lg w-96">
        <div className="my-8 text-center">
          <img
            src={orderConfirmed}
            alt="order confirmed logo"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className="bg-[#fcf8f5] rounded-lg py-6 mx-4 h-48 overflow-y-auto">
          {filterItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-start pb-2 mx-8 mb-4 border-b-2"
            >
              <img
                src={item.image.thumbnail}
                alt={item.name}
                className="w-16 mr-6 rounded-lg"
              />
              <div className="mr-6">
                <h2 className="font-medium">{item.name}</h2>
                <span className="mr-4 text-[#c83b0e]">{item.count}x</span>
                <span className="text-[#837874]">
                  @ ${item.price.toFixed(2)}
                </span>
              </div>
              <h1 className="text-[#270f08] font-medium">
                ${(item.count * item.price).toFixed(2)}
              </h1>
            </div>
          ))}
          <div className="flex items-center justify-between mx-8">
            <h1 className="">Order Total</h1>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={startNewOrderHandler}
          className="mt-8 mb-8  w-full py-4 text-white text-center bg-[#c83b0e] rounded-full "
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
