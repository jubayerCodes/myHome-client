import { useLoaderData } from "react-router-dom";
import Loader from "../../components/shared/Loader/Loader";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { Accordion, AccordionDetails, AccordionSummary, Button, Link, Menu, MenuItem, Typography } from "@mui/material";
import { FaBed, FaBullseye, FaCalendarDay, FaCar, FaEnvelope, FaExpand, FaFacebook, FaFacebookF, FaGlobe, FaHeart, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaPhone, FaPhoneAlt, FaPinterest, FaPrint, FaRegCalendar, FaShareAlt, FaSkype, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './SingleProperty.css'
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";
import { FaDroplet } from "react-icons/fa6";
import SimilarProperties from "../../components/shared/SimilarProperties/SimilarProperties";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useForm } from "react-hook-form";


const SingleProperty = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [scheduleOpen, setScheduleOpen] = useState(false)
    const [date, setDate] = useState(null)

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const times = ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00']

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

    const handleEmail = ({ name, email, phone, message, time }) => {

        const details = { name, email, phone, message }

        if (date) {
            details.date = date.format('DD/MM/YYYY')
        }

        if (time !== '') {
            details.time = time
        }


        // TODO: add email feature

        reset({ name: '', email: '', phone: '', message: `I'm interested in [${property?.title}]`, time: '' })
        setDate(null)

    }


    // TODO: Make it dynamic

    const agent = {
        displayName: 'Lily Bicharm',
        position: 'Realtor',
        bio: 'Whether it is working with a first time homebuyer, a luxury home listing or a seasoned investor, Michael prides himself on his unparalleled service with an aptitude for problem solving – something essential for navigating clients through the challenges of today’s real estate market. My focus is always on serving my clients with honesty, integrity and discretion as a dependable and knowledgeable broker committed to exceptional results. I am a licensed real estate broker, an active member in local and national real estate industry organizations, a lover of architecture and an active member to such philanthropic causes.',
        contact: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
            pinterest: '#',
            instagram: '#',
            youtube: '#',
            vimeo: '#',
            email: 'example@gamil.com',
            phone: '+880 176-227-8148',
            mobile: '+880 180-055-5000',
            whatsApp: '#',
            skype: 'johnc_demo',
            website: 'paris.wpresidence.net/'
        },
        companyName: 'Keller Williams'
    }

    return (
        <div className="mt-[125px] bg-[var(--secondary-bg)] pb-32 single-property">
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

                    {/* //TODO: make it all dynamic */}
                    <div className="property-info">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="relative">
                                <img src="https://main.wpresidence.net/wp-content/uploads/2017/11/person-500x328.webp" alt="" className="rounded" />

                                <div className="flex justify-center gap-5 w-10/12 mx-auto bg-white rounded shadow py-3 -mt-11 absolute left-0 right-0">
                                    <Link underline="none" className="agent-link" href={agent.contact.facebook}>
                                        <FaFacebookF />
                                    </Link>
                                    <Link underline="none" className="agent-link" href={agent.contact.twitter}>
                                        <FaTwitter />
                                    </Link>
                                    <Link underline="none" className="agent-link" href={agent.contact.linkedin}>
                                        <FaLinkedin />
                                    </Link>
                                    <Link underline="none" className="agent-link" href={agent.contact.pinterest}>
                                        <FaPinterest />
                                    </Link>
                                    <Link underline="none" className="agent-link" href={agent.contact.instagram}>
                                        <FaInstagram />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3 className="text-xl font-medium">{agent?.displayName}</h3>
                                    <span className="text-[var(--text-color)] text-sm font-light">{agent?.position}</span>
                                </div>
                                <div className="text-sm font-light my-4 flex flex-col gap-2">
                                    <Link color={'text.main'} underline="none" href={`tel: ${agent?.contact?.phone}`} className="flex items-center gap-1 transition-colors hover:text-[var(--btn-bg)]"><FaPhone fontSize={12} className="mr-2" />{agent?.contact?.phone}</Link>

                                    <Link color={'text.main'} underline="none" href={`tel: ${agent?.contact?.phone}`} className="flex items-center gap-1 transition-colors hover:text-[var(--btn-bg)]"><FaMobileAlt fontSize={12} className="mr-2" />{agent?.contact?.mobile}</Link>

                                    <Link color={'text.main'} underline="none" href={`tel: ${agent?.contact?.phone}`} className="flex items-center gap-1 transition-colors hover:text-[var(--btn-bg)]"><FaEnvelope fontSize={12} className="mr-2" />{agent?.contact?.email}</Link>

                                    <Link color={'text.main'} underline="none" href={`tel: ${agent?.contact?.phone}`} className="flex items-center gap-1 transition-colors hover:text-[var(--btn-bg)]"><FaSkype fontSize={12} className="mr-2" />{agent?.contact?.skype}</Link>

                                    <Link color={'text.main'} underline="none" href={`tel: ${agent?.contact?.phone}`} className="flex items-center gap-1 transition-colors hover:text-[var(--btn-bg)]"><FaGlobe fontSize={12} className="mr-2" />{agent?.contact?.website}</Link>
                                </div>
                                <span className="text-sm text-[var(--text-color)] font-light">
                                    <span className="font-medium">Member of:</span> {agent?.companyName}
                                </span>
                            </div>
                        </div>
                    </div>
                    <SimilarProperties type={property?.listed_in} category={property?.category} id={property?._id} />
                </div>

                {/* Sidebar */}
                <aside className="col-span-3 p-8 sticky top-[110px] h-fit sidebar">
                    <div className="flex items-start justify-start gap-4">
                        <img src="https://main.wpresidence.net/wp-content/uploads/2017/11/person-500x328.webp" alt="" className="rounded w-[80px]" />
                        <div>
                            <h3 className="text-lg font-medium">{agent?.displayName}</h3>
                            <span className="text-[var(--text-color)] text-sm font-light">{agent?.position}</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Button onClick={() => setScheduleOpen(!scheduleOpen)} size="small" color="white" sx={{ width: '100%', background: '#69c17dd9', padding: '2px 12px', fontSize: '12px', textTransform: 'capitalize', '&:hover': { bgcolor: '#69c109' } }} className='rounded-sm'>
                            Schedule a showing?
                        </Button>
                        <form onSubmit={handleSubmit(handleEmail)} className="agent-contact-form mt-3">
                            <div className={` flex-col justify-start items-stretch gap-3 transition-all ${scheduleOpen ? 'flex' : 'hidden'}`} >
                                <MobileDatePicker
                                    onChange={(newDate) => setDate(newDate)}
                                    slots={{ openPickerIcon: FaCalendarDay }}
                                    slotProps={{ textField: { placeholder: 'Day' } }}
                                    value={date}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            border: '1px solid #e7e7e7',
                                            borderRadius: '4px',
                                            fontSize: '13px',
                                            '&.Mui-focused': {
                                                backgroundColor: '#efefef',
                                            },
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiInputBase-input': {
                                            padding: '10px 15px',
                                        },
                                    }}
                                />
                                <select {...register('time')} name="time" id="time-field" className="input font-light" style={{ padding: '10px 10px' }}>
                                    <option value=''>Time</option>
                                    {
                                        times?.map((time, idx) => <option key={idx} value={time}>{time}</option>)
                                    }
                                </select>
                            </div>
                            <div className="mt-3 grid grid-cols-1 gap-3 items-center justify-between">
                                <input id="name-field" name="name" type="text" className="input" placeholder="Your Name" {...register('name', { required: true })} required />

                                <input id="email-field" name="email" type="email" className="input" placeholder="Your Email" {...register('email', { required: true })} required />

                                <input id="phone-field" name="phone" type="tel" className="input" placeholder="Your Phone" {...register('phone', { required: true })} required />
                            </div>
                            <textarea name="message" id="message-field" defaultValue={`I'm interested in [${property?.title}]`} className="input w-full mt-3" rows={8} required {...register('message', { required: true })}></textarea>

                            <div className="mt-2 flex flex-col gap-3">
                                <input type="submit" className="primary-btn" value={'Send Email'} />
                                <div className="grid grid-cols-2 gap-2">

                                    <button className="secondary-btn flex justify-center items-center gap-1"><FaPhoneAlt fontSize={12} /> Call</button>

                                    <button style={{ paddingLeft: '0', paddingRight: '0' }} className="secondary-btn flex justify-center items-center gap-1"><FaWhatsapp fontSize={13} />WhatsApp</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default SingleProperty;