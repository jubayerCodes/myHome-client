
import bannerBg from '../../../assets/images/wpresidece-header.jpg'

const Banner = ({ title, desc }) => {

    return (
        <section style={{ backgroundImage: `url(${bannerBg})` }} className='w-full h-[500px] xl:h-[700px] bg-center'>
            <div className='w-full h-full bg-gradient-to-b from-[#053a63b8] to-[#01111Bb8]' >
                <div className='my-container flex justify-center items-center flex-col h-full  xl:pt-0'>
                    <h1 className='text-[30px] xl:text-[50px] font-semibold text-white mb-5 px-14 xl:px-0 text-center'>
                        {title}
                    </h1>
                    <p className='text-white text-[17] p-0 px-5 xl:px-60 text-center'>
                        {desc}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;