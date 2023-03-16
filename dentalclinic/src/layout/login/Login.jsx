import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { InputText } from '../../components/inputText/InputText';

export const Login = () => {
  
  return (
    <>
    <Container className='main main-size'>
      <Form>
      <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <InputText
           className={'inputlogin'}
           type={"email"} 
           name={'email'} 
           placeholder={"Enter email"} 
           />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputText 
          className={'inputlogin'}
          type={"password"} 
          name={'password'} 
          placeholder={"Password"} 
          />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit" 
        className='buttonSubmit' 
        >Login</Button>
      </Form>
    </Container>
    </>
  );
}