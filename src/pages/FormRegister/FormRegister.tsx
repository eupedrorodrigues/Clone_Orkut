import React from 'react'
import styles from './FormRegister.module.css'
import FinalForm from './components/FinalForm'
import Logo from '../../assets/logo-orkut.svg'

type Props = {}

const FormRegister = (props: Props) => {
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
            <FinalForm />
          </div>
        </main>
  
        <footer className={styles.baseboard}>
          <h6>&copy; Todos os direitos reservados</h6>
        </footer>
      </div>
  )
}

export default FormRegister