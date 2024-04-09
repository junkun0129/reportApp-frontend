import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialState = {
  test: string;
};
const initialState: initialState = {
  test: "",
};
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
  },
});

export const testReducer = testSlice.reducer;
export const { setTest } = testSlice.actions;
