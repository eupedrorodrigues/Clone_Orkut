import React from 'react';
import './containerRight.css';
import People from '../../../assets/unsplash_g1Kr4Ozfoac.svg'

type Props = {}

function containerRight({}: Props) {
  return (
    <div>
        <div className='containerRight'>
            <div className='imageGradient'>
                <div className='darkGradient'></div>
                <img style={{display: 'block'}} src={People} alt="" />
            </div>
        </div>
    </div>
  )
}

export default containerRight;