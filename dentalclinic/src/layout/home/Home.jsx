import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import A1 from '../../assets/A1.jpeg'
import A2 from '../../assets/A2.jpeg'
import A3 from '../../assets/A3.jpeg'

export const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={A1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='text-color-home'>Let us do Shine your smile</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={A2}
          alt="First slide"
        />

        <Carousel.Caption>
          <h1 className='carrusel2'>What makes us different?</h1>
          <p className='carrusel-2p'>Our philosophy is to take care of you before, during and after treatment. Laura Sanchez dental clinic is much more than a conventional dental clinic. We can say that we are a little bit of all those people, both patients and professionals, who have been part of our lives and have motivated, trained and helped us to grow.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={A3}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>We want the best for your smile.</h3>
          <p>At Laura Sanchez Dental Clinic we have been with the mission of making people smile for more than a hundred years.  It is said soon, it is 103 years of history and we hope that there will be many more with you. Therefore, we offer you the best dental aesthetics and implantology, using the latest technologies and staying at the forefront since 1917. In the city of Valencia, we offer personalized attention, with payment facilities and complete revisions.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  )
}
