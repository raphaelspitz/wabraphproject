import React, { useEffect, useState } from 'react'
import { api } from '../../../netflix-app/api/api';
import './Banner.css'

const Banner = () => {
  const [movie, setmovie] = useState<any>([]);
  const baseUrlBannerImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
  const REACT_APP_API = "https://api.themoviedb.org/3";
  

  fetch(`${REACT_APP_API}${api.fecthNetflixOriginals}`)
        .then(response => response.json())
        .then(json => {
          setmovie(json.results[0]);
          console.log(json.results[0]);
          console.log(movie);
          
        })
  }, [])
  return (
    <div className="banner"
      style={{
        backgroundSize:"cover",
        backgroundImage:`url(${baseUrlBannerImage}${movie.backdrop_path})`,
        backgroundPosition:"center center"
      }}
    >
     <div className="banner-contents"></div>
    </div>
  )
}

export default Banner
