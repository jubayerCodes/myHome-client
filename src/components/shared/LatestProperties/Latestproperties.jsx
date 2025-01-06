
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
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties'} />


                <div className='flex flex-col items-center gap-10'>
                    <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
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