import React from 'react';
import { getData } from './data';
import ContactList from './ContactList';

function ContactApp() {
  const contacts = getData();

  return (
    <div className="contact-app">
      <h1>Daftar kontak</h1>
      <ContactList contact={contacts} />
    </div>
  );
}

export default ContactApp;
