import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropertyCard from '../PropertyCard/PropertyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './LatestPropertiesForRent.css'

const LatestPropertiesForRent = () => {

    const [latestPropertiesForRent, setLatestPropertiesForRent] = useState([])

    useEffect(() => {
        fetch('https://my-home-server.vercel.app/latestProperties')
            .then(res => res.json())
            .then(data => setLatestPropertiesForRent(data))
    }, [])

    return (
        <section className='section'>

            <div className='w-full xl:w-[1220px] mx-auto px-5'>
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties for Rent'} />


                <div className="mt-12 latestProperties">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                        autoplay={{ delay: 2500, disableOnInteraction: true }}
                    >
                        {
                            latestPropertiesForRent?.map((property, idx) => <SwiperSlide key={idx}><PropertyCard key={property._id} property={property} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>

        </section>
    );
};

export default LatestPropertiesForRent;