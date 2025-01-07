
import { Link } from '@mui/material';
import { FaFacebookF, FaGoogle, FaLaptop, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import './Footer.css'
import { useGetPropertiesFilterOptionsQuery } from '../../Utilities/Redux/features/api/propertiesApi';
import { useGetLatestPropertiesQuery } from '../../Utilities/Redux/features/api/latestPropertiesApi';

const Footer = () => {

    const { data } = useGetPropertiesFilterOptionsQuery()
    const { data: latestProperties } = useGetLatestPropertiesQuery()

    const categories = data?.categories

    return (
        <footer className='bg-[#001a33] py-12 xl:py-24'>
            <div className="my-container">
                <div className='grid grid-cols-2 xl:grid-cols-4 justify-between items-start gap-8 xl:gap-10'>
                    <div className='col-span-2'>
                        <h3 className='text-white font-semibold'>Contact us</h3>
                        <div className='flex flex-col gap-3 mt-5'>
                            <span className='text-[#bbbbbb] flex justify-start items-start text-sm gap-3 leading-8'>
                                <FaMapMarkerAlt style={{ fontSize: '16px' }} className='mt-2' /> 3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302
                            </span>
                            <span className='text-[#bbbbbb] flex justify-start items-start text-sm gap-3'>
                                <FaPhone className='mt-1' /> +880 1562470000
                            </span>
                            <span className='text-[#bbbbbb] flex justify-start items-start text-sm gap-3'>
                                <FaRegEnvelope className='mt-1' /> contact@gmail.com
                            </span>
                            <span className='text-[#bbbbbb] flex justify-start items-start text-sm gap-3'>
                                <FaLaptop className='mt-1' /> <Link color={"white"} underline='none' href={'/'}>My Home</Link>
                            </span>
                            <div className='flex gap-3'>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaLinkedinIn /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaTwitter /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaGoogle /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaFacebookF /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaLinkedinIn /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaTwitter /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaGoogle /></button>
                                </Link>
                                <Link href={'/'}>
                                    <button className='text-white bg-[#002547] p-3 rounded-sm hover:bg-[#0073e1] duration-200'><FaFacebookF /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white font-semibold'>Categories</h3>
                        <div className='mt-5'>
                            <ul className='text-white flex flex-col gap-2' >
                                {
                                    categories?.map((cat, idx) => <li key={idx}>
                                        <Link color={'#bbb'} fontSize={'14px'} underline='none' href={`/properties?category=${cat}`} className='capitalize hover:text-[#0073e1]'>
                                            {cat}
                                        </Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white font-semibold'>Latest Properties</h3>
                        <div className='footer-latest-properties flex flex-col gap-2 mt-5'>
                            {
                                latestProperties?.slice(0, 3)?.map((property) => (
                                    <div className='flex justify-start items-center gap-3' key={property?._id}>
                                        <div>
                                            <Link href={'/'}>
                                                <img src={property?.photos[0]} alt={property?.title} className='rounded-md' />
                                            </Link>
                                        </div>
                                        <div>
                                            <Link underline='none' href={`/properties/${property?._id}`}>
                                                <h3 className='text-sm text-[#bbbbbb] hover:text-[#0073e1] transition-all font-semibold'>
                                                    {property?.title}
                                                </h3>
                                            </Link>
                                            <h6 className='text-white mt-2 text-xs font-semibold'>
                                                $ {property?.price}
                                            </h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <span className='text-[#bbbbbb] mt-10 block text-center xl:text-start'>
                    Design & Developed By <Link fontWeight={'bold'} color={'text'} underline='none' href='https://jubayer-hossain-53fbf.web.app/' className=' hover:no-underline'>Jubayer Hossain</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;