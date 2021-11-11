import Button from 'react-bootstrap/Button'
import React from "react";
import Description from "./Description";
import Rating from "./Rating";
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'


function MovieCard({MovieList}){
    
    return(<div>
        <div className="movie_card" style={{backgroundImage:`url(${MovieList.url})`}} >
                <div className="movie_header" >
                    <img className="locandina" src={MovieList.url} />
                    <h1>{MovieList.title}</h1>
                    <h4>{MovieList.year}</h4>
                    <span className="minutes">117 min</span>
                    <p className="type">Action, Crime, Fantasy</p>
                </div>
                <div className="movie_desc">
                    <p className="text">Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.</p>
                </div> 
                     
        </div>
    </div>)
}
export default MovieCard;       