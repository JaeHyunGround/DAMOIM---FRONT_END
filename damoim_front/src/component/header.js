import '../css/header.css';
import { Link } from 'react-router-dom';
import { getData } from '../clubData';
import { useState } from 'react';

function Header() {
    const clubdata = getData();
    const category = [];
    const [isLogin, setIsLogin] = useState(false);

    clubdata.map((club) => {
        if (!category.includes(club.type))
            category.push(club.type)
    })

    const goMain = () => {
        document.location.href = "/";
    }

    return (
        <>
            <section className='headTop'>
                <div className='headLeft'>
                    <Link to="/">
                        <img className='logo' src='/image/Kit_Logo.png' />
                    </Link>
                </div>

                <div className='headCenter'>
                    <a onClick={goMain}>
                        DAMOIM
                    </a>
                </div>

                <div className='headRight'>
                    <li>
                        <Link to="/login"
                            style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                            로그인
                        </Link>
                    </li>
                    <li>
                        <Link to="/signUp"
                            style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                            회원가입
                        </Link>
                    </li>
                </div>
            </section>

            <section className='headBottom'>
                {category.map((type) => (
                    <Link to={`/${type}`}
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}>
                        <li>{type}</li>
                    </Link>
                ))}
            </section>
        </>
    );
}

export default Header;