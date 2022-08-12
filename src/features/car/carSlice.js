import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model Y", "Model X", "Model 3"],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export default carSlice.reducer;
