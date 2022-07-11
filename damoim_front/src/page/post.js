import Footer from "../component/footer";
import Header from "../component/header";
import PostList from "../component/postList";
import { useParams } from 'react-router-dom';
import { Post } from "../component/post";
import { useState } from 'react';

function PostPage() {
    const urlparam = useParams();
    let clubName = urlparam.clubName;

    const goDetail = () => {
        document.location.href = `/club/${clubName}`;
    }

    return (
        <>
            <section id="head">
                <Header />
            </section>



            <section className="body">
                <div>
                    <PostList />
                    <Post />
                    <div>
                        <button onClick={goDetail} className='detailBtn'>
                            동아리 페이지로
                        </button>
                    </div>
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default PostPage;