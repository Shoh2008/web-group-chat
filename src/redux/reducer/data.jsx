import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteData: (state, action) => {
      state.data.map((item, index) => {
        if (item.id === action.payload) {
          state.data.splice(index, 1);
        }
      });
    },
  },
});

export const { getData, addData, deleteData } = data.actions;
export default data.reducer;
