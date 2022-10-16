import Team_img from '../components/Team_img/team_img';
import Main_imgs from '../components/Main_imgs/main_imgs';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import React from 'react';

export default function Home() {
    return (
        <>
            <Navbar/>
            <Main_imgs/>
            <Team_img/>
            <Footer/>
        </>
    );
}
