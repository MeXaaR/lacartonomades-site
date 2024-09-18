'use client'
import Layout from "../components/Sections/Layout";
import Header from "../components/Sections/Header";
import PageTitle from "../components/BlogPost/PageTitle";
import BlogContainer from "../components/BlogPost/BlogContainer";
import BlogDetails from "../components/BlogPost/BlogDetails";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import { mentions } from "../data/mentions";

const BlogPost = () => {

  return (

    <Layout
      pageTitle="La Carto'Nomades | Mention Légales"
    >
      <Header />
      <PageTitle title="Mentions Légales" />

      <BlogContainer>
        <BlogDetails content={mentions} />
      </BlogContainer>

      <Footer />
      <ToTop />
    </Layout>

  )
}

export default BlogPost;