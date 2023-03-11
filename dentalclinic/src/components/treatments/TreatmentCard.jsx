import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';



export const TreatmentCard = ({treatment}) => {
  return (
    <Container className="yo">
      <Card>
        {/* <Card.Img variant="top" src={personaje.image}/> */}
        <Card.Body>
          <Card.Title>{treatment.treatment}</Card.Title>
          <Card.Text>Description: {treatment.description}</Card.Text>
          <Card.Text>Price: {treatment.price} €</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
