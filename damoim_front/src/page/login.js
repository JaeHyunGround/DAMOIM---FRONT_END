import '../css/login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/user_action';

function LoginPage(props) {
    const dispatch = useDispatch();

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            id: id,
            password: password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })


    }
    return (
        <>
            <div>
                <p className='name'>DAMOIM <br/> Login Now</p>
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