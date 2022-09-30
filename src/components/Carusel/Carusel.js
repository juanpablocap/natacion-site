import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/carusel/blancas1.jpg';
import img2 from '../../img/carusel/blancos3.jpg';
import img3 from '../../img/carusel/blancos1.jpg';

const Carusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Primera img"
        />
        <Carousel.Caption>
          <h3>La primera de Hockey Campeonas!</h3>
          <p>La primera division de los "blancos" ganaron la final contra Universitario del torneo clausura 2022</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Segunda img"
        />

        <Carousel.Caption>
          <h3>Clasificados para jugar el nacional! </h3>
          <p>Los chicos de la m 18 clasificados para el anual Nacional de clubes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Tercera Img"
        />

        <Carousel.Caption>
          <h3>Preparados para disputar la final!</h3>
          <p>
            La primera division juega hoy a las 15:30 como local la final contra Tucuman Rugby Club
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel
