import React from 'react'
import '../css/reg.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
const BarrowerReg = () => {
    const history = useHistory();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPincode] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [pan, setPan] = useState('')
    const [aadhar, setAadhar] = useState('')
    const [accno, setAccno] = useState('')
    const [money, setMoney] = useState('')
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [purpose, setPurpose] = useState('')
    const [cnfpass, setcnfPass] = useState('')
    return (
        <div className='reg-bar-cnt'>
            <div className='reg-bar-form-cnt'>
                <div className='reg-text-div'>Register</div>
                <form className='reg-bar-form'>
                    <div className='reg-bar-form-set'>
                        <div id='err-cnt' className='err-sent'></div>
                        <input className='reg-input-field' placeholder='name' type='text' onChange={(e) => {
                            setName(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='mail' type='text' onChange={(e) => {
                            setMail(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='confirm password' type='password' onChange={(e) => {
                            setPass(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder="Password" type='password' onChange={(e) => {
                            setcnfPass(e.target.value)
                            if (pass !== cnfpass) document.getElementById('pass-err').innerHTML = ('Password must be same')
                            else document.getElementById('pass-err').innerHTML = ''
                        }} />
                        <div className='err-sent' id='pass-err'></div></div>
                    <div className='reg-bar-form-set'>
                        <div id='phone-err' className='err-sent'> </div>
                        <input className='reg-input-field' placeholder='phone' type='text' onChange={(e) => {
                            if (e.target.value.length !== 10) document.getElementById('phone-err').innerHTML = 'inValid Phone number'
                            else document.getElementById('phone-err').innerHTML = ''
                            setPhone(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='Pincode' type='text' onChange={(e) => {
                            setPincode(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='Address' type='text' onChange={(e) => {
                            setAddress(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <div id="age-err" className='err-sent'></div>
                        <input className='reg-input-field' placeholder='age' type='number' onChange={(e) => {
                            if (e.target.value < 18) document.getElementById('age-err').innerHTML = "Min Age is 18"
                            else document.getElementById('age-err').innerHTML = ''
                            setAge(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='sex' type='text' onChange={(e) => {
                            setSex(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='pan' type='text' onChange={(e) => {
                            setPan(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='Aadhar' type='text' onChange={(e) => {
                            setAadhar(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='AccNO' type='text' onChange={(e) => {
                            setAccno(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='Required Money' type='number' onChange={(e) => {
                            setMoney(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <input className='reg-input-field' placeholder='purpose' type='text' onChange={(e) => {
                            setPurpose(e.target.value)
                        }} /> </div>
                    <div className='reg-submit-btn'>
                        <button className='reg-btn'>Submit</button>
                    </div>
                </form>
                <div className='register-cnt'>
                    <div className='form-message'>Have an account? Login Here</div>
                    <div className='no-acc-btn'><Link to='/login'>Login</Link></div>
                </div>
            </div>
        </div>
    )
}

export default BarrowerReg