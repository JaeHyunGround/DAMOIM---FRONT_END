import '../css/clubContent.css';
import { Link } from 'react-router-dom';
import PostList from './postList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getData } from '../clubData';

export const ClubContent = (props) => {
    let url = props.url + '/posting';

    const dataTable = getData();

    // const [realData, setRealData] = useState();

    // const [data, setData] = useState([]);
    // const URL = 'http://115.85.181.24:8000'

    // useEffect(() => {
    //     axios.get(URL)
    //         .then(res => {
    //             setData(res.data)
    //         })
    // }, [])

    // data.map((mindata) => {
    //     localStorage.setItem(mindata.group_name, JSON.stringify(mindata))
    // })

    const clubs = [];
    let clubName = props.url.slice(5)

    // setRealData(JSON.parse(localStorage.getItem(clubName)))
    // console.log(realData)


    dataTable.forEach((club) => {
        if (club.name == clubName)
            clubs.push({
                name: club.name,
                url: club.url,
                img: club.img,
            })
    })

    console.log(clubs)

    return (
        <>
            <section className="clubInfo">
                <div className='infoLeft'>
                    <div className='leftImg'>
                        <img src="/image/likelion.png" />
                    </div>
                    <div id='loca'>
                        <h3 className='clubName'>{clubs[0].name}</h3>
                        <h4>동아리 소개: </h4>
                        <a className='clubIntro'>
                            동아리 소개글입니다.
                        </a>
                    </div>
                </div>
                <a className='clubLocation' id='loca'>
                    동아리방 위치:
                    동방 위치는 다음과 같습니다.
                </a>
                <Link to="" className="contact">
                    <img src='/image/contact.png' />
                </Link>
            </section>

            <section className="clubPost">
                <div className='write'>
                    <Link className='writeBtn'
                        to={`/${url}`}
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}>
                        글쓰기
                    </Link>
                </div>
                <div className='postList'>
                    <PostList />
                </div>
            </section>
        </>
    )
}