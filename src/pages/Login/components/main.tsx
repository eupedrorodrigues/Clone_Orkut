import React from 'react'
import styles from './Main.module.css'
import ContainerRight from './containerRight'
import MyFormLogin from './myFormLogin'

type Props = {}

function Main({}: Props) {
  return (
    <div>
        <main className={styles.wrapperMain}>
            <div className={styles.wrapperCards}>
                <ContainerRight />
                <MyFormLogin /> 
            </div>
        </main>
    </div>
  )
}

export default Main