import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  selectedUser: {},
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { payload = [] }) => {
      state.users = payload;
    },
    setselectedUser: (state, { payload = {} }) => {
      state.selectedUser = payload;
    },
  },
});
const { reducer, actions } = usersSlice;
export const { setUsers, setselectedUser } = actions;
export default reducer;
