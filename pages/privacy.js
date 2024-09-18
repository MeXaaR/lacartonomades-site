'use client'
import Layout from "../components/Sections/Layout";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import PageTitle from "../components/BlogPost/PageTitle";
import BlogContainer from "../components/BlogPost/BlogContainer";
import BlogDetails from "../components/BlogPost/BlogDetails";
import { privacy } from "../data/privacy";

const BlogPost = () => {

  return (

    <Layout
      pageTitle="La Carto'Nomades | Politique de confidentialité"
    >
      <Header />
      <PageTitle title="Politique de confidentialité" subtitle="Chut, c'est confidentiel" />

      <BlogContainer>
        <BlogDetails content={privacy} />
      </BlogContainer>

      <Footer />
      <ToTop />
    </Layout>

  )
}

export default BlogPost;