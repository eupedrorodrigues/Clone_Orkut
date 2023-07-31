import React from 'react'
import styles from './FormEditProfile.module.css'

type Props = {}

const FormEditProfile = (props: Props) => {
  return (
    <div className={styles.wrapperForm}>
        <div className={styles.formParagraph}>
          <h3 className={styles.nameUser}>Iuri Silva</h3>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.paragraphProfile}>Programar sem café é igual poeta sem poesia.</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Relacionamento:
              <span className={styles.paragraphProfile}>Solteiro</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Aniversário: 
              <span className={styles.paragraphProfile}>21 de julho</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Idade: 
              <span className={styles.paragraphProfile}>22</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Interesses no Orkut:
              <span className={styles.paragraphProfile}>Conhecer pessoas</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Quem sou eu:
              <span className={styles.paragraphProfile}>Programador</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Filhos:
              <span className={styles.paragraphProfile}>0</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Sexo:
              <span className={styles.paragraphProfile}>Masculino</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Fumo:
              <span className={styles.paragraphProfile}>Não</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Bebo:
              <span className={styles.paragraphProfile}>Depende do dia</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Moro: 
              <span className={styles.paragraphProfile}>Guarantã</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>País: 
              <span className={styles.paragraphProfile}>Brasil</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <div>
            <p className={styles.mainProfile}>Cidade natal:
              <span className={styles.paragraphProfile}>São Paulo</span>
            </p>
          </div>
          <p className={styles.editProfile}>Editar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Músicas:</p>
          <p className={styles.borderProfile}>Trap</p>
          <p className={styles.borderProfile}>Rap</p>
          <p className={styles.borderProfile}>Indie</p>
          <p className={styles.addProfile}>Adicionar</p>
        </div>
        <div className={styles.formParagraph}>
          <p className={styles.mainProfile}>Filmes:</p>
          <p className={styles.borderProfile}>A rede social</p>
          <p className={styles.borderProfile}>Meu amigo totoro</p>
          <p className={styles.addProfile}>Adicionar</p>
        </div>
    </div>
  )
}

export default FormEditProfile