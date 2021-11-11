import React from "react";
import MovieCard from './MovieCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import { myList } from "./myList";
import Description from "./Description";

function MovieList({movie,moviename}){
    return(
        <div className="movie">
            {movie.filter(el=>el.title.toLowerCase().includes(moviename.toLowerCase())).map(el =><MovieCard MovieList={el}/>)}
        </div>
    )
}
export default MovieList;