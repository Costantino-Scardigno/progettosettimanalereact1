import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./component/MyNavbar";
import { Container } from "react-bootstrap";
import ActionBanner from "./component/ActionBanner";
import Carousel from "./component/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./component/TvShows";
import AnimeDetails from "./component/AnimeDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container className="text-bg-dark" fluid>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ActionBanner />
                  <Carousel titleSaga="Marvel Saga" search="marvel" />
                  <Carousel
                    titleSaga="Transformers Saga"
                    search="Transformers"
                  />
                  <Carousel
                    titleSaga="Fast&Furious Saga"
                    search="Fast&Furious"
                  />
                  <Carousel titleSaga="SpiderMan" search="amzingSpiderman" />
                </>
              }
            />

            <Route
              path="/Anime"
              element={
                <>
                  <ActionBanner />
                  <TvShows search="naruto" /> <TvShows search="pokemon" />
                  <TvShows search="dragonball" />
                </>
              }
            />
            <Route path="/Anime/:id" element={<AnimeDetails />} />
          </Routes>

          {/* Ti mostrerà il messaggio di errore visto che non troverà nulla che corrisponde ad "amzingSpiderman" */}
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
