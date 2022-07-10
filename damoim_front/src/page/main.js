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