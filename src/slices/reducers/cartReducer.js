import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItems: (state, action) => {
      const { items } = action.payload;
      state.items = items.map((item) => ({ id: nanoid(), amount: 0, ...item }));
    },
    increment: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.count += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
    removeCart: (state, action) => {
      const id = action.payload;
      const findItem = state.items.find((item) => item.id === id);
      if (findItem) {
        findItem.count = 0;
      }
    },
  },
});

export const { addItems, increment, decrement, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
