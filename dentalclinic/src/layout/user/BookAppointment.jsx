import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { InputText } from '../../Components/InputText/InputText';
import { getAppointment } from '../../Services/apiCalls';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';

export const BookAppointment = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);
// console.log(credentialsRdx)

  const [credential, setCredential] = useState({
    user_id: credentialsRdx.credentials.usuario.userId ,
    service_id: "", 
    date: "", 
    hour: "", 
    employee_id:""
  });

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const checkError = (e) => {};




  const bookApp = () => {
    
    getAppointment(credential, credentialsRdx.credentials.token)
    .then ( respuesta => { 
        setCredential(respuesta.data)
    }) .catch(error => {setCredential(error.message)})
}
console.log(credential , 'eeeeeeeeeeee')
  return (
    <>
    <Container className="container-register">
      <Row className="row-input">
        <Col md={12} lg={6} className="container-inputs">
          <Form>
          {/* <Form.Group>
          <Form.Label>Name</Form.Label>
            <InputText className={ "inputBasicDesign"}
                type={"integer"}
                name={credentialsRdx.credentials.name}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)} 
                />
            </Form.Group> */}
      <Form.Group>
          <Form.Label>service:</Form.Label>
            <InputText className={ "inputBasicDesign"}
                type={"integer"}
                name={"service_id"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)} 
                />
               </Form.Group>
      <Form.Group>
           <Form.Label>Date:</Form.Label>
           <InputText className={"inputBasicDesign"}
                type={"date"} 
                name={"date"} 
                placeholder={"date"} 
                required={true}
                changeFunction={(e) => inputHandler(e)} 
                blurFunction={(e) => checkError(e)} />
      </Form.Group>
      <Form.Group>
           <Form.Label>Hour:</Form.Label>
           <InputText className={"inputBasicDesign"}
                type={"string"} 
                name={"hour"} 
                placeholder={"hour"} 
                required={true}
                changeFunction={(e) => inputHandler(e)} 
                blurFunction={(e) => checkError(e)} />
      </Form.Group>
      <Form.Group>
           <Form.Label>Employee:</Form.Label>
           <InputText className={"inputBasicDesign"}
                type={"number"} 
                maxLength={10}
                name={"employee_id"} 
                placeholder={"employee"} 
                required={true}
                changeFunction={(e) => inputHandler(e)} 
                blurFunction={(e) => checkError(e)} />
      </Form.Group>
          </Form>      
          </Col> 
        <div>  
        <Button
        onClick={bookApp} variant="primary">
      Register me!
      </Button>
    </div>
      </Row>
    </Container>
  </>
      );  
  }            


