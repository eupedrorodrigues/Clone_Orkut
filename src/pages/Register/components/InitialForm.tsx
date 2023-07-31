import React, { useState } from 'react';
import styles from './InitialForm.module.css';
import Logo from '../../../assets/ps_orkut.svg'
import { Link, useNavigate } from 'react-router-dom';

type Props = {}

const InitialForm = (props: Props) => {

  const navigateScreen = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState ('');
  const [state, setState] = useState('');
  const [password,setPassword] = useState('')

  const handleRegister = () => {
    if (!name || !email || !birthday || !state || !password){
      console.log('Error: Preencha todos os campos')
    }
    else{
      navigateScreen('/pages/FormRegister')
    }
  }

  return (
    <div className={styles.formBox}>
      <img style={{ margin: '10px' }} src={Logo} alt=""/>
      <h2>Acesse o Orkut</h2>
      <form action="#">
        <div className={styles.inputBox}>
          <input 
          placeholder='Nome' 
          type="text"
          onChange={(e) => setName(e.target.value)}
          required />
        </div>
        <div className={styles.inputBox}>
          <input 
          placeholder='Email' 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          required />
        </div>
        <div className={styles.inputBox}>
          <input 
          type="date" 
          onChange={(e) => setBirthday(e.target.value)}
          required />
        </div>
        <div className={styles.inputBox}>
          <input 
          placeholder='UF' 
          type="text"
          onChange={(e) => setState(e.target.value)} 
          required />
        </div>
        <div className={styles.inputBox}>
          <input
          placeholder='Senha' 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          required />
        </div>
        <div className={styles.inputBox}>
          <input 
          placeholder='Confirme sua senha' 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          required />
        </div>
        <div className={styles.rememberMe}>
          <span>
            <span className={styles.checkColor}>
              <input type="checkbox" required/>
            </span>
          </span>
          <label className={styles.checkbox}>
             Aceito os termos de contrato
          </label>
        </div>
        <button className={styles.btnLogin} onClick={handleRegister}>Criar uma conta</button>
      </form>
    </div>
  )
}

export default InitialForm