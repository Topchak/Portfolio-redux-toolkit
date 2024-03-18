import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,

  reducers:{
    toggle(state){
      return {
        cartIsVisible: !state.cartIsVisible
      }
    }
  },
});

// these exports should stay the way they are
export const cartVisibility = state => state.ui.cartIsVisible
export const uiActions = uiSlice.actions;

export default uiSlice;
