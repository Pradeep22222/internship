import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modal: false,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModal: (state) => {
      state.modal = !state.modal;
    },
  },
});
const { reducer, actions } = systemSlice;
export const { setModal } = actions;
export default reducer;
