import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const api = "http://localhost:5000/contracts";

const initialState = {
  contract: [],
  status: "idle",
  error: null,
};

export const addContract = createAsyncThunk("contract", async (contract) => {
  try {
    const response = await axios.post(api, contract);
    return response.data;
  } catch (error) {
    console.log("error", error);
    // Wrap the error to be more informative
    return { error: error.message };
  }
});

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addContract.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addContract.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = "success";
          toast.success("Contract added successfully");
        } else {
          state.status = "failed";
          toast.error(action.payload.message || "Failed to add contract");
        }
      })
      .addCase(addContract.rejected, (state, action) => {
        state.status = "failed";
        // Safely access message property
        const errorMessage = action.error?.message || "Failed to add contract";
        toast.error(errorMessage);
      });
  },
});

export default contractSlice.reducer;
