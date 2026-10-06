import { configureStore } from "@reduxjs/toolkit";
import questReducer from "./questSlice";

const Store = configureStore({
    reducer: {
        quests: questReducer
    },
});

Store.subscribe(() => {
    const state = Store.getState();

    localStorage.setItem(
        "skillquest_quests",
        JSON.stringify(state.quests)
    );
});


export default Store;