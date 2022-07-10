import Footer from "../component/footer";
import Header from "../component/header";
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

function PostPage() {
    const urlparam = useParams();
    let clubName = urlparam.clubName;

    const goDetail = () => {
        document.location.href = `/club/${clubName}`;
    }

    const [test, setTest] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
        }).then(res => setTest(res.data))
    })

    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                <div className="postList">
                    <div className="listTop">
                        <span className="postId">번호</span>
                        <span className="postTitle">제목</span>
                        <span className="postDate">날짜</span>
                    </div>
                    <div>
                        {test.map(data => (
                            <li key={test.id}>
                                {test.title}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="post">
                    작성한 게시물
                </div>
                <div>
                    <button onClick={goDetail}>
                        동아리 페이지로
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