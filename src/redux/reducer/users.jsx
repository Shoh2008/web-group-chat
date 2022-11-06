import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { getUsers, addUser } = users.actions;
export default users.reducer;
