import Header from "../component/header";
import { ClubContent } from "../component/clubContent";
import Footer from "../component/footer";
import { useParams } from 'react-router-dom';

// 상세페이지
function ClubPage() {
    const urlparam = useParams();

    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                동아리 페이지
                <div>
                    <ClubContent
                        url={urlparam}
                    />
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default ClubPage;