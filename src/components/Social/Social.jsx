import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import style from'./Social.module.css'
import { FaTelegram } from "react-icons/fa";
const Social = () => {
  return (
    <div>
      <div className={style.socialIconsContainer} >
        <a  href="https://www.instagram.com/pdr_zbarazh/" target="blank"> <FiInstagram className={style.instagram} /> </a> {' '}
        <a  href="https://www.facebook.com/pdr.zbarazh" target="blank"><FiFacebook className={style.facebook}/></a> {' '}
        <a href="tg://resolve?domain=Just_music_a"> <FaTelegram className={style.telegram} /></a>
      </div>
    
    </div>
  );
};



export default Social;