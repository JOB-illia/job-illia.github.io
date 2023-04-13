import React from 'react';
import style from'./Footer.module.css'
import { Container } from "react-bootstrap";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import { FaMapMarkerAlt } from 'react-icons/fa';
import Social from "../Social/Social";

const Footer = () => {
  return (
    <div>
   <div className={style.footerSection}>
     <Container>
       <div className={style.footerSocial}>
         <div className={style.footerSocialLeft}>
           <div className={style.phoneTitle}>Телефон:</div>
           <PhoneNumber />
         </div>
  
         <div className={style.footerSocialRight}>
           <div className={style.socialTitle}>Соцмережi:</div>
           <Social />
         </div>
       </div>
  
       <a href="https://goo.gl/maps/xFhLyFKfqFz7ow7f6" target='blank'>
         <div className={style.footerAddress}>
           <span className={style.addressIcon}>
              <FaMapMarkerAlt />
           </span>

         <span className={style.footerAddressTitle}>Вул. Стрийська, 13, Підгородне, Тернопільська область, 47751</span>
       </div>
       </a>
       <div className={style.footerAuthor}>
         <div>
           <p> &copy;2021 Oleksandr Petrovskyi</p>
           <p>E-mail: opetrovskyi423@gmail.com</p>
           {/*<p>All rights reserved.</p>*/}
         </div>
       
       </div>
      
     </Container>
   </div>
    </div>
  );
};




export default Footer;