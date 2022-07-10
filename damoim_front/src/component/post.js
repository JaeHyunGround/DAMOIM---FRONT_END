import '../css/post.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Post = () => {
    const [posts, setPosts] = useState([]);
    const URL = 'http://115.85.181.24:8083/scooter/state'

    useEffect(() => {
        axios.get(URL)
            .then(res => setPosts(res.data))
    })

    return (
        <>
            <div className='postBox'>
                글 내용
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            {post.status}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}