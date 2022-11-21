import React, {useState} from 'react'
import {Carousel, Container} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Home = () => {

return(
  //componente carousel para mostar en el home varias imagenes desplegables 
  <Carousel variant="white">
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="img/car1.jpg"
        alt="First slide"
        width="100%"
        height="750px"
      />
      <Carousel.Caption>
        <h5>“I looked around and couldn't find my dream car so I decided to build it myself.”</h5>
        <p>Ferdinand Porshe</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="img/car2.jpg"
        alt="Second slide"
        width="100%"
        height="750px"
        />

      <Carousel.Caption>
        <h5>"Before you say you can't do something, try it."</h5>
        <p>Sakichi Toyoda</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="img/car3.jpeg"
        alt="Third slide"
        width="100%"
        height="750px"
        />

      <Carousel.Caption>
        <h5>"The value of life can be measured by the times your soul has been deeply moved."</h5>
        <p>Soichiro Honda</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
 
  )
  }
  export default Home