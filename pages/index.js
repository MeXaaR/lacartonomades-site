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
import { gql } from "@apollo/client";
import { useQuery } from "../components/client";

const GET_HOME_PAGE = gql`
query HomePage {
  homePage {
    data {
      attributes {
        title
        introduction
        features_title
        features_introduction
        marie_description
        marie_photo {
          data {
            attributes {
              url
            }
          }
        }
        francois_description
        francois_photo {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`

const Index = () => {
  const query = useQuery(GET_HOME_PAGE)
  const { data = {} } = query
  return (

    <Layout
      pageTitle="La Carto'Nomades | L'application pensée par des nomades"
    >
      <Header nav="home" />
      <SingleImage data={data?.homePage?.data} />
      <Clients className="section-box bg-grey" />
      <Features homeData={data?.homePage?.data} />
      <Counters />
      <Team data={data?.homePage?.data} />
      <Support />
      <Footer />
      <ToTop />
    </Layout>

  )
}

export default Index;