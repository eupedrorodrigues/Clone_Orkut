import React from 'react'
import './main.css'
import ContainerRight from './containerRight'
import MyFormLogin from './myFormLogin'

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