const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    suppierId: null,
    type: null,
    items: {},
    canAdd: true,
  },
  reducers: {
    // addItemRequest: (state, action) => {
    //   if (
    //     action.payload.suppierId !== state.suppierId ||
    //     (state.type && action.payload.type !== state.type)
    //   ) {
    //     state.canAdd = false;
    //   }
    // },
    addRequestSuccess: (state) => {
      state.canAdd = true;
      state.suppierId = null;
      state.type = null;
      state.items = {};
    },
    cancelAddRequest: (state) => {
      state.canAdd = true;
    },
    addItem: (state, action) => {
      if (
        (state.suppierId && action.payload.suppierId !== state.suppierId) ||
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
        state.suppierId = action.payload.suppierId;
        state.type = action.payload.type;
      }
    },
    removeItem: (state, action) => {
      state.items[action.payload.id].count--;
      if (state.items[action.payload.id].count === 0) {
        delete state.items[action.payload.id];
      }

      if (Object.keys(state.items).length === 0) {
        state.suppierId = null;
        state.type = null;
      }
    },
  },
});

export const { addRequestSuccess, cancelAddRequest, addItem, removeItem } =
  cartSlice.actions;

export default cartSlice;
