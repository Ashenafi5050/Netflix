import { useState, useEffect } from "react";
import instance from "../../utils/Axios.js";
import axios from "axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import RowList from "./RowList";
import requests from "../../utils/requests";

const Row = ({title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerURL] = useState("");
  const base_url = "http://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log(error, error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "", {
        year: movie?.release_date?.split("-")[0],
      })
        .then((url) => {
          console.log("Trailer URL:", url);
          if (!url) {
            console.log("Trailor not found");
            return;
          }
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log("Error fetching trailer:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_poster">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={
              movie.poster_path || movie.backdrop_path?`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`: "https://via.placeholder.com/200x300?text=Image+Unavailable"
            }
            alt={movie?.title || movie.name || "Movie Poster"}
            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
