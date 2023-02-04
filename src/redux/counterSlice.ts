import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "types/redux";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIncrementedValue: (state) => {
      state.value += 1;
    },
  },
});

export const selectCounter = (state: RootState) => state.counterReducer;

export const { setIncrementedValue } = counterSlice.actions;

export default counterSlice.reducer;
