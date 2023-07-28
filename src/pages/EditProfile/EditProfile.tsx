import React from 'react'
import styles from './EditProfile.module.css'
// import Profile from '../../../assets/profile.svg'

type Props = {}

const EditProfile = (props: Props) => {
  return (
    <div className={styles.formParagraph}>
      <div className={styles.divImg}>
        {/* <img src={Profile} alt="name_image" /> */}
      </div>
        <div className={styles.formParagraph}>
          <h5 className={styles.nameUser}>Iuri Silva</h5>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.paragraphProfile}>Programar sem café é igual poesia sem poesia.</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Relacionamento: </p>
          <p className={styles.paragraphProfile}>Solteiro</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Aniversário: </p>
          <p className={styles.paragraphProfile}>21 de julho</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Idade: </p>
          <p className={styles.paragraphProfile}>22</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Interesses no Orkut:</p>
          <p className={styles.paragraphProfile}>Conhecer pessoas</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Quem sou eu:</p>
          <p className={styles.paragraphProfile}>Programador</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Filhos:</p>
          <p className={styles.paragraphProfile}>0</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Sexo:</p>
          <p className={styles.paragraphProfile}>Masculino</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Fumo:</p>
          <p className={styles.paragraphProfile}>Não</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Bebo:</p>
          <p className={styles.paragraphProfile}>Depende do dia:</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Moro: </p>
          <p className={styles.paragraphProfile}>Guarantã</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>País: </p>
          <p className={styles.paragraphProfile}>Brasil</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Cidade natal: </p>
          <p className={styles.paragraphProfile}>São Paulo</p>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Músicas: </p>
          <p className={styles.borderProfile}>Trap</p>
          <p className={styles.borderProfile}>Rap</p>
          <p className={styles.borderProfile}>Indie</p>
          <p className={styles.addProfile}>Adicionar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Filmes: </p>
          <p className={styles.borderProfile}>A rede social</p>
          <p className={styles.borderProfile}>Meu amigo totoro</p>
          <p className={styles.addProfile}>Adicionar</p>
        </div>
        <div>
          <button className={styles.btnEdit}>Editar perfil</button>
        </div>
    </div>
  )
}

export default EditProfile