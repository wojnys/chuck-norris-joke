import { Button, Container } from "@mui/material";
import JokeCard from "../JokeCard";
import { useRandomJoke } from "../../hooks/useJokes";
import JokeForm from "../forms/JokeForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JokeType, setJoke, setJokeType } from "../../state/joke/jokeSlice";
import { RootState } from "../../state/store";

const MainPage = () => {
    const { data, isLoading, error, refetch } = useRandomJoke();

    const joke = useSelector((state: RootState) => state.joke.joke);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data?.value) {
            dispatch(setJoke(data));
            dispatch(setJokeType(JokeType.RANDOM));
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    console.log(joke);

    return (
        <Container className="w-full flex flex-col justify-center h-[100vh]">
            <JokeForm />

            <div className="w-full flex justify-center py-4">{joke?.value ? <JokeCard /> : <p>No jokes found</p>}</div>

            <Button variant="contained" className="mt-4" onClick={() => refetch()}>
                Get random joke
            </Button>
        </Container>
    );
};

export default MainPage;
