const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  initialState,
  name: "count",
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

module.exports = countSlice.reducer;
module.exports.countActions = countSlice.actions;
