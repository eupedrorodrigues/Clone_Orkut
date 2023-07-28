import React from 'react'
import styles from './FinalForm.module.css'
import Profile from '../../../assets/profile.svg'

type Props = {}

const FinalForm = (props: Props) => {
  return (
    <div className={styles.formBox}>
      <div className={styles.divImg}>
        <img src={Profile} alt="user_profile" />
      </div>
      <form>
        <div className={styles.inputBox}>
          <textarea name='biography' placeholder=' Biografia' required/>
        </div>
        <div className={styles.inputBox}>
          <input type='text' name='interests' placeholder=' Interesses' required/>
        </div>
        <div className={styles.inputBox}>
          <select name="relationship" required>
            <option value="single"> Status de Relacionamento</option>
            <option value="single">Solteiro</option>
            <option value="serious">Relacionamento sério</option>
            <option value="married">Casado</option>
            <option value="divorced">Divorciado</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <select name="childrens" required>
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
          <select name="health" required>
            <option value="habits"> Hábitos Saudáveis</option>
            <option value="hydration">Hidratação</option>
            <option value="sports">Praticar esportes</option>
            <option value="meditation">Meditação</option>
            <option value="sleep">Sono adequado</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <input type='text' name='song' placeholder=' Música favorita' required/>
        </div>
        <div className={styles.inputBox}>
          <input type='text' name='movie' placeholder=' Filme favorito' required/>
        </div>
        <div>
          <button className={styles.btnLogin}>Confirmar conta</button>
        </div>
      </form>
    </div>
  )
}

export default FinalForm