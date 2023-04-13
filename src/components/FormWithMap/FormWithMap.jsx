import React from 'react';
import style from './FormWithMap.module.css'
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import { Container } from "react-bootstrap";

const FormWithMap = () => {
  return (
    <div>
      
      <div className={style.containerSection}>
        <div className={style.containerLeft}>
          <ContactUsForm/>
        </div>
        <div className={style.containerRight}>
          <iframe className={style.map}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.8894457319298!2d25.534203907589436!3d49.54380456421179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473037db293997d3%3A0x13963601e518d74a!2zUERSIFpiYXJhemggLSDQktC40YDRltCy0L3RjtCy0LDQvdC90Y8g0LLQvCfRj9GC0LjQvSDQsdC10Lcg0YTQsNGA0LHRg9Cy0LDQvdC90Y8!5e1!3m2!1suk!2sua!4v1622911437174!5m2!1suk!2sua"
                  allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    
    </div>
  );
};

export default FormWithMap;