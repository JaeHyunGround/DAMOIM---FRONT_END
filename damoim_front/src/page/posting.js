import '../css/posting.css';
import Header from "../component/header";
import Footer from "../component/footer";
import { useParams } from 'react-router-dom';

function PostingPage() {
    const urlparam = useParams();
    let clubName = urlparam.clubName;

    const goDetail = () => {
        document.location.href = `/club/${clubName}/post`;
    }

    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                <div className="title">
                    <input type='text' className="titleBox" placeholder="제목을 입력하세요." />
                </div>

                <div className="content">
                    <textarea type='text' className="contentBox" placeholder="내용을 입력하세요." />
                </div>

                <div className='postBtn'>
                    <button onClick={goDetail}>
                        등 록
                    </button>
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default PostingPage;