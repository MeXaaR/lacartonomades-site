import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import SingleImage from "../components/Intro/SingleImage";
import Header from "../components/Sections/Header";
import Clients from "../components/Sections//Clients";
import Features from "../components/Sections/Features";
import Counters from "../components/Sections/Counters";
import Team from "../components/Sections/Team";
import Support from "../components/Sections/Support";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Index = () => (

    <Layout
        pageTitle="Naxos - React Next JS App Landing Page Template"
        colorSchema="/assets/colors/blue.css"
    >
        <Loader />
        <Header nav="home" />
        <SingleImage />
        <Clients className="section-box bg-grey" />
        <Features />
        <Counters />
        <Team />
        <Support />
        <Footer />
        <ToTop />
    </Layout>

)

export default Index;