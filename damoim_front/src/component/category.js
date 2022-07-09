import { getData } from "../clubData";
import { useParams, Link } from "react-router-dom";
import '../css/club.css';

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
            })
    })
    return (
        <div className="clubTable">
            {clubs.map((club) => (
                <Link to={club.url} className="clubCard">
                    <img src="./image/Kit_Logo.png" />
                    <a>{club.name}</a>
                </Link>
            ))}
        </div>
    )
}