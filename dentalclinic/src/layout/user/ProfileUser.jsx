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
     <Container className='b1' > 
      <Card>
        <Card.Body>
          <Card.Title><strong>Name:</strong> &nbsp;{user.name}</Card.Title>
          <Card.Text><strong>Surname:</strong> &nbsp;{user.surname}  </Card.Text>
          <Card.Text><strong>Nif:</strong> &nbsp; {user.nif}</Card.Text>
          <Card.Text><strong>birth date:</strong> &nbsp;{user.birth_date} </Card.Text>
          <Card.Text><strong>Direction:</strong> &nbsp;{user.direction} </Card.Text>
          <Card.Text><strong>Email:</strong> &nbsp;{user.email} </Card.Text>
          <Card.Text><strong>Phone:</strong> &nbsp; {user.phone}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}
