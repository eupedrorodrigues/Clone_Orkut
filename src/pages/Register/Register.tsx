import React from 'react'
import styles from './Register.module.css'
import Container from '../Register/components/Container';
import InitialForm from '../Register/components/InitialForm';
import Logo from '../../assets/logo-orkut.svg'

type Props = {}

const Register = (props: Props) => {
  return (
    <div>
    <header className={styles.header}>
      <img src={Logo} alt="Logo Orkut" />
      <nav className={styles.navigation}>
        <a href="">Sobre o Orkut</a>
        <a href="">Centro de segurança</a>
      </nav>
    </header>

    <main className={styles.wrapperMain}>
      <div className={styles.wrapperCards}>
        <Container/>
        <InitialForm/> 
      </div>
    </main>

    <footer className={styles.baseboard}>
      <h6>&copy; Todos os direitos reservados</h6>
    </footer>
  </div>
  )
}

export default Register;