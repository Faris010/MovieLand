import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import SearchIcon from './search.svg'


//3be92b63-api key

const API_URL = 'http://www.omdbapi.com?apikey=3be92b63';



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
      />  
    </div>  
    </div>
  );
}

export default App;
