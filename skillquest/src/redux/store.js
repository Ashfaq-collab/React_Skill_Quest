import { configureStore } from "@reduxjs/toolkit";
import questReducer from "./questSlice";

const Store = configureStore({
  reducer: {
    quests: questReducer
  },
});

export default Store;