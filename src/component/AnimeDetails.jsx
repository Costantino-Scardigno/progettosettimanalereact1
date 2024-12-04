import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const AnimeDetails = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState(null);

  useEffect(() => {
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
          console.log(Details);
          setDetails(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{Details.Title}</Card.Title>
        <Card.Text>{Details.Plot}</Card.Text>
        <Card.Text>{Details.Genre}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default AnimeDetails;
