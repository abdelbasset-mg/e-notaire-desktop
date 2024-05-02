import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const api = "http://localhost:8000/contracts/";

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
    throw error;
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
          toast.success("contract added successfully");
        }else{
            toast.error(action.payload.message || "Failed to add contract")
        }
      })
      .addCase(addContract.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload.message || "Failed to add contract");
      });
  },
});

export default contractSlice.reducer;