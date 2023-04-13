import React from 'react';
import { Container } from "react-bootstrap";
import style from './ContactsInfo.module.css'
import { FaMapMarkerAlt, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiPhoneCall } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";


const ContactsInfo = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center'>Зв'язок з нами</h1>
        
        <div className={style.allContactsContainer}>
          
          <div className={style.allContactsContainerLeft}>
            <div className={style.containerTitleWrapper}>
              <div className={style.containerTitleWrapTitle}>
                <span className={style.allContactsContainerTitles}>Адрес:</span>
              </div>
              
              <div className={style.containerTitleWrapTitleAddress}>
                <a href="https://goo.gl/maps/xFhLyFKfqFz7ow7f6" target='blank'>
                  <FaMapMarkerAlt className={style.faMapMarkerAlt}/>
                  <span>Вул. Стрийська, 13, Підгородне, Тернопільська область, 47751</span>
                </a>
              </div>
            </div>
            <div className={style.containerTitleWrapper}>
              <div className={style.containerTitleWrapTitle}>
                <span className={style.allContactsContainerTitles}>Телефон:</span>
              </div>
              
              <div className={style.containerTitleWrapTitleAddress}>
                <a href="tel:+380972898656"> <FiPhoneCall/> +380 (97) 289 86 56;</a>
                <a href="tel:+380686287620"> <FiPhoneCall/> +380 (68) 628 76 20;</a>
              </div>
            </div>
            
            <div className={style.containerTitleWrapper}>
              <div className={style.containerTitleWrapTitle}>
                <span className={style.allContactsContainerTitles}>  E-mail: </span>
              </div>
              <div className={style.containerTitleWrapTitleAddress}>
                <a href="mailto:opetrovskyi423@gmail.com">example@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className={style.allContactsContainerRight}>
            
            <div className={style.containerTitleWrapper}>
              <div className={style.containerTitleWrapTitle}>
                <span className={style.allContactsContainerTitles}> Instagram: </span>
              </div>
              <div className={style.containerTitleWrapTitleAddress}>
                <a href="https://www.instagram.com/pdr_zbarazh/" target="blank">Pdr_zbarazh <FiInstagram/> </a> {' '}
              </div>
            </div>
            
            <div className={style.containerTitleWrapper}>
              <div className={style.containerTitleWrapTitle}>
                <span className={style.allContactsContainerTitles}>Facebook:  </span>
              </div>
              <div className={style.containerTitleWrapTitleAddress}>
                <a href="https://www.facebook.com/pdr.zbarazh" target="blank"> Pdr Zbarazh <FiFacebook/> </a> {' '}
              </div>
            </div>
            
            <div className={style.containerTitleWrapper}>
              <div className={style.containerTitleWrapTitle}>
                <span className={style.allContactsContainerTitles}>  Telegram:</span>
              </div>
              <div className={style.containerTitleWrapTitleAddress}>
                <a href="tg://resolve?domain=Just_music_a"> +380 (97) 289 86 56 <FaTelegram/></a>
              </div>
            </div>
            <div className={style.containerTitleWrapper}>
              <div className={style.containerTitleWrapTitle}>
                <span className={style.allContactsContainerTitles}>Працюємо:  </span>
              </div>
              <div className={style.containerTitleWrapTitleAddress}>
               <span>з 09:00 до 18:00 | Пн-Сб  </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
);
};

export default ContactsInfo;