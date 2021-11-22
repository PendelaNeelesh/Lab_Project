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
    const [balance, setBalance] = useState('')
    const [accno, setAccno] = useState('')
    const [money, setMoney] = useState('')
    const [mail, setmail] = useState('')
    const [pass, setpass] = useState('')
    const [purpose, setPurpose] = useState('')
    const [cnfpass, setcnfPass] = useState('')
    return (
        <div className='reg-bar-cnt'>
            <div className='reg-bar-form-cnt'>
                <div className='reg-text-div'>Register</div>
                <form className='reg-bar-form'>
                    <div className='reg-bar-form-set'>
                        <div id='err-cnt' className='err-sent'></div>
                        <label className='reg-label-field'>Name</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setName(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Email</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setmail(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Password</label>
                        <input className='reg-input-field' type='password' onChange={(e) => {
                            setpass(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Password</label>
                        <input className='reg-input-field' type='password' onChange={(e) => {
                            setcnfPass(e.target.value)
                            if (pass !== cnfpass) document.getElementById('pass-err').innerHTML = ('Password must be same')
                            else document.getElementById('pass-err').innerHTML = ''
                        }} />
                        <div className='err-sent' id='pass-err'></div></div>
                    <div className='reg-bar-form-set'>
                        <div id='phone-err' className='err-sent'> </div>
                        <label className='reg-label-field'>Phone</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            if (e.target.value.length !== 10) document.getElementById('phone-err').innerHTML = 'inValid Phone number'
                            else document.getElementById('phone-err').innerHTML = ''
                            setPhone(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Pincode</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setPincode(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Address</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setAddress(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <div id="age-err" className='err-sent'></div>
                        <label className='reg-label-field'>Age</label>
                        <input className='reg-input-field' type='number' onChange={(e) => {
                            if (e.target.value < 18) document.getElementById('age-err').innerHTML = "Min Age is 18"
                            else document.getElementById('age-err').innerHTML = ''
                            setAge(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Sex</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setSex(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Pan</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setPan(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Aadhar</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setAadhar(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>AccNo</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
                            setAccno(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>Money</label>
                        <input className='reg-input-field' type='number' onChange={(e) => {
                            setMoney(e.target.value)
                        }} /> </div>
                    <div className='reg-bar-form-set'>
                        <label className='reg-label-field'>purpose</label>
                        <input className='reg-input-field' type='text' onChange={(e) => {
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
