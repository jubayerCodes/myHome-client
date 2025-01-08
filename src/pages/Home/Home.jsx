
import Banner from '../../components/Home/Banner/Banner';
import PropertiesByArea from '../../components/Home/PropertiesByArea/PropertiesByArea';
import Agents from '../../components/shared/Agents/Agents';
import ContactSection from '../../components/shared/ContactSection/ContactSection';
import FeaturedProperty from '../../components/shared/FeaturedProperty/FeaturedProperty';
import LatestProperties from '../../components/shared/LatestProperties/Latestproperties';
import LatestPropertiesForRent from '../../components/shared/LatestPropertiesForRent/LatestPropertiesForRent';
import PropertiesByCategories from '../../components/shared/PropertiesByCategories/PropertiesByCategories';
import Testimonials from '../../components/shared/Testimonials/Testimonials';
import WhyChooseUs from '../../components/shared/WhyChooseUs/WhyChooseUs';

const Home = () => {

    return (
        <>
            <Banner
                title={"Where Dreams Find Home"}
                desc={"Find your dream home today with expert guidance, unbeatable deals, and personalized real estate solutions."}
            />
            <PropertiesByArea />
            <WhyChooseUs />
            <LatestProperties />
            <PropertiesByCategories secondaryBg={true} />
            <LatestPropertiesForRent />
            <FeaturedProperty />
            <Agents />
            <Testimonials secondaryBg={true} />
            <ContactSection />
        </>
    );
};

export default Home;