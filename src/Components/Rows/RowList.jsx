import React from "react";
import requests from "../../../src/utils/requests";
import Row from "./Row";
import "./row.css";
import instance from "../../utils/Axios";

const RowList = () => {
  return (
    <>
    <p>Row List Starts Here</p>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
