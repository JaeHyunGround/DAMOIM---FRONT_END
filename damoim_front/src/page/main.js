import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import Header from '../component/header';

function mainPage() {
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                메인 페이지
                <div>
                    <span><Link to="/club">동아리카드(이름을 전달해줄거에요)</Link></span>
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default mainPage;