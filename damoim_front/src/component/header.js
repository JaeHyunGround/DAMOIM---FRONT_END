import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            헤더입니다!
            <section className='headLeft'>
                <span><Link to="/">로고</Link></span>
            </section>

            <section className='headRight'>
                <span><Link to="/login">로그인</Link></span>
                <span><Link to="/signUp">회원가입</Link></span>
            </section>
        </>
    );
}

export default Header;