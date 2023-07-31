import React from 'react'
import styles from './Main.module.css'
import ContainerRight from './ContainerRight'
import MyFormLogin from './MyFormLogin'

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