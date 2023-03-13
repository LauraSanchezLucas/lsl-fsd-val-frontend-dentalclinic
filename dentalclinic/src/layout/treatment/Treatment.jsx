import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { TreatmentCard } from '../../components/treatments/TreatmentCard';
import { DataBase } from '../../dataBase/dataBase';
import Row from "react-bootstrap/esm/Row";
import { NavBar1 } from '../../components/header/NavBar1';
import { Footer1 } from '../../components/footer/Footer1';
import './Treatment.css'

export const Treatments = () => {
  return (
        <>
        <Container className='backGround-treatment'>
            <Row>
                {DataBase.map(treatment => <Col sm={10} md={6} lg={6} className='mt-5' key={treatment.id}><TreatmentCard treatment={treatment}/></Col>)}
            </Row>
        </Container>
        </>
      )
}
