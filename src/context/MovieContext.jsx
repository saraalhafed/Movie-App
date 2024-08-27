import { createContext ,useContext,useEffect, useState} from "react";
import axios from "axios"

const MovieContext =createContext();

  const API_KEY=import .meta.env.VITE_MOVIE_APIKEY /* i get that from tbdm page to communicate withe my app and i will need it in url to get the movies */

  // urls
  const BASE_URL = "https://api.themoviedb.org/3";
const discoverMoviesUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;
const searchMoviesUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;
const IMG_API_URL = 'https://image.tmdb.org/t/p/w1280';
// Movie Details including the movie videos
const movieDetailsUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;

export const MovieProvider = ({children})=>{
    const [movies,setMovies]=useState([])
    const[loading,setLoading]=useState(false) 
const defaultImg="https://cdn.pixabay.com/photo/2022/07/19/05/04/landscape-7331286_1280.jpg"

useEffect(()=>{
    setLoading(true);
    getMovies(discoverMoviesUrl);
},[])

const getMovies= async (url)=>{

try{
    const {data}=await axios.get(discoverMoviesUrl);
    setMovies(data.results)
}catch(error){
    console.log(error)
}finally{
    setLoading(false)
};}

const getMovieDetails= async (id)=>{
// Movie Details including the movie videos
const movieDetailsUrl = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=video&api_key=35c2fdc6d4e6902d61441ee05a0f77e8`;
    try{
        const {data:dataDetails}=await axios.get(movieDetailsUrl);
        return{dataDetails,video:dataDetails.videos.results[0].key}/* i check the data : from postmann , i past the  videoUrl in post mann 
        array has alot videos i need just one video with his key, for example the first video */
    }catch(error){
        console.log(error)
    }

}
    value={movies,loading,getMovies,getMovieDetails,defaultImg,IMG_API_URL,searchMoviesUrl}  
     return (

        <MovieContext.Provider value={{value}} >
            {children}
        </MovieContext.Provider>
    )
}

/* custom hook */
export const useMovie= useContext(MovieContext);