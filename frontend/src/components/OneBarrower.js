import React from 'react'
import '../css/barrower.css'

const OneBarrower = ({ name, phone, mail, money }) => {
    return (
        <div className='barrower-cnt'>
            <div className='name-cnt'>{name}</div>
            <div className='money-cnt'>{money}</div>
            <div className='mail-cnt'>{mail}</div>
            <div className='phone-cnt'>{phone}</div>
            <button>send Req</button>
        </div>
    )
}

export default OneBarrower
