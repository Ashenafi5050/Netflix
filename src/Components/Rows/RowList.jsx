// import React from "react";
import Row from "./Row";
import requests from "../../utils/requests.js";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending}isLargeRow={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} isLargeRow={true}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}isLargeRow={true} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={true}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;