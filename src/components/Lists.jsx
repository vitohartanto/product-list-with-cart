import AddToCartIcon from '../assets/images/icon-add-to-cart.svg';
import data from '../../data.json';
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
    <div className="px-4">
      <div className="grid grid-cols-1">
        {/* Dalaman */}
        {items?.map((item) => (
          <div key={item.id} className="relative">
            <picture>
              {/* Gambar untuk desktop */}
              <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
              {/* Gambar untuk tablet */}
              <source media="(min-width: 768px)" srcSet={item.image.tablet} />
              {/* Gambar untuk mobile */}
              <img
                src={item.image.mobile}
                alt={item.name}
                className="rounded-lg"
              />
            </picture>
            <div className="absolute flex px-8 py-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg top-1/2 left-1/2">
              <img src={AddToCartIcon} alt="Add to Cart Icon" />
              <p className="">Add to Cart</p>
            </div>
          </div>
        ))}
        {/* Akhir Dalam */}
      </div>
    </div>
  );
};

export default Lists;
