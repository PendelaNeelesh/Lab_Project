import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../contextApis/UserdetailsContext'
import '../css/Home.css'
import Calculators from '../calculators/Calculators'
const Home = () => {
    const [user, setUser, who, setWho] = useContext(userContext)
    return (
        <div className="home-container">
            <Link to='/lendreg'> Lender</Link>
            <Link to='/barreg'> Barrower</Link>
            <div className="live-feed">
                {who}
            </div>
            <Calculators />
        </div>
    )
}

export default Home
