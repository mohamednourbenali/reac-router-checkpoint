import {React, useState} from 'react';
import { myList } from './movies/myList';
import Filter from './movies/Filter';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './movies/AddMovie'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'

export default function App() {
  const [movie, setMovie] = useState(myList);

  const addMovie=(newmovie)=>{
    return setMovie([...movie, newmovie])
  }
  return (
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AddMovie">addMovie</Link></li>
      </ul>
      <Switch>
        <Route exact path="/"><Filter movie={movie} /></Route>
        <Route path="/AddMovie"><AddMovie addMovie={addMovie}/></Route>
      </Switch>      
    </div>
    </Router>
  )
}

