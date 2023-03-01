import React from "react";
import Header from "../../components/Header";
import Banners from "../../components/Banners";
import Ruler from "../../components/Ruler";
import './index.scss'

function Home() {
    return (
        <div>
            <Header />
            <Banners />
            <Ruler />
        </div>
    )
}

export default Home;
