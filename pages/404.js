import Layout from "../components/Sections/Layout";
import ErrorPage from "../components/404/ErrorPage";
import ToTop from "../components/Sections/ToTop";
import Loader from "../components/Sections/Loader";

const Custom404 = () => (

    <Layout
        pageTitle="La Carto'Nomades - Ooops..."
    >
        <ErrorPage />
        <ToTop />
        <Loader />
    </Layout>

)

export default Custom404;