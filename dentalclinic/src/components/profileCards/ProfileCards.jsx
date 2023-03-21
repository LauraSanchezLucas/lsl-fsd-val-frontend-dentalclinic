import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

export const ProfileCards = () => {
  return (
    <Container >
      <Card className="yo">
        {/* <Card.Img variant="top" src={personaje.image}/> */}
        <Card.Body>
          <Card.Title>{user.user}</Card.Title>
          <Card.Text>Description: {treatment.description}</Card.Text>
          <Card.Text>Price: {treatment.price} €</Card.Text>
          <Card.Text>Price: {treatment.price} €</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

