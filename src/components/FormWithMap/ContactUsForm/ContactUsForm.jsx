import React, { useEffect, useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import style from './ContactUsForm.module.css'
import ContactUs from "./ContactUsАА";
import emailjs from "emailjs-com";
import swal from 'sweetalert';


const ContactUsForm = (props) => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [userNamelDirty, setUserNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [userNameError, setUserNameError] = useState("Ім'я не вказано"  )
  const [emailError, setEmailError] = useState('E-mail не може бути пустим')
  const [phoneError, setPhoneError] = useState('Введыть ваш номер телефону')
  const [formValid, setFormValid]= useState(false)
  
  useEffect(()=>{
  if(emailError|| phoneError){
    setFormValid(false)
  }else {
    setFormValid(true)
  }
  },[emailError,phoneError])
  
  function successMessage() {
    swal({
      title: "Дякуємо!",
      text: "Ваше повідомлення вдало відправлено!",
      icon: "success",
      button: "Ок!",
    });
  }
  
  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_e7effzp', 'template_xzzkf2h', e.target, "user_eMDL2URrYOFE9NXxZtdnw")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'tel':
        setPhoneDirty(true)
        break
      case'name':
        setUserNameDirty(true)
        break
    }
  }
  
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректний email")
    } else {
      setEmailError('')
    }
  }
  
  const phoneNumberHandler = (e) => {
    setPhone(e.target.value)
    const telRegex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
    if (!telRegex.test(Number(e.target.value))) {
      setPhoneError("Некоректний номер телефону")
    } else {
      setPhoneError('')
    }
  }
  
  const userNameHandler =(e) =>{
    setUserName(e.target.value)
    if(e.target.value){
      setUserNameError('')
    }
  }
  
  return (
    <div>
      <Form onSubmit={sendEmail}>
        <h1 className='text-center'>Напишіть до нас</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {(userNamelDirty && userNameError) && <div style={{color: 'red'}}>{userNameError}</div>}
          <Form.Label>Ваше ім'я</Form.Label>
          <Form.Control onChange={e => userNameHandler(e)} value={userName} type="text" placeholder="Ваше ім'я" onBlur={e=> blurHandler(e)} name="name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
          <Form.Label>Ваш e-mail адрес</Form.Label>
          <Form.Control onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email"
                        placeholder="example@gmail.com" name="email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {(phoneDirty && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
          <Form.Label>Ваш номер телефону</Form.Label>
          <Form.Control onChange={e => phoneNumberHandler(e)} value={phone} onBlur={e => blurHandler(e)} type="tel"
                        placeholder="+380 (98) 999 99 99" name="tel"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ваше повідомлення</Form.Label>
          <Form.Control as="textarea" rows={3} className='message' name="message"/>
        </Form.Group>
        {/*<Form.Group controlId="formFileSm" className="mb-3">*/}
        {/*  <Form.Label>Добавити фото</Form.Label>*/}
        {/*  <Form.Control type="file" size="sm" name="photos"/>*/}
        {/*</Form.Group>*/}
        <Button disabled={!formValid} onClick={successMessage} type='submit' id={style.contactUsFormBtnSubYellow}>
          Відправити
        </Button>
      </Form>
    </div>
  );
};


export default ContactUsForm;