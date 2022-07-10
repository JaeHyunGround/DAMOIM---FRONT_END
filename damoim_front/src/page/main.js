import { Category } from '../component/category';
import Footer from '../component/footer';
import Header from '../component/header';

function MainPage() {
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                메인 페이지
                <div>
                    <Category />
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default MainPage;