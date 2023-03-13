import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Register.css'

export const Register = () => {
  return (
    <div className='main_register'>
      <Container>
          <Form>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control className='inputlogin' type="name" name='name' placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control className='inputlogin' type="surname" name='surname' placeholder="Enter suname" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridNif">
                  <Form.Label>Nif</Form.Label>
                  <Form.Control className='inputlogin' type="nif" name='nif' placeholder="Enter nif"  />
                  </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control className='inputlogin' type="direction" name='direction' placeholder="Enter adress" />
              </Form.Group>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Email</Form.Label>
                  <Form.Control className='inputlogin' type="email" name='email' placeholder="Enter email"/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Birth date</Form.Label>
                  <Form.Control className='inputlogin' type="birth_date" name='birth_date' placeholder="Enter birth date"  />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control className='inputlogin' type="phone" name='phone' placeholder="Enter phone" />
                  </Form.Group>
              </Row>
              <div className="buttonRegister">
              <Button variant="primary" type="submit" className='buttonSize'>Submit</Button>
              </div>
          </Form>
      </Container>
    </div>
  );
}
