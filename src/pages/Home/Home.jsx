
import Banner from '../../components/Home/Banner/Banner';
import PropertiesByArea from '../../components/Home/PropertiesByArea/PropertiesByArea';
import Agents from '../../components/shared/Agents/Agents';
import LatestProperties from '../../components/shared/LatestProperties/Latestproperties';
import LatestPropertiesForRent from '../../components/shared/LatestPropertiesForRent/LatestPropertiesForRent';
import Login from '../../components/shared/Login/Login';
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
            <LatestPropertiesForRent />
            <Agents />
            <Login />
        </>
    );
};

export default Home;