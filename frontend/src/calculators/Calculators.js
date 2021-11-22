import React, { useState } from 'react'
import "../css/Home.css"
import CalculatorsEmi from '../calculators/CalculatorsEmi'
import CalculatorsAffLoan from '../calculators/CalculatorsAffLoan'
import CalculatorsIntrest from '../calculators/CalculatorsIntrest'

const Calculators = () => {
    const [emidis, setemidis] = useState(0)
    const [affLoanDis, setaffLoanDis] = useState(0)
    const [intrestDis, setintrestDis] = useState(0)
    const emiCal = () => {
        if (emidis === 0) {
            document.getElementById("outer-emi").style.display = "block";
            setemidis(1)
            document.getElementById("outer-affloan").style.display = "none";
            setaffLoanDis(0)
            document.getElementById("outer-intrest").style.display = "none";
            setintrestDis(0)
        }
        if (emidis === 1) {
            document.getElementById("outer-emi").style.display = "none";
            setemidis(0)
        }
    }
    const affLoanCal = () => {
        if (affLoanDis === 0) {
            document.getElementById("outer-affloan").style.display = "block";
            setaffLoanDis(1)
            document.getElementById("outer-emi").style.display = "none";
            setemidis(0)
            document.getElementById("outer-intrest").style.display = "none";
            setintrestDis(0)
        }
        if (affLoanDis === 1) {
            document.getElementById("outer-affloan").style.display = "none";
            setaffLoanDis(0)
        }
    }
    const intrestCal = () => {
        if (intrestDis === 0) {
            document.getElementById("outer-intrest").style.display = "block";
            setintrestDis(1)
            document.getElementById("outer-emi").style.display = "none";
            setemidis(0)
            document.getElementById("outer-affloan").style.display = "none";
            setaffLoanDis(0)
        }
        if (intrestDis === 1) {
            document.getElementById("outer-intrest").style.display = "none";
            setintrestDis(0)
        }
    }
    return (
        <div className="calculator-container">
            <div className="btn-container">
                <button className="cal-button" onClick={emiCal}>EMI Calculator</button>
                <button className="cal-button" onClick={affLoanCal}>Affordable Loan Calculator</button>
                <button className="cal-button" onClick={intrestCal}>Intrest Calculator</button>
            </div>
            <CalculatorsEmi />
            <CalculatorsAffLoan />
            <CalculatorsIntrest />
        </div>

    )
}

export default Calculators
