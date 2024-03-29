import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { InputText } from '../../components/inputText/InputText';
import React, { useState, useEffect } from "react";
import { Helpers } from "../../helpers/Helpers";
import { logMe } from '../../services/apiCalls';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';

export const Login = () => {


  const navigate = useNavigate();

  //Instancio Redux en modo escritura
  const dispatch = useDispatch();

  //HOOK
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  //HANDLERS

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));
  };

// Hook validation
  const [validationCredential, setValidationCredential] = useState({
    emailValidation: false,
    passwordValidation: false
  })
// Hook error
  const [credentialError, setCredentialError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [loginAct, setloginAct] = useState(false);
 

  //USEEFFECT

  //Este tipo de useEffect siempre se ejecuta cuando se actualice cualquier hook.....
  useEffect(() => {
    
    //Recorremos el primer for in para ver si hay errores en las credenciales....
    for(let error in credentialError){
      if(credentialError[error] !== ""){
        setloginAct(false);
        return;
      }
    }
    //Recorremos las credenciales con otro for in para comprobar en este caso si algún campo se ha dejado por rellenar...
    for(let empty in credential){
      if(credential[empty] === ""){
        setloginAct(false);
        return;
      }
    }

    //El último cortafuegos será un for in que recorrerá el hook validationCredential que mirará si todas las credential no sólo
    //están rellenas, sino que también han sido validadas
    for(let Helpers in validationCredential){
      if(validationCredential[Helpers] === false){
        setloginAct(false);
        return;
      }
    }
    //si llegamos a este punto es porque no hemos encontrado ningún error en el for in que recorre el hook de errores
    setloginAct(true);
  });

  //FUNCIONES
  //Funcion de validacion

  const checkError = (e) => {

    let error = "";

    let checked = Helpers(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;

    setValidationCredential((prevState) => ({
      ...prevState,
      [e.target.name + "Validation"]: checked.Helpers,
    }));

    //Aqui seteamos el hook de los errores

    setCredentialError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const logmee = () => {

    logMe(credential)
        .then(
            respuesta => { 
                let decodificado = decodeToken(respuesta.data.token)
                let datosBackend = {
                    token: respuesta.data.token,
                    usuario: decodificado.userId,
                    role: decodificado.roleId
                }
                //Este es el momento en el que guardo en REDUX
                dispatch(login({credentials: datosBackend}));
   

  
                setTimeout(() => {
                  navigate("/");
                }, 500);
            }
        )
        .catch(error => console.log(error))
  };
  return (
    <>
    <Container className='main main-size'>
      <Form>
      <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <InputText
           className={"inputlogin"}
           type={"email"} 
           name={'email'} 
           placeholder={"Enter your email"} 
           changeFunction ={(e)=>inputHandler(e)}
           blurFunction={(e) => checkError(e)}
           />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <div className='red'>{credentialError.emailError}</div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputText 
          className={"inputlogin"}
          type={"password"} 
          name={'password'} 
          placeholder={"Enter your password"}
          changeFunction ={(e)=>inputHandler(e)}
          blurFunction={(e) => checkError(e)}
          />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <div className='red'>{credentialError.passwordError}</div>
        <Button 
        onClick={loginAct ? () => {logmee();}: () => {}} variant="primary" >
        Login</Button>
      </Form>
    </Container>
    </>
  );
}