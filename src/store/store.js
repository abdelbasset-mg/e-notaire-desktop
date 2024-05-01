import { configureStore } from "@reduxjs/toolkit";
import contractReducer from "./reducers/contract.reducer";
const store = configureStore({
  reducer: {
    contract: contractReducer,
  },
});

export default store;
