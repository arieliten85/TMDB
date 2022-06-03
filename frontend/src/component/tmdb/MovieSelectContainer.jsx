import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../../context/MovieContext";
import MovieSelect from "./MovieSelect";

export default function MovieSelectContainer() {
  const { movieSelect, setMovieSelect } = useContext(MovieContext);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0719e4f07abaf7a91364967ca675ffc0`
      )
      .then((res) => setMovieSelect(res.data));
  },[id])

  return (
    // <div className="MovieSelectContainers">
      <MovieSelect key={movieSelect.id} movieSelect={movieSelect} />
    // </div>
  );
}
