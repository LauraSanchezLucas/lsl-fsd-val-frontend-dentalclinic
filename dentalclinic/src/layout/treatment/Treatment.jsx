import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { TreatmentCard } from '../../components/treatments/TreatmentCard';
import { DataBase } from '../../dataBase/DataBase';
import Row from "react-bootstrap/esm/Row";


export const Treatments = () => {
  return (
        <>
        <div className="main">
        <Container className='backGround-treatment'>
            <Row>
                {DataBase.map(treatment => <Col sm={10} md={6} lg={6} className='mt-5' key={treatment.id}><TreatmentCard treatment={treatment}/></Col>)}
            </Row>
        </Container>
        </div>
        </>
      )
}
