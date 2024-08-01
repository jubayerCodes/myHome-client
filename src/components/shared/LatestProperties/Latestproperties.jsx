import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropertyCard from '../PropertyCard/PropertyCard';

const LatestProperties = () => {

    const [latestProperties, setLatestProperties] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/properties')
            .then(res => res.json())
            .then(data => setLatestProperties(data))
    }, [])

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties'} />


                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                    {
                        latestProperties?.map(property => <PropertyCard key={property._id} property={property} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestProperties;