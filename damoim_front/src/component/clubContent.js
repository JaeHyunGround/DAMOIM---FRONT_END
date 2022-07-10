import '../css/clubContent.css';
import { Link } from 'react-router-dom';

export const ClubContent = (props) => {
    // const goPosting = () => {
    //     document.location.href = "/posting";
    // }

    let clubName = props.url.clubName;
    let url = clubName + '/posting';
    console.log(url)

    return (
        <>
            <section className="clubInfo">
                <img src="/image/Kit_Logo.png" />
                <div>
                    <h3 className='clubName'>동아리 이름</h3>
                    <h4>동아리 소개: </h4>
                    <a className="contact">
                        문의하기
                    </a>
                </div>
                <a className='clubLocation'>동아리방 위치: </a>
            </section>

            <section className="clubPost">
                <div className='write'>
                    <Link className='writeBtn'
                        to={`/club/${url}`}
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}>
                        글쓰기
                    </Link>
                </div>
                <div className='postList'>
                    글 목록
                </div>
            </section>
        </>
    )
}