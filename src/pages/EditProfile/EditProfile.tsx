import React from "react";
import styles from "./EditProfile.module.css";
import FormEditProfile from "./components/FormEditProfile";
import Profile from "../../assets/profile.svg";
import Navbar from "../Profile/components/navbar/Navbar";

type Props = {};

const EditProfile = (props: Props) => {
  return (
    <div className={styles.formParagraph}>
      <div className={styles.wrapperFormFull}>
        <div className={styles.divImg}>
          <span className={styles.textHover}>Editar</span>
          <img src={Profile} alt="name_image" width={120}/>
        </div>
        <div className={styles.wrapperFormBtn}>
          <FormEditProfile />
          <button className={styles.btnEdit}>Editar perfil</button>
        </div>
      </div>
    </div>
  )
}
