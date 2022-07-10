import '../css/signUp.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/user_action';
import Footer from '../component/footer';

function SignUpPage(props) {
    const dispatch = useDispatch();

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

        let body = {
            id: id,
            password: password,
            name: name,
            major: major,
            grade: grade,
            number: number
        }
        
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/singUp")
                } else {
                    alert("Failed to sign up")
                }
            })
    }

    return (
        <>
            <div>
                <p className='name'>회원가입</p>
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