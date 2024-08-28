
import Banner from '../../components/Home/Banner/Banner';
import PropertiesByArea from '../../components/Home/PropertiesByArea/PropertiesByArea';
import Agents from '../../components/shared/Agents/Agents';
import FeaturedProperties from '../../components/shared/FeaturedProperties/FeaturedProperties';
import LatestProperties from '../../components/shared/LatestProperties/Latestproperties';
import LatestPropertiesForRent from '../../components/shared/LatestPropertiesForRent/LatestPropertiesForRent';
import PropertiesByCategories from '../../components/shared/PropertiesByCategories/PropertiesByCategories';
import Testimonials from '../../components/shared/Testimonials/Testimonials';
import WhyChooseUs from '../../components/shared/WhyChooseUs/WhyChooseUs';

const Home = () => {

    return (
        <>
            <Banner
                title={"Find Your Dream Home"}
                desc={"We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients."}
            />
            <PropertiesByArea />
            <WhyChooseUs />
            <LatestProperties />
            <PropertiesByCategories secondaryBg={true} />
            <LatestPropertiesForRent />
            <FeaturedProperties secondaryBg={true} />
            <Agents />
            <Testimonials secondaryBg={true} />
        </>
    );
};

export default Home;