import Layout from "../components/Sections/Layout";
import Header from "../components/Sections/Header";
import PageTitle from "../components/BlogPost/PageTitle";
import BlogContainer from "../components/BlogPost/BlogContainer";
import BlogDetails from "../components/BlogPost/BlogDetails";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import { gql, useQuery } from "@apollo/client";

const GET_SUPPORT = gql`
query SupportPage {
  supportPage {
    data {
      attributes {
        Content
      }
    }
  }
}`


const BlogPost = () => {

  const support = useQuery(GET_SUPPORT)

  return (

    <Layout
      pageTitle="La Carto'Nomades | Mention Légales"
    >
      <Header />
      <PageTitle tag="Un p'tit coup de pouce ?" title="Nous aider à maintenir l'appli" subtitle="Mais c'est pas obligé hein!" />

      <BlogContainer>
        <BlogDetails content={support?.data?.supportPage.data?.attributes?.Content} />
      </BlogContainer>

      <Footer />
      <ToTop />
    </Layout>

  )
}

export default BlogPost;