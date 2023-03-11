import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { NavBar1 } from '../../components/header/NavBar1';
import React, {  useState } from "react";

import './Login.css'

export const Login = () => {
        // hook
        const [valor, setValor] = useState({
          email: "",
          password: "",
        });
      
        // console.log(valor);
      
        const { email, password } = valor;
        const handleChange = ({target}) => {
        //   console.log(target);
      
          const {name, value} = target
          setValor({
            ...valor,
            [name]: value,
          });
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(valor);
      
        }
  return (
    <>
    <NavBar1/>
    <Container className='main main-size'>
      <Form>
      <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='inputlogin' type="email" name='email' placeholder="Enter email" onChange={handleChange} />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' className='inputlogin' placeholder="Password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" className='buttonSubmit' onChange={handleSubmit}>Login</Button>
      </Form>
    </Container>
    </>
  );
}