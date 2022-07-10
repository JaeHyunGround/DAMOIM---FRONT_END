import '../css/login.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import axios from 'axios';

const LoginPage = () => {

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [test, setTest] = useState([]);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = () => {

        // event.preventDefault();
        const body = {
            id: id,
            password: password
        }

        axios.get('http://115.85.181.24:8083/scooter/state')
            .then(res => {
                setTest(res.data);
            })
    }

    useEffect(() => {
        console.log(test);
    }, [test]);

    const goMain = () => {
        document.location.href = "/";
    }

    return (
        <>
            <div onClick={goMain} className='login-logo'>
                <p className='name'>DAMOIM <br /> Login Now</p>
            </div>
            <div className='login-box'>
                <input className='login-pw'
                    value={id}
                    onChange={onIdHandler}
                    type='text'
                    placeholder='ID'>
                </input>
                <input className='login-pw'
                    value={password}
                    onChange={onPasswordHandler}
                    type='password'
                    placeholder='PW'>
                </input>
            </div>
            <button className='login-btn'
                onClick={onSubmitHandler}
            >
                로그인
            </button>
            <div className='move-box'>
                <p className='min-text'><Link to="/edit">비밀번호 변경</Link></p>
                <p className='min-text'> / </p>
                <p className='min-text'><Link to="/signUp">회원가입</Link></p>
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;

