import AddToCartIcon from '../assets/images/icon-add-to-cart.svg';
import data from '../data.json';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addItems } from '../slices/reducers/cartReducer';

const Lists = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(addItems({ items: data }));
  }, [dispatch]);

  return (
    <div className="px-6">
      <div className="grid grid-cols-1 gap-6">
        {/* Dalaman */}
        {items?.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image.mobile}
              alt={item.name}
              className="rounded-lg"
            />

            <button className="hover:border-[#943b2b] absolute flex items-center px-6 py-3 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-[#726666] rounded-full top-4/5 left-1/2">
              <img
                src={AddToCartIcon}
                alt="Add to Cart Icon"
                className="mr-2"
              />
              <p className="text-sm font-medium">Add to Cart</p>
            </button>
            <div className="mt-8">
              <p className="text-[#726666] text-sm">{item.category}</p>
              <p className="text-[#270f08] font-semibold">{item.name}</p>
              <p className="text-[#943b2b] font-semibold">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        {/* Akhir Dalam */}
      </div>
    </div>
  );
};

export default Lists;
