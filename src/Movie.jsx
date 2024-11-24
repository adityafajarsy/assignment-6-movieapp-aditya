import React from "react";

export default function Movie({ movie }) {
    return (
        <>
      <div className="movie-card">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <p className="movie-year">{movie.Year}</p>
        </div>
      </div>
      </>
    );
  }