
import SectionTitle from '../SectionTitle/SectionTitle';
import PropertyCard from '../PropertyCard/PropertyCard';
import { useGetLatestPropertiesQuery } from '../../../Utilities/Redux/features/api/latestPropertiesApi';
import Loader from '../Loader/Loader';
import Spinner from '../Spinner/Spinner';
import { Link } from '@mui/material';

const LatestProperties = () => {

    const { data: latestProperties, isLoading } = useGetLatestPropertiesQuery()

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle description={'Discover the newest listings! Explore dream homes and modern properties tailored to your lifestyle.'} heading={'Latest Properties'} />


                <div className='flex flex-col items-center gap-5 xl:gap-10'>
                    <div className='cards-container'>
                        {
                            latestProperties?.map(property => <PropertyCard key={property._id} property={property} />)
                        }
                    </div>
                    <Link className={`${isLoading && 'hidden'}`} href='/properties'>
                        <button className='primary-btn'>More Properties</button>
                    </Link>
                </div>
                {
                    isLoading && <Spinner />
                }
            </div>
        </section>
    );
};

export default LatestProperties;