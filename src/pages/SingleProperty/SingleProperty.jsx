import { useLoaderData } from "react-router-dom";
import Loader from "../../components/shared/Loader/Loader";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Link, Menu, MenuItem, Typography } from "@mui/material";
import { FaBed, FaBlackTie, FaBullseye, FaCar, FaCheckCircle, FaCircle, FaCircleNotch, FaDumbbell, FaEnvelope, FaExpand, FaFacebook, FaHeart, FaMapMarkerAlt, FaPrint, FaRegCalendar, FaShareAlt, FaTv, FaTwitter, FaUtensils } from "react-icons/fa";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './SingleProperty.css'
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";
import { FaDroplet } from "react-icons/fa6";


const SingleProperty = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const { data: property, isLoading } = useLoaderData()

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (isLoading) {
        return <Loader />
    }

    const updatedDate = moment(property?.updated_on || property?.available_from).format('MMMM DD, YYYY');


    const handleSwiper = (swiper) => {
        setThumbsSwiper(swiper);
    }

    return (
        <div className="mt-[125px] bg-[var(--secondary-bg)] pb-32">
            <div className="my-container flex justify-between items-end pb-5">
                <div>
                    <Breadcrumb page={'properties'} subPage={property?.title} />
                    <div className="flex gap-2 py-2">
                        <Link underline="none" href={'/'} color={'white.main'} fontSize={13} className='bg-[var(--btn-bg)] px-3 py-[2px] rounded hover:bg-[#1b6fbd] transition-colors capitalize'>
                            {property?.listed_in}
                        </Link>
                        <Link underline="none" href={'/'} color={'white.main'} fontSize={13} className='bg-[var(--btn-bg)] px-3 py-[2px] rounded hover:bg-[#1b6fbd] transition-colors capitalize'>
                            {property?.category}
                        </Link>
                    </div>
                    <h2 className="text-4xl font-semibold py-2">{property?.title}</h2>
                    {/* TODO: Make link dynamic */}
                    <Link href={'#'} display={'flex'} gap={'2px'} alignItems={'center'} gutterBottom underline='none'>
                        <FaMapMarkerAlt color='#5C727D' fontSize={13} />
                        <Typography component={'span'} className='flex justify-start items-center gap-1 text-black' variant='body2'>
                            {property?.address.address}, {property?.address.city}
                        </Typography>
                    </Link>
                </div>
                <div className="flex flex-col items-end">
                    <Typography gutterBottom variant="h6" fontSize={32} fontWeight={500} color='primary'>
                        $ {property?.price?.toLocaleString()}
                    </Typography>
                    <div className="flex gap-2 py-2">

                        {/* //TODO: make it dynamic */}
                        <Button sx={{ padding: '2px 12px', background: '#ffffff', boxShadow: '0 10px 31px 0 rgba(7,152,255,.09)', textTransform: 'capitalize', '&:hover': { background: '#fff' } }} color={'black'} size="small" className='flex items-center hover:text-[var(--btn-bg)] transition-colors' onClick={handleClick}>
                            <FaShareAlt fontSize={'12px'} className="mr-1" />
                            share
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{ minWidth: '100px' }}
                        >
                            <MenuItem onClick={handleClose} sx={{ fontSize: '14px' }}>
                                <FaFacebook className="mr-2" /> Facebook
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={{ fontSize: '14px' }}>
                                <FaTwitter className="mr-2" /> Twitter
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={{ fontSize: '14px' }}>
                                <FaEnvelope className="mr-2" /> Email
                            </MenuItem>
                        </Menu>
                        <Button sx={{ padding: '2px 12px', background: '#ffffff', boxShadow: '0 10px 31px 0 rgba(7,152,255,.09)', textTransform: 'capitalize', '&:hover': { background: '#fff' } }} color={'black'} size="small" className='flex items-center hover:text-[var(--btn-bg)] transition-colors'>
                            <FaHeart fontSize={'12px'} className="mr-1" />
                            Favorite
                        </Button>
                        <Button sx={{ padding: '2px 12px', background: '#ffffff', boxShadow: '0 10px 31px 0 rgba(7,152,255,.09)', textTransform: 'capitalize', '&:hover': { background: '#fff' } }} color={'black'} size="small" className='flex items-center hover:text-[var(--btn-bg)] transition-colors'>
                            <FaPrint fontSize={'12px'} className="mr-1" />
                            print
                        </Button>
                    </div>
                </div>
            </div>

            <div className="my-container grid grid-cols-11 justify-between gap-5">
                <div className="col-span-8 property-swiper grid grid-cols-1 gap-8">
                    <div>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                                alignItems: 'stretch'
                            }}
                            spaceBetween={10}
                            loop={true}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {
                                property?.photos?.map((photo, idx) => <SwiperSlide key={idx}>
                                    <img src={photo} alt="" className="rounded w-full h-[445px]" />
                                </SwiperSlide>)
                            }
                        </Swiper>
                        <div className="pt-2">
                            <Swiper
                                onClick={handleSwiper}
                                spaceBetween={10}
                                slidesPerView={5}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                {
                                    property?.photos?.map((photo, idx) => <SwiperSlide key={idx}>
                                        <img src={photo} alt="" className="rounded h-full cursor-pointer hover:opacity-60 transition-opacity" />
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="property-info">
                        <h3 className="info-title">
                            Overview
                        </h3>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col items-start gap-1">
                                <span className="info-text">Updated On:</span>
                                <span className="info-text">{updatedDate}</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaBed className="info-icon" />
                                <span className="info-text">{property?.bedrooms} Bedrooms</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaDroplet className="info-icon" />
                                <span className="info-text">{property?.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaCar className="info-icon" />
                                <span className="info-text">{property?.garages} Garages</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaExpand className="info-icon" />
                                <span className="info-text">{property?.property_size} ft<sup>2</sup></span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaRegCalendar className="info-icon" />
                                <span className="info-text">Year Built: {property?.built_year}</span>
                            </div>
                        </div>
                    </div>
                    <div className="property-info">
                        <h3 className="info-title">
                            Description
                        </h3>
                        <p className="text-[var(--text-color)] text-sm">
                            {property?.description}
                        </p>
                    </div>

                    {/* //TODO: complete documents part */}

                    {/* <div className="property-info">
                        <h3 className="info-title">
                            Documents
                        </h3>
                        <p className="text-[var(--text-color)] text-sm">
                            {property?.description}
                        </p>
                    </div> */}

                    <div className="property-info">
                        <h3 className="info-title">
                            Address
                        </h3>
                        <div className="grid grid-cols-3 justify-between gap-2">
                            <span className="text-sm font-light">
                                <span className="font-medium">Address: </span>
                                {property?.address?.address}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">City: </span>
                                {property?.address?.city}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Zip Code: </span>
                                {property?.address?.zip_code}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Country: </span>
                                {property?.address?.country}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Latitude: </span>
                                {property?.address?.latitude}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Longitude: </span>
                                {property?.address?.longitude}
                            </span>

                            {/* //TODO: make a map using latitute and longitude */}
                        </div>
                    </div>
                    <div className="property-info">
                        <h3 className="info-title">
                            Details
                        </h3>
                        <div className="grid grid-cols-3 justify-between gap-2">
                            <span className="text-sm font-light">
                                <span className="font-medium">Price: </span>
                                $ {property?.price.toLocaleString()}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Property Size: </span>
                                {property?.property_size} ft<sup>2</sup>
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Rooms: </span>
                                {property?.bedrooms}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Bedrooms: </span>
                                {property?.bedrooms}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Bathrooms: </span>
                                {property?.bathrooms}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Garages: </span>
                                {property?.garages}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Garage Size: </span>
                                {property?.garage_size} Cars
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Year Built: </span>
                                {property?.built_year}
                            </span>
                            <span className="text-sm font-light">
                                <span className="font-medium">Available from: </span>
                                {moment(property?.available_from).format('DD MMM, YYYY')}
                            </span>
                            <span className="text-sm font-light capitalize">
                                <span className="font-medium">Structure type: </span>
                                {property?.structure_type}
                            </span>
                            <span className="text-sm font-light capitalize">
                                <span className="font-medium">Floors: </span>
                                {property?.floors}
                            </span>
                        </div>
                    </div>
                    <div className="property-info">
                        <h3 className="info-title">
                            Features
                        </h3>
                        <div className="flex flex-col items-stretch gap-8">
                            <div>
                                <h4 className="feature-title pb-3">
                                    Interior Details
                                </h4>
                                <div className="features-container">
                                    <ul className="features-list">
                                        {
                                            property?.features?.interior?.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-1"><FaBullseye color="#0073e1" fontSize={10} />{feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="feature-title pb-3">
                                    Outdoor Details
                                </h4>
                                <div className="features-container">
                                    <ul className="features-list">
                                        {
                                            property?.features?.outdoor?.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-1"><FaBullseye color="#0073e1" fontSize={10} />{feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="feature-title pb-3">
                                    Utilities
                                </h4>
                                <div className="features-container">
                                    <ul className="features-list">
                                        {
                                            property?.features?.utilities?.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-1"><FaBullseye color="#0073e1" fontSize={10} />{feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="feature-title pb-3">
                                    Other Details
                                </h4>
                                <div className="features-container">
                                    <ul className="features-list">
                                        {
                                            property?.features?.others?.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-1"><FaBullseye color="#0073e1" fontSize={10} />{feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="property-info">
                        <h3 className="info-title">
                            Floor Plans
                        </h3>
                        <div className="flex flex-col gap-2 floor-plans">
                            {
                                property?.floor_plans?.map((plan, idx) => (
                                    <Accordion key={idx} sx={{ boxShadow: 'none' }} defaultExpanded={idx === 0}>
                                        <AccordionSummary
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={{ background: '#fafcff' }}
                                        >
                                            <div className="flex justify-between items-center w-full plan">
                                                <h4 className="plan-title">{plan?.title}</h4>
                                                <div className="gap-10 flex items-center">
                                                    <span className="text-sm font-light">
                                                        <span className="font-medium">Price: </span>
                                                        {plan?.price}
                                                    </span>
                                                    <span className="text-sm font-light">
                                                        <span className="font-medium">Baths: </span>
                                                        {plan?.bathrooms}
                                                    </span>
                                                    <span className="text-sm font-light">
                                                        <span className="font-medium">Rooms: </span>
                                                        {plan?.rooms}
                                                    </span>
                                                    <span className="text-sm font-light">
                                                        <span className="font-medium">Size: </span>
                                                        {plan?.size}
                                                    </span>
                                                </div>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className="py-5">
                                                <img className="w-full" src={plan?.photo} alt="" />
                                                <p className="text-[var(--text-color)] text-sm mt-5">{plan?.description}</p>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default SingleProperty;