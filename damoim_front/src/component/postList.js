import { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);
    const URL = 'http://115.85.181.24:8083/scooter/state'

    useEffect(() => {
        axios.get(URL)
            .then(res => setPosts(res.data))
    })

    return (
        <>
            <div className="postList">
                <div className="listTop">
                    <span className="postId">번호</span>
                    <span className="postTitle">제목</span>
                    <span className="postDate">날짜</span>
                </div>
                <div className="post">
                    <span className="postId">번호</span>
                    <span className="postTitle">제목</span>
                    <span className="postDate">날짜</span>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                {post.status}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PostList;