import React from "react";

import Header from "../../components/Header";
import Banners from "../../components/Banners";
import Ruler from "../../components/Ruler";
import Brands from "../../components/Brands";
import Cards from "../../components/Cards";
import Collection from "../../components/Collection";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import ModalNews from "../../components/ModalNews";

import './index.scss'

function Home() {
    return (
      <div>
        <Header />
        <Banners />
        <Ruler />
        <Brands />
        <Cards />
        <Collection />
        <Newsletter />
        <Footer />
        <ModalNews />
      </div>
    );
}

export default Home;
