import React, { useEffect, useState } from 'react';
import { Category } from '../component/category';
import Footer from '../component/footer';
import Header from '../component/header';

function MainPage() {
    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                <div>
                    <Category />
                </div>
            </section>
            <img src='/image/HOME_image.png' style={{ width: '50%' }}></img>
            <section id="bottom">
                <Footer />
            </section>
        </>
    );
}

export default MainPage;