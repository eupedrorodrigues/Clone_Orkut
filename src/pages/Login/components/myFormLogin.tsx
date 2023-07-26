import React from 'react';
import './myFormLogin.css';
import Icon from '../../../assets/ps_orkut.svg'

type Props = {}

const myFormLogin = (props: Props) => {
  return (
    <div className='formBox'>
        <img style={{margin: '10px'}} src={Icon} alt="" /> 
        <h2>Acesse o Orkut</h2>
        <form action="#">
            <div className='inputBox'>
                <input placeholder='Email' type="email" required/>
            </div>
            <div className='inputBox'>
                <input placeholder='Senha' type="password" required/>
            </div>
            <div className='rememberMe'>
                <label className='checkbox'><span><input type="checkbox" /></span>Lembrar minha senha</label>
            </div>
            <button className='btnLogin'>Entrar na conta</button>
            <div className='btnCreate'>
                <a href="">Criar uma conta</a>
            </div>
            <div className='forgot'>
                <a href="">Esqueci minha senha</a>
            </div>
        </form>
    </div>
  )
}

export default myFormLogin;