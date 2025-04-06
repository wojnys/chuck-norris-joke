import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./joke/jokeSlice";

export const store = configureStore({
    reducer: {
        // Add reducers here
        joke: jokeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
