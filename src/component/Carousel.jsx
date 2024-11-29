import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  state = {
    films: [],
  };

  fetchFilm = () => {
    const searchParameter = this.props.search;
    const URL = `http://www.omdbapi.com/?apikey=137cb045&s=${searchParameter}`;
    fetch(URL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("risposta dei dati", data.Search);
        this.setState({ films: data.Search });
        console.log(this.state);
      })

      .catch((e) => {
        console.log("errore", e);
      });
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
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
        {},
      ],
    };
    return (
      <div className="netflix-carousel">
        <h4>{this.props.titleSaga}</h4>
        <Slider {...settings}>
          {this.state.films.map((movie) => (
            <div key={movie.imdbID} className="p-2">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
