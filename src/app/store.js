import { configureStore } from "@reduxjs/toolkit";
// import SliderReducer from "../features/slices/sliderSlice";

export const store = configureStore({
  reducer: {
    // slider: SliderReducer,
  },
});
export default store;