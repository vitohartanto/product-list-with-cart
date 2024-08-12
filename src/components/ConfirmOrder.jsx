import { addItems } from '../slices/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import data from '../data.json';
import orderConfirmed from '../assets/images/icon-order-confirmed.svg';

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItems({ items: data }));
    setPopUp(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-96 h-96">
        <div>
          <img src={orderConfirmed} alt="order confirmed logo" />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food</p>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h2>Nama Makanan</h2>
            <span>Berapa</span>
            <span>Harga</span>
          </div>
          <h1>Harga Asli</h1>
        </div>
        <div>
          <h1>Order Total</h1>
          <p>$Dolar</p>
        </div>
        <button className="w-full bg-[#c83b0e]">Start New Order</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
