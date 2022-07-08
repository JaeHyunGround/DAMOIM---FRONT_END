import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <section className='headTop'>
                <div className='headLeft'>
                    <span>
                        <Link to="/">
                            <img className='logo' src='image/Kit_Logo.png' />
                        </Link>
                    </span>
                </div>

                <div className='headCenter'>
                    <span>
                        <a>DAMOIM</a>
                    </span>
                </div>

                <div className='headRight'>
                    <span><Link to="/login">로그인</Link></span>
                    <span><Link to="/signUp">회원가입</Link></span>
                </div>
            </section>

            <section className='headBottom'>
                <a>분류1</a>
                <a>분류2</a>
                <a>분류3</a>
                <a>분류4</a>
            </section>
        </>
    );
}

export default Header;