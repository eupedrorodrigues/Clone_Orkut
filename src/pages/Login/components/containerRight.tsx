import React from 'react';
import './containerRight.css';
import People from '../../../assets/unsplash_g1Kr4Ozfoac.svg'

type Props = {}

function containerRight({}: Props) {
  return (
    <div>
        <div className='containerRight'>
            <div className='imageGradient'>
              <div className='wrapperText'>
                <p className='textInGradient'>
                  Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas
                </p>
              </div>
                <div className='darkGradient'></div>
                <img style={{display: 'block'}} src={People} alt="" />
            </div>
        </div>
    </div>
  )
}

export default containerRight;