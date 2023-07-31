import Icon from '../../../assets/ps_orkut.svg'
import styles from './MyFormLogin.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

type Props = {}

const MyFormLogin = (props: Props) => {
    
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = () => {
        if (!email || !password){
            console.log('Error: Preencha todos os campos')
        }else{
            navigate('/pages/Profile')
        }
    }

  return (
    <div className={styles.formBox}>
        <img style={{margin: '10px'}} src={Icon} alt="" /> 
        <h2>Acesse o Orkut</h2>
        <form>
            <div className={styles.inputBox}>
                <input 
                placeholder='Email' 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                required/>
            </div>
            <div className={styles.inputBox}>
                <input 
                placeholder='Senha' 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                required/>
            </div>
            <div className={styles.rememberMe}>
                <span>
                    <span className={styles.checkColor}>
                        <input type="checkbox" required/>
                    </span>
                </span>
                <label className={styles.checkbox}>
                    Lembrar minha senha
                </label>
            </div>
            <button className={styles.btnLogin} onClick={handleLogin}>Entrar na conta</button>
            <div className={styles.btnCreate}>
                <Link  to="/pages/Register">Criar uma conta</Link>
            </div>
            <div className={styles.forgot}>
                <a href="">Esqueci minha senha</a>
            </div>
        </form>
    </div>
  )
}

export default MyFormLogin;