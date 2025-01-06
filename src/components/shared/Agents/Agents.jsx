

import AgentsCard from '../AgentsCard/AgentsCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const Agents = () => {

    const agents = [
        {
            _id: 1,
            displayName: 'Lily Bicharm',
            position: 'Realtor',
            photo: 'https://main.wpresidence.net/wp-content/uploads/2014/05/person3-500x328.webp',
            bio: 'Whether it is working with a first time homebuyer, a luxury home listing or a seasoned investor, Michael prides himself on his unparalleled service with an aptitude for problem solving – something essential for navigating clients through the challenges of today’s real estate market. My focus is always on serving my clients with honesty, integrity and discretion as a dependable and knowledgeable broker committed to exceptional results. I am a licensed real estate broker, an active member in local and national real estate industry organizations, a lover of architecture and an active member to such philanthropic causes.',
            contact: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                pinterest: '#',
                instagram: '#',
                youtube: '#',
                vimeo: '#',
                email: '#',
                phone: '#',
            }
        },
        {
            _id: 2,
            displayName: 'Samuel Diesel',
            position: 'Commercial Broker',
            photo: 'https://main.wpresidence.net/wp-content/uploads/2017/11/person2-500x328.jpg',
            bio: 'Whether it is working with a first time homebuyer, a luxury home listing or a seasoned investor, Michael prides himself on his unparalleled service with an aptitude for problem solving – something essential for navigating clients through the challenges of today’s real estate market. My focus is always on serving my clients with honesty, integrity and discretion as a dependable and knowledgeable broker committed to exceptional results. I am a licensed real estate broker, an active member in local and national real estate industry organizations, a lover of architecture and an active member to such philanthropic causes.',
            contact: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                pinterest: '#',
                instagram: '#',
                youtube: '#',
                vimeo: '#',
                email: '#',
                phone: '#',
            }
        },
        {
            _id: 3,
            displayName: 'Dennis Albo',
            position: 'Realtor',
            photo: 'https://main.wpresidence.net/wp-content/uploads/2014/05/person_sam_davies-500x328.webp',
            bio: 'Whether it is working with a first time homebuyer, a luxury home listing or a seasoned investor, Michael prides himself on his unparalleled service with an aptitude for problem solving – something essential for navigating clients through the challenges of today’s real estate market. My focus is always on serving my clients with honesty, integrity and discretion as a dependable and knowledgeable broker committed to exceptional results. I am a licensed real estate broker, an active member in local and national real estate industry organizations, a lover of architecture and an active member to such philanthropic causes.',
            contact: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                pinterest: '#',
                instagram: '#',
                youtube: '#',
                vimeo: '#',
                email: '#',
                phone: '#',
            }
        },
    ]

    return (
        <section className='section'>

            <div className='my-container'>
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Real Estate Agents'} />


                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12">
                    {
                        agents.map((agent) => <AgentsCard key={agent?._id} agent={agent} />)
                    }
                </div>
                {/* {
                    isLoading && <Spinner />
                } */}
            </div>

        </section>
    );
};

export default Agents;