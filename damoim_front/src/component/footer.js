import '../css/footer.css';
function Footer() {
    return (
        <>
            <div className='footer-box'>
                <div className="idea-box">
                    <div className="idea-img">
                        <img className='footer-logo' src='/image/damoimlogo4.png' />
                    </div>
                    <div className="idea-text">
                        <p className="idea">🌟다모임 - DAMOIM🌟 에서는 카테고리 별로 <br />  교내 동아리 현황을 알 수 있고,<br /> 동아리 소개와 각 동아리에서 홍보글과 소개글 등을 <br /> 작성할 수 있는 각 동아리 별 게시판을 제공하는 <br />  교내 동아리 게시판입니다.</p>
                    </div>
                </div>
                <div className="intro-box">
                    <div className="intro-img">
                        <a href='https://www.notion.so/10-95302d8693d548dc93a2b876cf28195f'>
                            <img className='footer-logo' src='/image/likelion.png' />
                        </a>
                    </div>
                    <div className="intro-txt">
                        <p className="txt">운영진 : 안재현<br />
                            PM : 정유경<br />
                            FRONT-END : 백승민, 임수연<br />
                            BACK-END : 김성은, 전용현</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;