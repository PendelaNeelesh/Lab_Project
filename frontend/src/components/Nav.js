import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../contextApis/UserdetailsContext'

const Nav = () => {
    const [user, setUser, who, setWho] = useContext(userContext)
    const clickFunc = () => {
        var elements = document.getElementsByClassName('navbar-links')
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('active');
        }
    }
    const logoutFunc = () => {
        let name = "authtoken"
        let value = ''
        console.log(user)
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        setUser('')
    }
    return (
        <div>
            <nav className="navbar">
                <div className="brand-title"><Link to='/'>GM</Link></div>
                <button className="toggle-button" onClick={clickFunc}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="navbar-links">
                    <ul>
                        {!(user === '' || user === undefined) && <li> <Link to='/profile'> Profile</Link> </li>}
                        {(who === "Lender") && <li> <Link to='/getbarrowers'> Barrowers</Link> </li>}
                        {(who === 'Barrower') && <li> <Link to='/updatemoney'> Money</Link> </li>}
                        {!(user === '' || user === undefined) && <li id='login' onClick={logoutFunc}> <Link to='/'> Logout</Link> </li>}
                        {(user === '' || user === undefined) && <li > <Link to='/about'> About</Link> </li>}
                        {(user === '' || user === undefined) && <li id='login'> <Link to='/login'> Login</Link> </li>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
