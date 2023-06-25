import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./features/balance/balanceSlice";
import toastSlice from "./features/toast/toastSlice";
import userSlice from "./features/users/usersSlice";

export default configureStore({
  reducer: {
    balance: balanceReducer,
    toast: toastSlice,
    users: userSlice,
  },
});
