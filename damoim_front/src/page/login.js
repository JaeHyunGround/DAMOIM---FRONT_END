import '../css/login.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const goMain = () => {
        document.location.href = "/";
    }

    const onSubmitHandler = () => {

        // event.preventDefault();
        const body = {
            user_id: id,
            password: password
        }

        const URL = 'http://115.85.181.24:8000/account/login/';
        axios.post(URL, body)
            .then((res) => {
                localStorage.setItem('token', 'Token ' + res.data.token);
                alert("로그인 되었습니다.");
                goMain();
            })
            .catch((error) => {
                alert("잘못 된 계정 입니다.");
            });
    }

    // useEffect(() => {
    //     console.log(test);
    // }, [test]);

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
                <div className='login-bottom-logo'>
                    <img src='image/damoimlogo1.png' className='login-bottomlogosize' onClick={goMain}></img>
                </div>
            </div>
        </>
    );
}

export default LoginPage;