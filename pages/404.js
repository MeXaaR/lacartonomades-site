import Layout from "../components/Sections/Layout";
import ErrorPage from "../components/404/ErrorPage";
import ToTop from "../components/Sections/ToTop";

const Custom404 = () => (

    <Layout
        pageTitle="La Carto'Nomades - Ooops..."
        colorSchema="/assets/colors/blue.css"
    >
        <ErrorPage />
        <ToTop />

    </Layout>

)

export default Custom404;