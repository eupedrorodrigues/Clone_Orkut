import React from 'react';
import './login.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

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