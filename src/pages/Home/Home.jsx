
import Banner from '../../components/Home/Banner/Banner';
import LatestProperties from '../../components/shared/LatestProperties/Latestproperties';
import LatestPropertiesForRent from '../../components/shared/LatestPropertiesForRent/LatestPropertiesForRent';

const Home = () => {

    return (
        <>
            <Banner
                title={"Find Your Dream Home"}
                desc={"We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients."}
            />
            <LatestProperties />
            <LatestPropertiesForRent />
        </>
    );
};

export default Home;