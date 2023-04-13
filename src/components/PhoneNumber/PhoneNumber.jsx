import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import style from  './PhoneNumber.module.css'

const PhoneNumber = () => {
  return (
    <div>
            <a className={style.phoneNumber} href="tel:+380972898656"> <FiPhoneCall /> +380 (97) 289 86 56</a>
    </div>
  );
};

export default PhoneNumber;