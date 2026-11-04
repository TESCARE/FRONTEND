import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import ContactHero from './ContactHero.jsx';
import ContactForm from './ContactForm.jsx';
import ContactMap from './ContactMap.jsx';
import ContactHours from './ContactHours.jsx';

const ContactPage = () => (
  <PageLayout className="contact-page-wrapper">
    <ContactHero />
    <ContactForm />
    <ContactMap />
    <ContactHours />
  </PageLayout>
);

export default ContactPage;
