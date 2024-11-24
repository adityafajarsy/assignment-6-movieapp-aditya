import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Movie from "./Movie";
import "./App.css";

export default function App() {
    const [movies, setMovies] = useState([]); 
    const [query, setQuery] = useState("avengers");

    useEffect(() => {
        fetchMovies(query);
    }, [query]);

    const fetchMovies = async (searchQuery) => {
      const apiURL = import.meta.env.VITE_API_URL;
      const apiKey = import.meta.env.VITE_API_KEY; 
        try {
            const response = await axios.get(
                `${apiURL}${apiKey}&s=${searchQuery}`
            );
            if (response.data.Response === "True") {
                setMovies(response.data.Search || []); 
            } else {
                setMovies([]);
                console.error(response.data.Error);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setMovies([]); 
        }
    };

    const handleSearch = (searchText) => {
        setQuery(searchText);
    };

    return (
      <>
        <div className="app">
          <Header onSearch={handleSearch} />
            <div className="movies-grid">
                {movies && movies.length > 0 ? (
                    movies.map((movie) => (
                        <Movie key={movie.imdbID} movie={movie} />
                    ))
                ) : (
                    <p className="no-movies">No movies found. Try searching for something else!</p>
                )}
            </div>
        </div>
        </>
    );
}
