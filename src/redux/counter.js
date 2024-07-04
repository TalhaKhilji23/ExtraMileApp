import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find(
        itemIns => itemIns.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(itemIns => itemIns.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(itemIns => itemIns.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const remaingingItems = state.items.filter(item => item.id !== action.payload);
      state.items = remaingingItems;
    },
  },
});

export const {addItem, incrementQuantity, decrementQuantity, removeItem} = counterSlice.actions;

export default counterSlice.reducer;
