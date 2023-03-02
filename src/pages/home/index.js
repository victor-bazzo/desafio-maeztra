import React from "react";
import Header from "../../components/Header";
import Banners from "../../components/Banners";
import Ruler from "../../components/Ruler";
import Brands from "../../components/Brands";
import Cards from "../../components/Cards";
import './index.scss'

function Home() {
    return (
        <div>
            <Header />
            <Banners />
            <Ruler />
            <Brands />
            <Cards />
        </div>
    )
}

export default Home;
