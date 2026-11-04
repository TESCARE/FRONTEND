import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import BookHero from './BookHero.jsx';
import BookForm from './BookForm.jsx';
import BookProcess from './BookProcess.jsx';
import BookFAQ from './BookFAQ.jsx';
import BookCTA from './BookCTA.jsx';

const BookPage = () => (
  <PageLayout footerCta={false} className="book-page-wrapper">
    <BookHero />
    <BookForm />
    <BookProcess />
    <BookFAQ />
    <BookCTA />
  </PageLayout>
);

export default BookPage;
