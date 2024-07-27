
import Banner from '../../components/Home/Banner/Banner';
import LatestProperties from '../../components/shared/LatestProperties/Latestproperties';

const Home = () => {
    return (
        <>
            <Banner
                title={"Find Your Dream Home"}
                desc={"We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients."}
            />
            <LatestProperties />
        </>
    );
};

export default Home;