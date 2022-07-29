import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourtCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://mein.toubiz.de/api/v1/article/a790735f-10af-4b83-a6b8-65dd45036871/mainImage?format=image/jpeg&width=1900"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary" href="/courts/1">More</Button>
      </Card.Body>
    </Card>
  );
};

export default CourtCard;
