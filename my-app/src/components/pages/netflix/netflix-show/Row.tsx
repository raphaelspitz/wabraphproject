import React, { useEffect, useState } from 'react'
import './Row.css';

type ChildProps  = {
  title: string,
  fetchUrl: string,
  isLargeRow?:boolean
};

const Row:React.FC<ChildProps> = ({title,isLargeRow,fetchUrl}) => {
  const [movies, setmovies] = useState([]);
  const [scaleImgBiger, setScaleImgBiger] = useState(false);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const REACT_APP_API = "https://api.themoviedb.org/3";
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${REACT_APP_API}${fetchUrl}`)
        .then(response => response.json())
        .then(json => {
          setmovies(json.results);
        })
        
  }, []);
  return (
    <div>
    <h2 className="ml-4 title">
      {title}
    </h2>
      <div className="row-posters d-flex">
      {movies && movies.map((movie:any) => 
       <div>
         <img 
            style={{ backgroundColor: isHovered ? "red" : "transparent" }}
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}${selected === movie.id ? " row-poster-hover" : ""}`}
            onMouseEnter= {()=> setSelected(movie.id)}
            onMouseLeave={()=> setSelected(null)}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          />
       </div>
      )}
      </div>
    </div>
  )
}

export default Row
