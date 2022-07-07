import Header from "../component/header";
import { Link } from "react-router-dom";

function clubPage() {
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                동아리 페이지
                <div>
                    url에서<br />
                    'club/동아리이름' 형태로 페이지 달라질 예정!
                </div>
            </section>
        </>
    );
}

export default clubPage;