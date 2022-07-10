import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Category } from '../component/category';
import Footer from '../component/footer';
import Header from '../component/header';

function MainPage() {

    const [data, setData] = useState([]);

    const test = () => {
        axios.get('http://115.85.181.24:8083/scooter/state').then(res => {
            console.log(res);
        })
    }

    useEffect(() => {
        test();
    }, []);
    
    

    // useEffect(() => {
    //     axios.get('/api/main')
    //     .then(response => {console.log(response)})
    // })
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                메인 페이지
                <div>
                    <Category />
                </div>
            </section>

            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default MainPage;