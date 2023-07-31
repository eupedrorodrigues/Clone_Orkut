import React from 'react'
import styles from './Container.module.css'
import People from '../../../assets/unsplash_g1Kr4Ozfoac.svg'

type Props = {}

const Container = (props: Props) => {
  return (
    <div>
        <div className={styles.containerRight}>
            <div className={styles.imageGradient}>
              <div className={styles.wrapperText}>
                <p className={styles.textInGradient}>
                  Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas
                </p>
              </div>
                <div className={styles.darkGradient}></div>
                <img style={{display: 'block'}} src={People} alt="" width={900}/> 
            </div>
        </div>
    </div>
  )
}

export default Container