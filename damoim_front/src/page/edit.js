import '../css/edit.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../actions/user_action';
import Footer from '../component/footer';

function EditPage(props) {
    const dispatch = useDispatch();

    const [originPw, setOriginPw] = useState("");
    const [changePw, setChangePw] = useState("");
    const [rePw, setRePw] = useState("");

    const onOriginPwHandler = (event) => {
        setOriginPw(event.currentTarget.value)
    }

    const onChangePwHandler = (event) => {
        setChangePw(event.currentTarget.value)
    }

    const onRePwHandler = (event) => {
        setRePw(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            originpassword: originPw,
            changepassword: changePw,
            repassword: rePw
        }
        
        dispatch(editUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/edit")
                } else {
                    alert("Failed to sign up")
                }
            })
    }


    return (
        <>
            <div>
                <p className='name'>비밀번호 변경</p>
            </div>
            <div className='edit-box'>
                <input className='edit-text' type='text' placeholder='기존 비밀번호'
                 value={originPw}
                 onChange={onOriginPwHandler}></input>
                <input className='edit-text' type='password' placeholder='변경할 비밀번호'
                 value={changePw}
                 onChange={onChangePwHandler}></input>
                <input className='edit-text' type='password' placeholder='비밀번호 재확인'
                value={rePw}
                onChange={onRePwHandler}></input>
            </div>
            <div className='button-box'>
                <button className='edit-btn'
                onClick={onSubmitHandler}>변경</button>
            </div>
            <Footer />
        </>
    );
}

export default EditPage;