import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
function Row({title,fetchURL,isLarge}) {

    const[movies,setMovies]=useState([])
    const baseURL="https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchURL]);
    console.log(movies)
    return (
        <div>
            <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {movies.map((movie)=>
            ((isLarge && movie.poster_path)||(!isLarge && movie.backdrop_path))
            &&
            (
            <img
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
            )
            )}
            </div>
        </div>
    </div>
    )
}

export default Row
