import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action){
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if(!existingItem){
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      }else{
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

    },
    removeItemFromCart(state, action){
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      console.log(existingItem.quantity);

      if(existingItem.quantity === 1){
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity--;
      }else{
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      
    },
  }

});

export const cartActions = cartSlice.actions;
export const totalQuantity = (state) => state.cart.totalQuantity;
export const cartItems = (state) => state.cart.items;
export default cartSlice;
