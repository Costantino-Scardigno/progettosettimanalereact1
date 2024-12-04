import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const AnimeDetails = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState([]);
  console.log("ID:", id);

  const FetchDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=137cb045&i=${id}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        if (data) {
          setDetails(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FetchDetails();
  }, []);
  console.log(Details);
  return (
    <Container fluid>
      <Row>
        <Col className="col-6 col-xl-4 text-center">
          <img className="" src={Details.Poster} />
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="">
              <Card.Title>{Details.Title}</Card.Title>
              <Card.Text>{Details.Plot}</Card.Text>
              <Card.Title>Writer: {Details.Writer}</Card.Title>
              <Card.Title>Actor: {Details.Actors}</Card.Title>
              <Card.Title>Genre: {Details.Genre}</Card.Title>
              <Card.Title>Language: {Details.Language}</Card.Title>

              <Card.Text>RELEASED: {Details.Released}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default AnimeDetails;
