import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../../../assets/iuricode 2.svg";


function Profile() {
  return (
    <>
      <article className={styles.profile}>
        <section className={styles.profile_info}>
          <img src={avatar} alt="profile-pic" />
          <h2>Iuri Silva</h2>
          <p>Solteiro, Brasil</p>
        </section>
        <section className={styles.profile_edition}>
          <p>Editar meu perfil</p>
        </section>
      </article>
    </>
  );
}
export default Profile;
