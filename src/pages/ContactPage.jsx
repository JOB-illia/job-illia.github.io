import React from 'react';
import FormWithMap from "../components/FormWithMap/FormWithMap";
import ContactsInfo from "../components/ContactsSection/ContactsInfo";


const ContactPage = () => {
  return (
    <div style={{marginTop:'100px'}}>
      <ContactsInfo />
      <FormWithMap />
    </div>
  );
};

export default ContactPage;