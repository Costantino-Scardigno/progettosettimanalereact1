import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TvShows = (search, title) => {
  const [Tvshows, setTvshows] = useState([]);
  const navigate = useNavigate();

  const goToAnimePage = () => {
    navigate("/anime");
  };

  useEffect(() => {
    const searchParameter = search.search;
    const URL = `http://www.omdbapi.com/?apikey=137cb045&s=${searchParameter}`;
    fetch(URL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        if (data.Search) {
          setTvshows(data.Search);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  });
  const { titleSaga } = title;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="netflix-carousel">
      <h4>{titleSaga}</h4>
      <Slider {...settings}>
        {Tvshows.map((movie) => (
          <div key={movie.imdbID} className="p-2">
            <img onClick={goToAnimePage} src={movie.Poster} alt={movie.Title} />
            <Link to={`/Anime/${movie.imdbID}`}>ep 1</Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TvShows;
