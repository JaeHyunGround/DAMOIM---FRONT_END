import { getData } from "../clubData";
import { useParams, Link } from "react-router-dom";
import '../css/club.css';
import { useState } from "react";

export const Category = () => {
    const clubdata = getData();
    const params = useParams();

    const clubs = [];
    clubdata.forEach((club) => {
        if (club.type == params.category)
            clubs.push({
                type: club.type,
                name: club.name,
                url: club.url,
                img : club.img
            })
    })
    return (
        // <div className="club-box">
        //     <div className="club-line"></div>
        //     <div className="clubTable">
        //     {clubs.map((club) => (
        //         <>
        //             <Link to={club.url} className="clubCard">
        //                 <a className="club-name">{club.name}</a>
        //                 <div className="card-img">
        //                     <img src={club.img} className='club-logo'/>
        //                 </div>
        //                 <div className="detail-box">
        //                     <img src="./image/detailpage.png" />
        //                 </div>
                        
        //             </Link>
                    
        //         </>
                
        //     ))}
        //     </div>
        // </div>

        <div className="club-box">
            <p className="cateName">{params.category}</p>
                <>
                    <div className="club-line"></div>
                    <div className="clubTable">
                    {clubs.map((club) => (
                        <>
                            <Link to={club.url} className="clubCard">
                                <a className="club-name">{club.name}</a>
                                <div className="card-img">
                                    <img src={club.img} className='club-logo'/>
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