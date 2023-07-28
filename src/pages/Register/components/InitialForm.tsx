import React from 'react';
import styles from './InitialForm.module.css';
import Logo from '../../../assets/ps_orkut.svg'

type Props = {}

const InitialForm = (props: Props) => {
  return (
    <div className={styles.formBox}>
      <img style={{ margin: '10px' }} src={Logo} alt=""/>
      <h2>Acesse o Orkut</h2>
      <form action="#">
        <div className={styles.inputBox}>
          <input placeholder='Nome' type="text" required />
        </div>
        <div className={styles.inputBox}>
          <input placeholder='Email' type="email" required />
        </div>
        <div className={styles.inputBox}>
          <input type="date" required />
        </div>
        <div className={styles.inputBox}>
          <input placeholder='UF' type="text" required />
        </div>
        <div className={styles.inputBox}>
          <input placeholder='Senha' type="password" required />
        </div>
        <div className={styles.inputBox}>
          <input placeholder='Confirmar sua senha' type="password" required />
        </div>
        <div className={styles.rememberMe}>
          <label className={styles.checkbox}>
            <span><input type="checkbox" required/></span> Aceito os termos de contrato
          </label>
        </div>
        <button className={styles.btnLogin}> Criar uma conta</button>
      </form>
    </div>
  )
}

export default InitialForm