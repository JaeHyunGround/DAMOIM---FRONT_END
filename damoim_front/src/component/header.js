import '../css/header.css';
import { Link } from 'react-router-dom';
import { getData } from '../clubData';
import { useState } from 'react';

function Header() {
    const clubdata = getData();
    const category = [];
    const [isLogin, setIsLogin] = useState(false);
    const [textColor, setTextColor] = useState('black');

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
                <div className='headCenter'>
                    <img onClick={goMain} src='/image/damoimlogo3.png' />
                </div>

                <div className='headRight'>
                    <li>
                        <Link to="/login">
                            <img src='/image/login.png' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/signUp">
                            <img src='/image/signup.png' />
                        </Link>
                    </li>
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