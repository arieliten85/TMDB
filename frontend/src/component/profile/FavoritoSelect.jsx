import React from "react";

import { Link } from "react-router-dom";

export default function FavoritoSelect({ fav }) {
  return (
    <Link to={`/movie/${fav.favoriteId}`}>
      <div className="MovieBox">
        <img
          className="movieImage"
          src={`https://image.tmdb.org/t/p/original${fav.poster_path}`}
          alt="Placeholder"
        />
      </div>
    </Link>
  );
}
