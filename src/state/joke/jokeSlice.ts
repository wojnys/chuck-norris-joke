import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Joke } from "../../types/general";

export enum JokeType {
    RANDOM = "random",
    CATEGORY = "category",
    SEARCH = "search",
}

interface JokeState {
    joke: Joke;
    type: JokeType;
}

const initialState: JokeState = {
    joke: {
        categories: [],
        created_at: "",
        icon_url: "",
        id: "",
        updated_at: "",
        url: "",
        value: "",
    },
    type: JokeType.RANDOM,
};

const jokeSlice = createSlice({
    name: "joke",
    initialState,
    reducers: {
        setJoke: (state, action: PayloadAction<Joke>) => {
            state.joke = action.payload;
        },
        setJokeType: (state, action: PayloadAction<JokeType>) => {
            state.type = action.payload;
        },
    },
});

export const { setJoke, setJokeType } = jokeSlice.actions;
export default jokeSlice.reducer;
