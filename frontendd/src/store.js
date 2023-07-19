import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/home-page/userSlice";
import systemReducer from "./system-slice/systemSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    system: systemReducer,
  },
});
export default store;
