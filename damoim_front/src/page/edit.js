import '../css/edit.css';
import React, { useState } from 'react'
import axios from 'axios';
import Footer from '../component/footer';

function EditPage(props) {

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

    const onSubmitHandler = () => {
        const body = {
            originpassword: originPw,
            changepassword: changePw,
            repassword: rePw
        }
        
        //기존비번과 입력한 비번 일치 확인
        //변경한 것과 재확인 비번 일치 확인
        //기존비번과 변경 비번 달라야함

        if(changePw !== rePw){
            alert("비밀번호가 일치하지 않습니다.");  
        } else if(!(originPw === "" || changePw === "") && originPw === changePw){
            alert("기존 비밀번호와 일치합니다. 다시 입력해주세요.");
        } else if(originPw === "" || changePw === "" || rePw === ""){
            alert("입력해주세요.");
        } else {
            axios.post("http://115.85.181.24:8000/user/signup/", body)
            .then(res => res.data)
            .then(res => {
            if (res.success) {
                alert("비밀번호가 변경되었습니다.");
            } else{
                alert('Error!');
            }
        })
        }
        
    }

    return (
        <>
            <div>
                <p className='name'>비밀번호 변경</p>
            </div>
            <div className='edit-box'>
                <input className='edit-text' type='password' placeholder='기존 비밀번호'
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