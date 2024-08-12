import React from 'react';

const CounterButton = () => {
  return (
    <button className="hover:border-[#943b2b] absolute flex items-center px-6 py-3 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-[#726666] rounded-full top-4/5 left-1/2">
      <img src={AddToCartIcon} alt="Add to Cart Icon" className="mr-2" />
      <p className="text-sm font-medium">Add to Cart</p>
    </button>
  );
};

export default CounterButton;
