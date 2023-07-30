import React from 'react'
import './Main.css'
import ContainerRight from './ContainerRight'
import MyFormLogin from './MyFormLogin'

type Props = {}

function Main({}: Props) {
  return (
    <div>
        <main className='wrapperMain'>
            <div className='wrapperCards'>
                <ContainerRight />
                <MyFormLogin /> 
            </div>
        </main>
    </div>
  )
}

export default Main