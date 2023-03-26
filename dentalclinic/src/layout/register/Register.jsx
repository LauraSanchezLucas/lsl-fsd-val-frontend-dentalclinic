import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { InputText } from '../../components/inputText/InputText';
import './Register.css'
import React, { useState, useEffect } from "react";
import { Helpers } from "../../helpers/Helpers";
import { registerMe } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
    const navigate = useNavigate();
  //HOOK
  const [credential, setCredential] = useState({
    name: "",
    surname: "",
    nif: "",
    direction: "",
    email: "",
    birth_date: "",
    phone: "",
    password: ""
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
    nameValidation: false,
    surnameValidation: false,
    nifValidation: false,
    directionValidation: false,
    emailValidation: false,
    birth_dateValidation: false,
    phoneValidation: false,
    passwordValidation: false,
  })
// Hook error
  const [credentialError, setCredentialError] = useState({
    nameError: "",
    surnameError: "",
    nifError: "",
    directionError: "",
    emailError: "",
    birth_dateError: "",
    phoneError: "",
    passwordError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  //USEEFFECT

  //Este tipo de useEffect siempre se ejecuta cuando se actualice cualquier hook.....
  useEffect(() => {
      
    //Recorremos el primer for in para ver si hay errores en las credenciales....
    for(let error in credentialError){
      if(credentialError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }
    //Recorremos las credenciales con otro for in para comprobar en este caso si algún campo se ha dejado por rellenar...
    for(let empty in credential){
      if(credential[empty] === ""){
        setRegisterAct(false);
        return;
      }
    }

    //El último cortafuegos será un for in que recorrerá el hook validationCredential que mirará si todas las credential no sólo
    //están rellenas, sino que también han sido validadas
    for(let Helpers in validationCredential){

      if(validationCredential[Helpers] === false){
        setRegisterAct(false);
        return;
      }
    }
    //si llegamos a este punto es porque no hemos encontrado ningún error en el for in que recorre el hook de errores
    setRegisterAct(true);
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
   const SubmitMe = () => {
    registerMe(credential)
    .then(
        navigate("/login")
    )
    .catch(error => console.log(error))
  };

  return (
    <div className='main_register'>
      <Container>
          <Form className='formularioRegistro'>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>Name</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"name"}
                    placeholder={"Enter name"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.nameError}</div>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    type={"text"} 
                    name={"surname"} 
                    placeholder={"Enter surname"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.surnameError}</div>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridNif">
                  <Form.Label>Nif</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    type={"text"} 
                    name={"nif"} 
                    placeholder={"Enter nif"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.nifError}</div>
                  </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    type={"text"} 
                    name={"direction"} 
                    placeholder={"Enter adress"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.adressError}</div>
              </Form.Group>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Email</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    type={"email"} 
                    name={"email"} 
                    placeholder={"Enter emil"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.emailError}</div>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Birth date</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    type={"date"} 
                    name={"birth_date"} 
                    placeholder={"Enter birth of date"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.birth_dateError}</div>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Phone</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    type={"text"} 
                    name={"phone"} 
                    placeholder={"Enter phone"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.phoneError}</div>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formPasswordZip">
                  <Form.Label>Password</Form.Label>
                  <InputText
                    className={"inputlogin"}
                    type={"text"} 
                    name={"password"} 
                    placeholder={"Enter password"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    <div className='red'>{credentialError.passwordError}</div>
                  </Form.Group>
              </Row>
              <div className="buttonRegister">
              <Button onClick={ SubmitMe } variant="primary">Submit</Button>
              </div>
          </Form>
      </Container>
      </div>
  );
}
