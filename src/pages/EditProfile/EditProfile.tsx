import React from 'react'
import styles from './EditProfile.module.css'
import FormEditProfile from './components/FormEditProfile'
import Profile from '../../assets/profile.svg'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

type Props = {}

const EditProfile = (props: Props) => {
  return (
    <>
      <Navbar/>
      <div className={styles.formParagraph}>
        <div className={styles.wrapperFormFull}>
          <div className={styles.divImg}>
            <span className={styles.textHover}>Editar</span>
            <img src={Profile} alt="name_image" width={120}/>
          </div>
          <div className={styles.wrapperFormBtn}>
            <FormEditProfile />
            <Link className={styles.btnEdit} to={'/pages/Profile'}>Editar perfil</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile