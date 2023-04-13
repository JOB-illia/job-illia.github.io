import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import title1 from './../../assets/img/home_slider/auto_title1.jpg'
import title2 from './../../assets/img/home_slider/auto_title2.jpg'
import title3 from './../../assets/img/home_slider/auto_title3.jpg'
import style from './CarouselBox.module.css'
import { Button, Container } from "react-bootstrap";
const CarouselBox = () => {
  return (
    <div className={style.containerCarouselBox}>
      <Carousel interval={null} >
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title1}
            alt="First slide"
          />
          
         <Container>
           <div className={style.captionTitleContainer}>
             <div className={style.introTitleContainer}>
           <h3>Потрапили під град?</h3>
             </div>
           <p className={style.introSubtitle}>Не біда, проводимо всі відновлювальні роботи кузова.</p>
             <a className={style.buttonInCarousel} href="/contact" >
             Звязтись з нами
             </a>
         </div>
         
         
         </Container>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title2}
            alt="title2"
          />
          <Container>
            <div className={style.captionTitleContainer}>
              <div className={style.introTitleContainer}>
                <p className={style.introTitle}>Заощаджуємо </p>
                <p className={style.introTitle}>ваш бюджет! </p>
              </div>
            
              <p className={style.introSubtitle}>Позбавимо кузов вашого автомобіля від будь-яких вм'ятин,</p>
              <p className={style.introSubtitle}>не вдаючись до фарбування, поки ви п'єте чашку кави.</p>
              <a className={style.buttonInCarousel} href="/contact" >
                Звязтись з нами
              </a>
            </div>
          </Container>
         
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title3}
            alt="title3"
          />
    
        <Container>
          <div className={style.captionTitleContainer}>
          <div className={style.introTitleContainer}>
            <p className={style.introTitle}>Швидко </p>
            <p className={style.introTitle}>оцінимо ремонт!</p>
          </div>
            <p className={style.introSubtitle}>Час це гроші! Надішліть фото пошкодження кузова </p>
            <p className={style.introSubtitle}>вашого автомобіля нам по <b>Telegram</b> або <b>Viber </b></p>
            <p className={style.introSubtitle}>і отримаєте миттєвий відповідь </p>
            <p className={style.introSubtitle}>докладним описом вартості і часу ремонту. </p>
            <a className={style.buttonInCarousel} href="/contact" >
              Звязтись з нами
            </a>
          </div>
          
        </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBox;