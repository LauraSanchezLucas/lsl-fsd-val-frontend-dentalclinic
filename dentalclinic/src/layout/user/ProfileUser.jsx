import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { getUserProfile } from '../../services/apiCalls';
import { userData } from '../userSlice';




export const ProfileUser = () => {

    const credentialRdx = useSelector(userData);
    console.log(credentialRdx.credentials,'hola')
    console.log(credentialRdx,'adios')
    const [user, setUser] = useState({
        name: "",
        surname: "",
        nif: "",
        birth_date: "",
        direction: "",
        email: "",
        phone: ""
    });

  
    // Este tipo de useEffect siempre se ejecuta cuando se actualice cualquier hook.....
    useEffect(() => {
        if (user.name === "") {
            getUserProfile(credentialRdx?.credentials?.token)
            .then((result) => {
              console.log(result.data, 'si')
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
        }, []);
  return (
    <>
     <Container > 
      <Card className="yo">
        {/* <Card.Img variant="top" src={personaje.image}/> */}
        <Card.Body>
          <Card.Title>Name:{user.name}</Card.Title>
          <Card.Text>Surname:{user.surname}  </Card.Text>
          <Card.Text>Nif: {user.nif}</Card.Text>
          <Card.Text>birth date:{user.birth_date} </Card.Text>
          <Card.Text>Direction:{user.direction} </Card.Text>
          <Card.Text>Email:{user.email} </Card.Text>
          <Card.Text>Phone: {user.phone}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}
