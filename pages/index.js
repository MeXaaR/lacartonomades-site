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
import { gql, useQuery } from "@apollo/client";

const GET_HOME_PAGE = gql`
query HomePage {
  homePage {
    data {
      attributes {
        title
        introduction
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
  const { data = {} } = useQuery(GET_HOME_PAGE)
  return (

    <Layout
      pageTitle="La Carto'Nomades | L'application privée pour les nomades"
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