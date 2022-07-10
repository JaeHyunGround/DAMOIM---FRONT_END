import '../css/posting.css';
import Header from "../component/header";
import Footer from "../component/footer";

function PostingPage() {
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                <div className="title">
                    <input type='text' className="titleBox" placeholder="제목" />
                </div>

                <div className="content">
                    <textarea type='text' className="contentBox" placeholder="내용을 입력하세요." />
                </div>

                <div className='post'>
                    <button>
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