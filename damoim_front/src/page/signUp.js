import '../css/signUp.css';
import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../component/footer';

function SignUpPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [major, setMajor] = useState("");
    const [grade, setGrade] = useState("");
    const [number, setNumber] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onMajorHandler = (event) => {
        setMajor(event.currentTarget.value)
    }

    const onGradeHandler = (event) => {
        setGrade(event.currentTarget.value)
    }

    const onNumberHandler = (event) => {
        setNumber(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const body = {
            user_id: id,
            department: major,
            grade: grade,
            phone: number,
            password: password,
            name: name
        }

        const URL = 'http://115.85.181.24:8000/account/signup/';
        axios.post(URL, body)
            .then((res) => {
                alert("회원가입 성공!");
                document.location.href = "/login";
            })
            .catch((error) => {
                console.log(`에러다${error}`)
            });
    }

    const goMain = () => {
        document.location.href = "/";
    }

    return (
        <>
            <div>
                <p className='name'
                    onClick={goMain}>
                    회원가입
                </p>
            </div>
            <div className='sign-box'>
                <input className='signup-text' type='text' placeholder='ID'
                    value={id}
                    onChange={onIdHandler}></input>
                <input className='signup-text' type='password' placeholder='PW'
                    value={password}
                    onChange={onPasswordHandler}></input>
                <input className='signup-text' type='text' placeholder='이름'
                    value={name}
                    onChange={onNameHandler}></input>
                <input className='signup-text' type='text' placeholder='학과'
                    value={major}
                    onChange={onMajorHandler}></input>
                <input className='signup-text' type='text' placeholder='학년'
                    value={grade}
                    onChange={onGradeHandler}></input>
                <input className='signup-text' type='text' placeholder='전화번호'
                    value={number}
                    onChange={onNumberHandler}></input>
            </div>
            <div className='button-box'>
                <button className='signup-btn'
                    onClick={onSubmitHandler}
                >
                    회원가입</button>
            </div>
            <Footer />
        </>
    );
}

export default SignUpPage;