import React from 'react'
import { useHistory } from 'react-router-dom'
import "../index.css"
const Success = () => {
    const history = useHistory();
    return (
        <div className='sucess-cnt'>
            <div className='white-circle'>
                <div className='green-circle' onClick={() => {
                    history.push('/profile')
                }}>Sucess</div>
            </div>
        </div>
    )
}

export default Success
