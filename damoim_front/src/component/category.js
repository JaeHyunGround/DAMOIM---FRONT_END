import { useParams, Link } from "react-router-dom";
import '../css/club.css';
import { useState, useEffect } from "react";
import axios from "axios";

export const Category = () => {
    const [data, setData] = useState([]);
    const URL = 'http://115.85.181.24:8000'

    useEffect(() => {
        axios.get(URL)
            .then(res => setData(res.data))
    }, [])

    const params = useParams();

    const clubs = [];
    data.forEach((club) => {
        if (club.group_category == params.category)
            clubs.push({
                type: club.group_category,
                name: club.group_name,
                url: club.group_name,
                img: club.logo,
            })
    })

    return (
        <div className="club-box">
            <p className="cateName">{params.category}</p>
            <>
                <div className="club-line"></div>
                <div className="clubTable">
                    {clubs.map((club) => (
                        <>
                            <Link to={`club/${club.url}`} className="clubCard">
                                <a className="club-name">{club.name}</a>
                                <div className="card-img">
                                    <img src={`/image/${club.img}`} className='club-logo' />
                                </div>
                                <div className="detail-box">
                                    <img src="./image/detailpage.png" />
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </>
        </div>
    )
}