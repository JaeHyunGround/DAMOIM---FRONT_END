import Footer from "../component/footer";
import Header from "../component/header";

function PostPage() {
    const goDetail = () => {
        document.location.href = "/club";
    }
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                <div className="postList">
                    글 목록
                </div>
                <div className="post">
                    작성한 게시물
                </div>
                <div>
                    <button onClick={goDetail}>
                        뒤로가기
                    </button>
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default PostPage;