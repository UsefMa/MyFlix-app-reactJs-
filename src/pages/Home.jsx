import React from "react";
import Api_Data from "../Api_Data";
import Hero from "../components/hero/Hero";
import Sections from "../components/sections/Sections";

const Home = () => {
  return (
    <>
      <Hero />

      <Sections
        SectionId="2"
        title="requestPopular"
        fetchUrl={Api_Data.requestPopular}
      />
      <Sections
        SectionId="3"
        title="requestTopRated"
        fetchUrl={Api_Data.requestTopRated}
      />
      <Sections
        SectionId="4"
        title="requestTrending"
        fetchUrl={Api_Data.requestTrending}
      />
      <Sections
        SectionId="5"
        title="requestUpcoming"
        fetchUrl={Api_Data.requestUpcoming}
      />
      <Sections
        SectionId="1"
        title="requestHorror"
        fetchUrl={Api_Data.requestHorror}
      />
    </>
  );
};

export default Home;
