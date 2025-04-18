import { Badge, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setJoke } from "../state/joke/jokeSlice";

const JokeCard = () => {
    const joke = useSelector((state: RootState) => state.joke);
    const dispatch = useDispatch();

    if (Object.keys(joke.joke).length === 0) {
        dispatch(
            setJoke({
                categories: [],
                created_at: "",
                icon_url: "",
                id: "",
                updated_at: "",
                url: "",
                value: "NO JOKES FOUND",
            })
        );
    }

    return (
        <Card className="flex justify-center w-full flex-col items-start p-4">
            <div className="">
                <CardMedia sx={{ height: 50, width: 50 }} image={joke.joke.icon_url} title="green iguana" />
            </div>

            <CardContent className="w-full text-left">
                <Badge badgeContent={joke.type} color={"primary"} className="pr-3"></Badge>
                <Typography gutterBottom variant="h5" component="div" className="text-left">
                    {joke.joke.categories.length > 0 ? Array.from(joke.joke.categories).slice(0, 20).join("").toUpperCase() : "No category"}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {joke.joke.value}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default JokeCard;
