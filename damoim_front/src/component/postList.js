import { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);
    const URL = 'http://115.85.181.24:8000'

    useEffect(() => {
        axios.get(URL)
            .then(res => setPosts(res.data))
    })

    return (
        <>
            <div className="postList">
                <div className="listTop">
                    <span className="topId">번호</span>
                    <span className="topTitle">제목</span>
                    <span className="topDate">날짜</span>
                </div>
                <div className="list">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <span className="postId">{post.useCount}</span>
                            <span className="postTitle">{post.identity}</span>
                            <span className="postDate">{post.status}</span>
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PostList;