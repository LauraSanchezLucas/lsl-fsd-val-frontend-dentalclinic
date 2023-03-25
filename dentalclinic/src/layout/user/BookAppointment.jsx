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

const [treatments, setTreatments] = useState([
  {
    id: 1,
    servicename: "Single dental implant"
  },
  {
    id: 2,
    servicename: "Fixed dental prosthesis"
  },
  {
    id: 3,
    servicename: "Invisible orthodontic"
  },
  {
    id: 4,
    servicename: "Dental cavities"
  },
  {
    id: 5,
    servicename: "Whitening"
  },
]);

const [doctors, setDoctors] = useState([
  {
    id: 1,
    schedulename: "morning"
  },
  {
    id: 2,
    schedulename: "afternoon"
  }
]);

  const [credential, setCredential] = useState({
    user_id: credentialsRdx.credentials.usuario ,
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
      {/* <Form.Group>
          <Form.Label>service:</Form.Label>
            <InputText className={ "inputBasicDesign"}
                type={"integer"}
                name={"service_id"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)} 
                />
               </Form.Group> */}
               <Form.Select name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose your Treatment:</option>
                                    {treatments.map((treatment) => {
                                        return (
                                            <option key={treatment.id} value={treatment.id}>{treatment.servicename}</option>
                                        )
                                    })}
                                </Form.Select>
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
      {/* <Form.Group>
           <Form.Label>Schedule:</Form.Label>
           <InputText className={"inputBasicDesign"}
                type={"number"} 
                maxLength={10}
                name={"employee_id"} 
                placeholder={"employee"} 
                required={true}
                changeFunction={(e) => inputHandler(e)} 
                blurFunction={(e) => checkError(e)} />
      </Form.Group> */}
      <Form.Select name={"employee_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose Doctor Specialist:</option>
                                    {doctors.map((doctor) => {
                                        return (
                                            <option key={doctor.id} value={doctor.id}>{doctor.schedulename}</option>
                                        )
                                    })}
                                </Form.Select>
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