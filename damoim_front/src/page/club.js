import Header from "../component/header";
import { Link } from "react-router-dom";
import { ClubContent } from "../component/clubContent";
import Footer from "../component/footer";

function ClubPage() {
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                동아리 페이지
                <div>
                    <ClubContent />
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default ClubPage;