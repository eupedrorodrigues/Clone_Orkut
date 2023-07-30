import React, { useState } from 'react'
import styles from './FinalForm.module.css'
import Profile from '../../../assets/profile.svg'
import { useNavigate } from 'react-router-dom'

type Props = {}

const FinalForm = (props: Props) => {
  
  const navigateForm = useNavigate()
  const [biography, setBiography] = useState('');
  const [interests, setInterests] = useState('');
  const [status, setStatus] = useState('');
  const [children, setchildren] = useState('');
  const [habits, setHabits] = useState('');
  const [music, setMusic] = useState('');
  const [movie, setMovie] = useState('');

  const eventFormRegister = () => {
    if (!biography|| !interests || !status || !children || !habits || !music || !movie){
      console.log('Error: Preencha todos os campos')
    }else{
      navigateForm('/pages/Profile')
    }
  }
    

  return (
    <div className={styles.formBox}>
      <div className={styles.divImg}>
        <img src={Profile} alt="user_profile" />
      </div>
      <form>
        <div className={styles.inputBox}>
          <textarea 
          name='biography' 
          placeholder=' Biografia' 
          onChange={(e) => setBiography(e.target.value)}
          required/>
        </div>
        <div className={styles.inputBox}>
          <input 
          type='text' 
          name='interests'
          placeholder='Interesses' 
          onChange={(e) => setInterests(e.target.value)}
          required/>
        </div>
        <div className={styles.inputBox}>
          <select name="relationship"  onChange={(e) => setStatus(e.target.value)} required>
            <option value="single"> Status de Relacionamento</option>
            <option value="single">Solteiro</option>
            <option value="serious">Relacionamento sério</option>
            <option value="married">Casado</option>
            <option value="divorced">Divorciado</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <select name="childrens"  onChange={(e) => setchildren(e.target.value)} required>
            <option value="children"> Filhos</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <select name="health"  onChange={(e) => setHabits(e.target.value)} required>
            <option value="habits"> Hábitos Saudáveis</option>
            <option value="hydration">Hidratação</option>
            <option value="sports">Praticar esportes</option>
            <option value="meditation">Meditação</option>
            <option value="sleep">Sono adequado</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <input 
          type='text' 
          name='song' 
          placeholder=' Música favorita'
          onChange={(e) => setMusic(e.target.value)} 
          required/>
        </div>
        <div className={styles.inputBox}>
          <input 
          type='text' 
          name='movie' 
          placeholder=' Filme favorito' 
          onChange={(e) => setMovie(e.target.value)}
          required/>
        </div>
        <div>
          <button className={styles.btnLogin} onClick={eventFormRegister}>Confirmar conta</button>
        </div>
      </form>
    </div>
  )
}

export default FinalForm