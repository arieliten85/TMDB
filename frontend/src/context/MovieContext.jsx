//creo el conexto

import axios from "axios";
import React, { useEffect } from "react";

import { createContext, useState } from "react";
import { useLocation } from "react-router";

export const MovieContext = createContext();

function useQuery() {
  const { search } = useLocation();
 

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieSelect, setMovieSelect] = useState([]);
  //const [search, setSearch] = useState([]);

  const query = useQuery();
  const search = query.get("search")


  
  useEffect(() => {
    
    const searchUrl = search 
      ? `https://api.themoviedb.org/3/search/movie?api_key=0719e4f07abaf7a91364967ca675ffc0&language=en-US&query=${search}&page=1&include_adult=false`
      : "https://api.themoviedb.org/3/movie/top_rated?api_key=0719e4f07abaf7a91364967ca675ffc0"
      
      axios
      .get(searchUrl)
      .then((resp) => {setMovies(resp.data.results)})
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        movieSelect,
        setMovieSelect,
        // search,
        // setSearch
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
