import Header from "../component/header";
import { ClubContent } from "../component/clubContent";
import Footer from "../component/footer";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// 상세페이지
function ClubPage() {
    const params = useParams();

    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                <div>
                    <ClubContent
                        url={`club/${params.clubName}`}
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