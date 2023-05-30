import "./Home.scss";
import Slider from './../../components/Normal/Slider/Slider';
import AboutUs from './../../components/HomePageSections/AboutUs/AboutUs';
import EducationArea from './../../components/HomePageSections/EducationArea/EducationArea';
import Why from './../../components/HomePageSections/Why/Why';
import Graduates from './../../components/HomePageSections/Graduates/Graduates';
import Teachers from './../../components/HomePageSections/Teachers/Teachers';
import JedRecords from './../../components/HomePageSections/JedRecords/JedRecords';
import Questions from './../../components/HomePageSections/Questions/Questions';
import PayTypes from './../../components/HomePageSections/PayTypes/PayTypes';
import BlogAndMedia from './../../components/HomePageSections/BlogAndMedia/BlogAndMedia';
import FreeConsulation from "../../components/HomePageSections/FreeConsulation/FreeConsulation";
import PresentsAndCampaign from "../../components/HomePageSections/PresentsAndCampaign/PresentsAndCampaign";

const Home = () => {
    return (
        <main>
            <Slider />
            <AboutUs />
            <EducationArea />
            <Why />
            <FreeConsulation />
            <Graduates />
            <Teachers />
            <JedRecords />
            <Questions />
            <PayTypes />
            <BlogAndMedia />
            <PresentsAndCampaign />
        </main>

    )
}

export default Home