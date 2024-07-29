
import AgentsCard from '../AgentsCard/AgentsCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const Agents = () => {

    const agents = [1, 2, 3]

    return (
        <section className='section'>

            <div className='my-container'>
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Real Estate Agents'} />


                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12">
                    {
                        agents.map((agent) => <AgentsCard key={agent} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Agents;