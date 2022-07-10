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
        <div className='loginbox'>
            <div className='login-logo'>
                <img src='image/damoimlogo2.png' onClick={goMain}></img>
                <div className="login_text">Login Now</div>
            </div>
            <div className='login-box'>
                <input className='login-id'
                    value={id}
                    onChange={onIdHandler}
                    type='text'
                    placeholder='  ID'>
                </input>
                <input className='login-pw'
                    value={password}
                    onChange={onPasswordHandler}
                    type='password'
                    placeholder='  PW'>
                </input>
            </div>
            <button className='login-btn'
                onClick={onSubmitHandler}
            >
                Login
            </button>
            <div className='move-box'>
                <p className='min-text'>아이디 찾기</p>
                <Link to="/edit" className='min-text'><p>비밀번호 변경</p></Link>
                <Link to="/signUp" className='min-text'><p>회원가입</p></Link>
            </div>
            <div className='login-bottom-logo' onClick={goMain}>
                <img src='image/damoimlogo1.png' className='login-bottomlogosize'></img>
            </div>
        </div>
        </>
    );
}

export default LoginPage;

