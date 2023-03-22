import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {

    const credentialRdx = useSelector(userData);

    const navigate = useNavigate();
  
    //Instancio Redux en modo escritura
    const dispatch = useDispatch();
  
    //HOOK
    const [user, setUser] = useState({
        name: "",
        surname: "",
        nif: "",
        birth_date: "",
        direction: "",
        email: "",
        phone: ""
    });
    //USEEFFECT
  
    //Este tipo de useEffect siempre se ejecuta cuando se actualice cualquier hook.....
    useEffect(() => {
        if (user.name === "") {
            getUserProfile(credentialRdx.credential.token)
            .then((result) => {
                console.log(result.data.user);
                setUser({
                    name: result.data.user.name,
                    surname: result.data.user.surname,
                    nif: result.data.user.nif,
                    birth_date: result.data.user.birth_date,
                    direction: result.data.user.direction,
                    email: result.data.user.email,
                    phone: result.data.user.phone
                });
                })
                .catch((error) => console.log(error));
            }
        }, [user]);
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
                          </Row>
                      <div className="buttonRegister">
                      <Button onClick={ SubmitMe } variant="primary">Close</Button>
                      </div>
                  </Form>
              </Container>
              </div>
          );
        }
        