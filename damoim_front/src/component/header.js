import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <section className='headLeft'>
                <span>
                    <Link to="/">
                        <img className='logo' src='image/Kit_Logo.png' />
                    </Link>
                </span>
            </section>

            <section className='headRight'>
                <span><Link to="/login">로그인</Link></span>
                <span><Link to="/signUp">회원가입</Link></span>
            </section>
        </>
    );
}

export default Header;