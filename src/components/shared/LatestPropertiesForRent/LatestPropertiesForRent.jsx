import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropertyCard from '../PropertyCard/PropertyCard';
import PropertyCarousel from '../PropertyCarousel/PropertyCarousel';

const LatestPropertiesForRent = () => {

    const [latestPropertiesForRent, setLatestPropertiesForRent] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/latestProperties')
            .then(res => res.json())
            .then(data => setLatestPropertiesForRent(data))
    }, [])

    return (
        <section className='section'>

            <div className='my-container'>
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties for Rent'} />


                <div className="mt-12">
                    <PropertyCarousel>
                        {
                            latestPropertiesForRent?.map(property => <PropertyCard key={property._id} property={property} />)
                        }
                    </PropertyCarousel>
                </div>
            </div>

        </section>
    );
};

export default LatestPropertiesForRent;