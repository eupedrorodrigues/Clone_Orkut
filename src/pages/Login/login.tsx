import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


type Props = {}

function login({}: Props) {
  return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default login;