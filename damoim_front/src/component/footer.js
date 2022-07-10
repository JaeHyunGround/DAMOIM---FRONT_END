import '../css/footer.css';
function Footer() {
    return (
        <>
            <div className='footer-box'>
                <div className="idea-box">
                    <div className="idea-img"></div>
                    <div className="idea-text">
                        <p className="idea">아이디어 소개글</p>
                    </div>
                </div>
                <div className="intro-box">
                    <div className="intro-img">
                    <img className='logo' src='image/Kit_Logo.png' />
                    </div>
                    <div className="intro-txt">
                        <p className="txt">운영진 : 안재현<br/>
                        PM : 정유경<br/>
                        FRONT-END : 백승민, 임수연<br/>
                        BACK-END : 김성은, 전용현</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;