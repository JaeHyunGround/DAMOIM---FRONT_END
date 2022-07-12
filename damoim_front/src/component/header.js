import '../css/header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
    const [data, setData] = useState([]);
    const URL = 'http://115.85.181.24:8000'

    useEffect(() => {
        axios.get(URL)
            .then(res => setData(res.data))
    }, [])

    const category = [];
    const [isLogin, setIsLogin] = useState('false');

    data.map((club) => {
        if (!category.includes(club.group_category))
            category.push(club.group_category)
    })

    const goMain = () => {
        document.location.href = "/";
    }

    useEffect(() => {
        axios.get('http://115.85.181.24:8000/account/login/check', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            // setIsLogin('true');
            if (res.data.is_login === 'true') {
                setIsLogin('true')
            } else {
                setIsLogin('false')
            }
        })
    }, [])

    const tokenClear = () => {
        // localStorage.clear()
        localStorage.setItem('token', 'clear');
        alert("로그아웃 되었습니다.");

        if (localStorage.getItem('token') == 'clear') {
            setIsLogin('false');
        }
    }
    return (
        <>
            <section className='headTop'>
                <div className='headCenter'>
                    <img onClick={goMain} src='/image/damoimlogo3.png' />
                </div>

                <div className='headRight'>
                    {(isLogin) == 'true' ?
                        <div>
                            <span>
                                <Link to="/" className='myMenu'>
                                    <img src='/image/logout.png' onClick={tokenClear} />
                                </Link>
                            </span>
                            <span>
                                <Link to="/edit" className='myMenu'>
                                    <img src='/image/edit.png' />
                                </Link>
                            </span>
                        </div>
                        :
                        <div>
                            <span>
                                <Link to="/login" className='myMenu'>
                                    <img src='/image/login.png' />
                                </Link>
                            </span>
                            <span>
                                <Link to="/signUp" className='myMenu'>
                                    <img src='/image/signup.png' />
                                </Link>
                            </span>
                        </div>
                    }
                </div>
            </section>

            <section className='headBottom'>
                <div className='bottomLeft'>
                    <Link to="/">
                        <img className='logo' src='/image/damoimlogo1.png' />
                    </Link>
                </div>

                {category.map((type, idx) => (
                    <li className='clubCategory'>
                        <a href={`/${type}`}
                            style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                            {type}
                        </a>
                        {idx < (category.length - 1) ?
                            <div className='line'>ㅣ</div> :
                            ""}
                    </li>
                ))}
            </section>
        </>
    );
}

export default Header;