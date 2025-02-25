import "./banner.css";
import axios from "../../utils/Axios";
import requests from "../../utils/requests";
import { useState, useEffect } from "react";
// import instance from "../../utils/Axios";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        const results = request.data.results;

        if (results?.length > 0) {
          const randomIndex =
            results[Math.floor(Math.random() * results.length)];
          setMovie(randomIndex);
        }
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("Error fetching movie:", error);
        }
      }
    };

    fetchMovie();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"100vh"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.original_name || "Untitled"}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
