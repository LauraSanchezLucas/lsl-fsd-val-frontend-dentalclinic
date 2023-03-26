import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import doctor1 from '../../assets/doctor1.jpeg';
import doctor2 from '../../assets/doctor2.jpeg';
import doctor3 from '../../assets/doctor3.jpeg'

export const AboutUs = () => {
  return (
    <CardGroup>
      <Card>
        <Card><img className="d-block w-100" src={doctor2} alt="First slide"/></Card>
        <Card.Body>
          <Card.Title>Dra. Beatriz Izquierdo</Card.Title>
          <Card.Text>
            <ul>
                <li>Nº Colegiado 46005252</li>
                <li>Graduated in Dentistry at the Catholic University of Valencia (2020).</li>
                <li>Graduated in filling techniques with hyaluronic acid.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card><img className="d-block w-100" src={doctor1} alt="First slide"/></Card>
        <Card.Body>
          <Card.Title>Dr. José Lloret</Card.Title>
          <Card.Text>
          <ul>
                <li>Nº Colegiado 46001881</li>
                <li>Bachelor of Dentistry</li>
                <li>Certified in prosthetics, aesthetics and implants by the University of Houston Texas USA.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
      <Card><img className="d-block w-100" src={doctor3} alt="First slide"/></Card>
        <Card.Body>
          <Card.Title>Alejandra Sanchez</Card.Title>
          <Card.Text>
          <ul>
                <li>Nº Colegiado 46001771</li>
                <li>Degree in Dentistry from the University of the Basque Country 1991.</li>
                <li>Exclusive dedication in periodontics and implants.</li>
            </ul>
          </Card.Text>
        </Card.Body>
    
      </Card>
    </CardGroup>
  );
}


