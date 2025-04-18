// hooks/usePosts.ts
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Joke } from "../types/general";
import apiClient from "../api/apiClient";

export const fetchRandomJoke = async (): Promise<Joke> => {
    const { data } = await apiClient.get<Joke>("/random");
    return data;
};

export const searchTextJoke = async (query: string): Promise<Joke> => {
    const { data } = await apiClient.get(`/search?query=${query}`);
    if (data.result.length === 0) {
        return {} as Joke;
    }
    return data.result[0];
};

const fetchCategories = async (): Promise<string[]> => {
    const { data } = await apiClient.get<string[]>("/categories");
    return data;
};

export const searchCateogryJoke = async (category: string): Promise<Joke> => {
    const { data } = await apiClient.get(`/random?category=${category}`);
    if (data.result?.length === 0) {
        return {} as Joke;
    }
    return data;
};

///

export const useRandomJoke = (): UseQueryResult<Joke, Error> => {
    return useQuery<Joke>({
        queryKey: ["joke"],
        queryFn: fetchRandomJoke,
    });
};

export const useSearchJokes = (query: string): UseQueryResult<Joke, Error> => {
    return useQuery<Joke>({
        queryKey: ["joke", query],
        queryFn: () => searchTextJoke(query),
        enabled: !!query, // Only run the query if the query string is not empty
    });
};

export const useJokeCategories = (): UseQueryResult<string[], Error> => {
    return useQuery<string[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });
};

export const useSearchCategoryJokes = (category: string): UseQueryResult<Joke, Error> => {
    return useQuery<Joke>({
        queryKey: ["joke", category],
        queryFn: () => searchCateogryJoke(category),
        enabled: !!category, // Only run the query if the category is not empty
    });
};
