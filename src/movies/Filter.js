import React from 'react';
import { useState } from 'react';
import MovieList from './MovieList';

export default function Filter(props) {
    const [moviename,setMoviename] = useState("");
    const handleChange=(e)=>{
        setMoviename(e.target.value) ;
    }
    return (
        <div>
            <input type="text" placeholder="title name" onChange={handleChange}/>
            <MovieList movie={props.movie}  moviename={moviename} />
        </div>
    )
}

