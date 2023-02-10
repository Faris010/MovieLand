import './App.css';
import { useEffect, useState } from 'react';
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
  const [movies, setMovies]=useState([]);
  const [searchTerm, setSearchTerm]=useState('');
  const searchMovies=async(title)=>{
    const response=await axios.get(`${API_URL}&s=${title}`);
    const data=response.data;
    
    setMovies(data.Search);
    
  }
  useEffect(()=>{
    searchMovies('Spiderman');
  },[])
  return (
    <div className="App">
      <h1>MovieLand</h1>

    <div className="search">
      <input placeholder='Search for movies'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      />  
      <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}/>
    </div>  
    {/* {
      movies?.lenght>0 
      ?(
      ):(
        <div className='empty'> 
            <h2>No movies found</h2>
        </div>
      )
    } */}
      <div className='container'>
          {movies?.map((movie)=>(
             <MovieCard movie={movie}/>
            ))}
        </div>
    </div>
  );
}

export default App;
