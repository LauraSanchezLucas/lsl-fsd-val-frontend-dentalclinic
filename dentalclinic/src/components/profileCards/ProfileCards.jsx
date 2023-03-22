import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

export const ProfileCards = () => {
  return (
    <Container >
      <Card className="yo">
        {/* <Card.Img variant="top" src={personaje.image}/> */}
        <Card.Body>
          <Card.Title>Name:{user.name}</Card.Title>
          <Card.Text>Surname: {user.surname}</Card.Text>
          <Card.Text>Nif: {tuser.nif}</Card.Text>
          <Card.Text>birth date: {user.birth_date}</Card.Text>
          <Card.Text>Direction: {user.direction}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>Phone: {user.phone}</Card.Text>"
        </Card.Body>
      </Card>
    </Container>
  )
}

