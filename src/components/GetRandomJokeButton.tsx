import { Button } from "@mui/material";
import { useRandomJoke } from "../hooks/useJokes";
import React from "react";

interface GetRandomJokeButtonProps {
    getJoke: () => void;
}

const GetRandomJokeButton: React.FC<GetRandomJokeButtonProps> = ({ getJoke }) => {
    const { data, isLoading, error } = useRandomJoke();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(data);
    return (
        <Button variant="contained" className="mt-4" onClick={() => getJoke()}>
            Get random joke
        </Button>
    );
};

export default GetRandomJokeButton;
