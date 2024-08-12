import data from '../data.json';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addItems } from '../slices/reducers/cartReducer';
import CounterButton from './CounterButton';

const Lists = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(addItems({ items: data }));
  }, [dispatch]);

  return (
    <div className="px-6 lg:w-3/5">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items?.map((item) => (
          <div key={item.id} className="relative">
            <picture>
              <source media="(min-width:1024px)" srcSet={item.image.desktop} />
              <source media="(min-width:640px)" srcSet={item.image.tablet} />
              <img
                src={item.image.mobile}
                alt={item.name}
                className={`rounded-lg ${
                  item.count && 'border-2 border-[#c83b0e]'
                }`}
              />
            </picture>

            <CounterButton id={item.id} />
            <div className="mt-8">
              <p className="text-[#726666] text-sm">{item.category}</p>
              <p className="text-[#270f08] font-semibold">{item.name}</p>
              <p className="text-[#943b2b] font-semibold">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
