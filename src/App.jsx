import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./component/MyNavbar";
import { Container } from "react-bootstrap";
import ActionBanner from "./component/ActionBanner";
import Carousel from "./component/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <MyNavbar />
      <Container className="text-bg-dark" fluid>
        <ActionBanner />
        <Carousel titleSaga="Marvel Saga" search="marvel" />
        <Carousel titleSaga="Transformers Saga" search="Transformers" />
        <Carousel titleSaga="Fast&Furious Saga" search="Fast&Furious" />
        <Footer />
      </Container>
    </>
  );
}

export default App;
