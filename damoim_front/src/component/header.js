import '../css/header.css';
import { Link } from 'react-router-dom';
import { getData } from '../clubData';

function Header() {
    const clubdata = getData();
    const category = [];

    clubdata.map((club) => {
        if (!category.includes(club.type))
            category.push(club.type)
    })

    return (
        <>
            <section className='headTop'>
                <div className='headLeft'>
                    <Link to="/">
                        <img className='logo' src='/image/Kit_Logo.png' />
                    </Link>
                </div>

                <div className='headCenter'>
                    <a>DAMOIM</a>
                </div>

                <div className='headRight'>
                    <li>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            로그인
                        </Link>
                    </li>
                    <li>
                        <Link to="/signUp" style={{ textDecoration: 'none' }}>
                            회원가입
                        </Link>
                    </li>
                </div>
            </section>

            <section className='headBottom'>
                {category.map((type) => (
                    <Link to={`/${type}`} style={{ textDecoration: 'none' }}>
                        <li>{type}</li>
                    </Link>
                ))}
            </section>
        </>
    );
}

export default Header;