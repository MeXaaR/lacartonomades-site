'use client'
import Layout from "../components/Sections/Layout";
import Header from "../components/Sections/Header";
import PageTitle from "../components/BlogPost/PageTitle";
import BlogContainer from "../components/BlogPost/BlogContainer";
import BlogDetails from "../components/BlogPost/BlogDetails";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import Brocoli from "../components/Brocoli";
import { support_us } from "../data/support-us";


const BlogPost = () => {

  return (

    <Layout
      pageTitle="La Carto'Nomades | Mention Légales"
    >
      <Header />
      <PageTitle tag="Un p'tit coup de pouce ?" title="Nous aider à maintenir l'appli" subtitle="Mais c'est pas obligé hein!" />

      <BlogContainer>
        <BlogDetails content={support_us} />
        <Brocoli />
      </BlogContainer>
      <Footer />
      <ToTop />
    </Layout>

  )
}

export default BlogPost;