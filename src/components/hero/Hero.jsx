import axios from "axios";
import React from "react";
import "./HeroStyle.css";
import { useState } from "react";
import { useEffect } from "react";
import Api_Data from "../../Api_Data";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  // random image
  const movie = movies[Math.floor(Math.random() * movies.length)];
  // fetch data
  useEffect(() => {
    axios.get(Api_Data.requestPopular).then((Response) => {
      setMovies(Response.data.results);
      console.log(Response.data.results);
    });
  }, []);
// slicing the long overview
  const slicingString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  return (
    <>
      <div className="hero_container">
        <img
          className="hero_img"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
        />
        <div className="hero_info">
          <p className="hero_title">{movie?.title}</p>
          <div className="hero_btns">
            <button className="play-btn">Play</button>
            <button className="watch-btn">Watch Later</button>
          </div>
          <p style={{
            margin:"1rem 0px",
            fontFamily:"cursive"
            
          }}>Dropped: {movie?.release_date}</p>
          
          <p className="overview"> {slicingString(movie?.overview,150)} </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
