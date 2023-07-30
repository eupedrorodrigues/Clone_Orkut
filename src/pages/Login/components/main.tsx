import React from 'react'
import './Main.css'
import ContainerRight from './ContainerRight'
import MyFormLogin from './MyFormLogin'

type Props = {}

function main({}: Props) {
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

export default main