import React from 'react';
import emailjs from 'emailjs-com';


const ContactUs=()=> {
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
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name"/>
      <label>Email</label>
      <input type="email" name="email"/>
      <label>Message</label>
      <textarea name="message"/>
      <input type="submit" value="Send"/>
    </form>
  );
}
export default ContactUs