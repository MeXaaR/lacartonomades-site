'use client'
import React from "react";

import SingleImage from "../components/Intro/SingleImage";
import Layout from "../components/Sections/Layout";
import Header from "../components/Sections/Header";
import Clients from "../components/Sections//Clients";
import Features from "../components/Sections/Features";
import Counters from "../components/Sections/Counters";
import Team from "../components/Sections/Team";
import Support from "../components/Sections/Support";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import home_page from "../data/home_page.json";

const Index = () => {
  return (

    <Layout
      pageTitle="La Carto'Nomades | L'application pensée par des nomades"
    >
      <Header nav="home" />
      <SingleImage data={home_page} />
      <Clients className="section-box bg-grey" />
      <Features homeData={home_page} />
      <Counters />
      <Team data={home_page} />
      <Support />
      <Footer />
      <ToTop />
    </Layout>

  )
}

export default Index;