import Layout from "../components/Sections/Layout";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";
import PageTitle from "../components/BlogPost/PageTitle";
import BlogContainer from "../components/BlogPost/BlogContainer";
import BlogDetails from "../components/BlogPost/BlogDetails";
import { gql, useQuery } from "@apollo/client";

const GET_PRIVACY = gql`
query PrivacyPage {
  privacyPage {
    data {
      attributes {
        Content
      }
    }
  }
}`


const BlogPost = () => {

  const privacy = useQuery(GET_PRIVACY)

  return (

    <Layout
      pageTitle="La Carto'Nomades | Politique de confidentialité"
      colorSchema="/assets/colors/blue.css"
    >
      <Header />
      <PageTitle title="Politique de confidentialité" subtitle="Chut, c'est confidentiel" />

      <BlogContainer>
        <BlogDetails content={privacy?.data?.privacyPage.data?.attributes?.Content} />
      </BlogContainer>

      <Footer />
      <ToTop />
    </Layout>

  )
}

export default BlogPost;