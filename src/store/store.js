import { configureStore } from "@reduxjs/toolkit";
import contractReducer from "./reducers/contract.reducers";
const store = configureStore({
  reducer: {
    contract: contractReducer,
  },
});

export default store;