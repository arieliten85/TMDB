import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="MovieBox">
        <img
          className="movieImage"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Placeholder"
        />

        <div>
          <h4
            style={{ fontSize: "15px", width: "100%", paddingTop: "15px" }}
            className="movieTitle texto"
          >
            {movie.title}
          </h4>
          <p className="texto"> - {movie.release_date.substring(0, 4)} -</p>
        </div>

        <p className="movieVote">{movie.vote_average}</p>
      </div>
    </Link>
  );
}
