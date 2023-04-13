import React from 'react';
import style from "./HowWeWork.module.css"
import { Container } from "react-bootstrap";
import { IoPhonePortrait } from "react-icons/all";
import { GrUserManager } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";

const HowWeWork = () => {
  return (
    <div className={style.bgColor}>
      <Container>
        <h2 className={style.mainWorkTitle}>Як ми працюємо?</h2>
        
        <div className={style.allWorkContainer}>
          <div className={style.workSubContainer}>
            <div className={style.workSubIcon}>
              <IoPhonePortrait/>
              <h2 className={style.workSubtitle}>
                Дзвінок в майстерню
              </h2>
              <div className={style.workSubText}>
                Ви залишаєте заявку на зворотний дзвінок або телефонуйте в нашу майстерню по телефону, вказаному на
                сайті.
              </div>
            
            </div>
          </div>
          
          <div className={style.workSubContainer}>
            <div className={style.workSubIcon}>
              <GrUserManager/>
              <h2 className={style.workSubtitle}>
                Консультація
              </h2>
              <div className={style.workSubText}>
                Після консультації наш майстер записує Вас на зручний для ремонту день і називає попередню вартість
                робіт.
              
              </div>
            </div>
          </div>
          
          <div className={style.workSubContainer}>
            <div className={style.workSubIcon}>
              <GiMagnifyingGlass/>
              <h2 className={style.workSubtitle}>
                Відвідування майстерні
              </h2>
              <div className={style.workSubText}>
                У майстерні наш фахівець ретельно оглядає пошкодження автомобіля для складання точної вартості ремонту.
              </div>
            </div>
          </div>
          
          <div className={style.workSubContainer}>
            <div className={style.workSubIcon}>
              <FaCar/>
              <h2 className={style.workSubtitle}>
                Ремонт без фарбування
              </h2>
              <div className={style.workSubText}>
                Після узгодження ціни і термінів виконання наші майстри негайно приступають до ремонту Вашого
                автомобіля.
              
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowWeWork;