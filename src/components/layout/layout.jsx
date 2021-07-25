import React from 'react';
import Head from 'components/head/head';
import Footer from 'components/footer/footer';
import 'normalize.css';
import 'styles/global.scss';

export default function Layout({ title, children }) {
  return (
    <>
      <Head title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
