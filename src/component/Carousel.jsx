import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
{
  /* Per quanto riguardo il loading e il messaggio di errore probailmente li aggiornerò nel weekend.(so che sono orrendi) Ora addioooooooooo */
}
class Carousel extends Component {
  state = {
    films: [],
    loading: true,
    error: null,
  };

  fetchFilm = () => {
    const searchParameter = this.props.search;
    const URL = `http://www.omdbapi.com/?apikey=137cb045&s=${searchParameter}`;

    this.setState({ loading: true, error: null });

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
          this.setState({ films: data.Search, loading: false });
        } else {
          this.setState({ error: "Nessun risultato trovato", loading: false });
        }
      })
      .catch((e) => {
        this.setState({ error: e.message, loading: false });
      });
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    const { films, loading, error } = this.state;
    const { titleSaga } = this.props;

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
        {loading && <p>Caricamento in corso...</p>}
        {error && <p style={{ color: "red" }}>Errore: {error}</p>}
        {!loading && !error && (
          <Slider {...settings}>
            {films.map((movie) => (
              <div key={movie.imdbID} className="p-2">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    );
  }
}

export default Carousel;
