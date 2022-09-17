import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SectionsStyle.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Sections = ({ title, fetchUrl, SectionId }) => {
  // FETCH Data
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((Response) => {
      setFilms(Response.data.results);
    });
  }, [fetchUrl]);

  // make sliding (Right) work
  const sliderRight = () => {
    let slider = document.getElementById("slider" + SectionId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // make sliding (Left) work
  const sliderLeft = () => {
    let slider = document.getElementById("slider" + SectionId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // show data when it hover on the img

  const [shown, setShown] = useState(false);

  return (
    <>
      <h2 className="sections-title">{title}</h2>
      <MdChevronLeft onClick={sliderLeft} className="icon-left" />
      <MdChevronRight onClick={sliderRight} className="icon-right" />
      <div className="section-container" id={"slider" + SectionId}>
        {films.map((film) => (
          <div className="section-img">
            <img
             
              className="img_card"
              src={`https://image.tmdb.org/t/p/w500/${film?.backdrop_path}`}
              alt="cool"
            />
            
              <div className="shown_info">
                <p className="shown_title"> {film.title} </p>
              </div>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Sections;
