import React from 'react'
import styles from './EditProfile.module.css'
import FormEditProfile from './components/FormEditProfile'
import Profile from '../../assets/profile.svg'

type Props = {}

const EditProfile = (props: Props) => {
  return (
    <div className={styles.formParagraph}>
      <div className={styles.wrapperFormFull}>
        <div className={styles.divImg}>
          <span className={styles.textHover}>Editar</span>
          <img src={Profile} alt="name_image" />
        </div>
        <div className={styles.wrapperFormBtn}>
          <FormEditProfile />
          <button className={styles.btnEdit}>Editar perfil</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile