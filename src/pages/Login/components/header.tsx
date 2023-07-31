import React from 'react';
import styles from './Header.module.css';
import Logo from '../../../assets/logo-orkut.svg'

type Props = {}

function Header({}: Props) {
  return (
    <div>
        <header className={styles.header}>
           <img src={Logo} alt="Logo Orkut" /> 
            <nav className={styles.navigation}>
                <a href="">Sobre o Orkut</a>
                <a href="">Centro de segurança</a>
            </nav>
        </header>
    </div>
  )
}

export default Header;