
import { Link } from '@mui/material';
import { FaFacebookF, FaGoogle, FaLaptop, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {

    // const { properties } = useProperties()

    // const { latestProperties } = useLatestProperties()

    // const categories = Array.from(new Set(properties?.map((property) => property.category)));

    // console.log(categories);

    return (
        <footer className='bg-[#001a33] py-24'>
            <div className="my-container">
                <div className='grid grid-cols-4 justify-between items-start gap-12'>
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
                            <ul className='text-white flex flex-col gap-3' >
                                {
                                    // categories?.map((cat, idx) => <li key={idx}>
                                    //     {/* TODO: make links dynamic */}
                                    //     <Link href={'/'} className='capitalize hover:text-[#0073e1]'>
                                    //         {cat}
                                    //     </Link>
                                    // </li>)
                                }

                                <li>
                                    <Link color={'#bbb'} fontSize={'14px'} underline='none' href={'/'} className='capitalize hover:text-[#0073e1]'>
                                        Apartments (17)
                                    </Link>
                                </li>
                                <li>
                                    <Link color={'#bbb'} fontSize={'14px'} underline='none' href={'/'} className='capitalize hover:text-[#0073e1]'>
                                        Apartments (17)
                                    </Link>
                                </li>
                                <li>
                                    <Link color={'#bbb'} fontSize={'14px'} underline='none' href={'/'} className='capitalize hover:text-[#0073e1]'>
                                        Apartments (17)
                                    </Link>
                                </li>
                                <li>
                                    <Link color={'#bbb'} fontSize={'14px'} underline='none' href={'/'} className='capitalize hover:text-[#0073e1]'>
                                        Apartments (17)
                                    </Link>
                                </li>
                                <li>
                                    <Link color={'#bbb'} fontSize={'14px'} underline='none' href={'/'} className='capitalize hover:text-[#0073e1]'>
                                        Apartments (17)
                                    </Link>
                                </li>
                                <li>
                                    <Link color={'#bbb'} fontSize={'14px'} underline='none' href={'/'} className='capitalize hover:text-[#0073e1]'>
                                        Apartments (17)
                                    </Link>
                                </li>



                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white font-semibold'>Latest Properties</h3>
                        <div className='footer-latest-properties flex flex-col gap-2 mt-5'>
                            {
                                // latestProperties.slice(0, 3).map(property => (
                                //     <div key={property._id} className='flex justify-start gap-3'>
                                //         <div>

                                //             <Link href={'/'}>
                                //                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                //                 <img src={property.photos[0]} alt='' className='w-[102px] h-[68px] rounded-md' />
                                //             </Link>
                                //         </div>
                                //         <div>
                                //             <Link href={'/'}>
                                //                 <h3 className='text-white text-lg'>{property.title}</h3>
                                //             </Link>
                                //             <h6 className='text-white mt-2'>$ {property.price.toLocaleString()}</h6>
                                //         </div>
                                //     </div>
                                // ))
                            }



                            <div className='flex justify-start items-center gap-3'>
                                <div>

                                    <Link href={'/'}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={'https://main.wpresidence.net/wp-content/uploads/2017/01/9-105x70.webp'} alt='' className='rounded-md' />
                                    </Link>
                                </div>
                                <div>
                                    <Link underline='none' href={'/'}>
                                        <h3 className='text-sm text-[#bbbbbb] hover:text-[#0073e1] transition-all font-semibold'>Luxury House in Greenville</h3>
                                    </Link>
                                    <h6 className='text-white mt-2 text-xs font-semibold'>$ 999 / Month</h6>
                                </div>
                            </div>

                            <div className='flex justify-start items-center gap-3'>
                                <div>

                                    <Link href={'/'}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={'https://main.wpresidence.net/wp-content/uploads/2017/01/9-105x70.webp'} alt='' className='rounded-md' />
                                    </Link>
                                </div>
                                <div>
                                    <Link underline='none' href={'/'}>
                                        <h3 className='text-sm text-[#bbbbbb] hover:text-[#0073e1] transition-all font-semibold'>Luxury House in Greenville</h3>
                                    </Link>
                                    <h6 className='text-white mt-2 text-xs font-semibold'>$ 999 / Month</h6>
                                </div>
                            </div>

                            <div className='flex justify-start items-center gap-3'>
                                <div>

                                    <Link href={'/'}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={'https://main.wpresidence.net/wp-content/uploads/2017/01/9-105x70.webp'} alt='' className='rounded-md' />
                                    </Link>
                                </div>
                                <div>
                                    <Link underline='none' href={'/'}>
                                        <h3 className='text-sm text-[#bbbbbb] hover:text-[#0073e1] transition-all font-semibold'>Luxury House in Greenville</h3>
                                    </Link>
                                    <h6 className='text-white mt-2 text-xs font-semibold'>$ 999 / Month</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <span className='text-[#bbbbbb] mt-16 block'>
                    Copyright Jubayer Hossain. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;