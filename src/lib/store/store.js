const { configureStore } = require("@reduxjs/toolkit");
const { default: cartSlice } = require("./feature/cart/slice");

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
