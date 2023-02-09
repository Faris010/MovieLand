import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


//3be92b63-api key

const API_URL = 'http://www.omdbapi.com?apikey=3be92b63';

const movie1={
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}



const App= ()=> {
  const searchMovies=async(title)=>{
    const response=await axios.get(`${API_URL}&s=${title}`);
    const data=response.data;
    
    console.log(data);
    
  }
  useEffect(()=>{
    searchMovies('Spiderman');
  },[])
  return (
    <div className="App">
      <h1>MovieLand</h1>

    <div className="search">
      <input placeholder='Search for movies'
      value="Superman"
      onChange={()=>{}}
      />  
      <img src={SearchIcon} alt="search" onClick={()=>{}}/>
    </div>  
     <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
