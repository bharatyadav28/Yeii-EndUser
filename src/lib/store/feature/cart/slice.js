const { createSlice } = require("@reduxjs/toolkit");

let initialState = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState?.supplierId
    ? initialState
    : {
        supplierId: null,
        type: null,
        items: {},
        canAdd: true,
      },
  reducers: {
    addRequestSuccess: (state) => {
      state.canAdd = true;
      state.supplierId = null;
      state.type = null;
      state.items = {};
      localStorage.setItem("cart", JSON.stringify(state));
    },
    cancelAddRequest: (state) => {
      state.canAdd = true;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    addItem: (state, action) => {
      if (
        (state.supplierId && action.payload.supplierId !== state.supplierId) ||
        (state.type && action.payload.type !== state.type)
      ) {
        state.canAdd = false;
      } else {
        if (state.items[action.payload.item.id]) {
          state.items[action.payload.item.id].count++;
        } else {
          state.items[action.payload.item.id] = {
            ...action.payload.item,
            count: 1,
          };
        }
        state.supplierId = action.payload.supplierId;
        state.type = action.payload.type;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      state.items[action.payload.id].count--;
      if (state.items[action.payload.id].count === 0) {
        delete state.items[action.payload.id];
      }

      if (Object.keys(state.items).length === 0) {
        state.supplierId = null;
        state.type = null;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addRequestSuccess, cancelAddRequest, addItem, removeItem } =
  cartSlice.actions;

export default cartSlice;
