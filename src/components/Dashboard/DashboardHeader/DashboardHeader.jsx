import React from 'react';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Drawer, Stack } from '@mui/material';
import { FaBars, FaFacebookF, FaFoursquare, FaHeart, FaInstagram, FaLinkedinIn, FaPinterestP, FaRegEnvelope, FaTimes, FaTwitter, FaVimeoV, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from '../../../assets/images/logo-agent-40.png'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { logOut } from '../../../Utilities/Redux/features/authSlice/authSlice';
import userImgRound from '../../../assets/images/default-user_1.png'

const DashboardHeader = () => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [scrolled, setScrolled] = useState(0)


    useEffect(() => {

        let scrolledY = window.scrollY
        setScrolled(scrolledY)

        window.addEventListener('scroll', () => {
            scrolledY = window.scrollY
            setScrolled(scrolledY)
        })
    }, [])

    // TODO: Use it

    const toggleLeftDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        // setLeftDrawer(open);
    };

    const toggleRightDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        // setRightDrawer(open);
    };


    const menu = (
        <>
            <li>
                <ActiveLink to={'/'}>
                    Home
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to={'/properties'}>
                    Properties
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to={'/contact'}>
                    Contact Us
                </ActiveLink>
            </li>
            <li className='xl:hidden'>
                <ActiveLink to={'/favorites'}>
                    Favorites
                </ActiveLink>
            </li>
        </>
    )

    return (
        <>
            <header className={`${scrolled ? 'xl:top-[-42px]' : ''} w-full duration-200 header sticky xl:-mb-[126px] z-[1300] top-0 left-0 bg-[#001a33]`}>
                <div>
                    <div className={`border-b border-[#ffffff34]`}>
                        <div className={` px-10 header-top hidden xl:flex justify-between items-center `}>
                            <div>
                                <ButtonGroup variant="text" aria-label="text button group" className='header-btn-grp rounded-none'>
                                    <Button color='white'>
                                        <Link href={'#'}><FaFacebookF /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaTwitter /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaLinkedinIn /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaPinterestP /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaYoutube /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaVimeoV /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaInstagram /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaFoursquare /></Link>
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <div>
                                <ButtonGroup variant="text" aria-label="text button group" className='header-btn-grp rounded-none'>
                                    <Button className='flex gap-2 justify-between items-center' color='white'>
                                        <FaRegEnvelope /> <span className='lowercase'>contact@gmail.com</span>
                                    </Button>
                                    <Button className='flex gap-2 justify-between items-center' color='white'>
                                        <FaWhatsapp /> <span className='lowercase'>+1 408 167 1234</span>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow'>
                        <div className={`px-10 header-bottom py-5 grid grid-cols-12 justify-between items-center`}>
                            <div className='col-span-3'>
                                <Link to={'/'} className='hidden xl:block'>
                                    <img src={logo} alt='' width={120} height={0} />
                                </Link>
                                <FaBars onClick={toggleLeftDrawer(true)} className={'text-black text-[30px] cursor-pointer xl:hidden'} />
                            </div>
                            <div className='col-span-6'>
                                <Link to={'/'} className='xl:hidden flex justify-center items-center'>
                                    <img className='hidden xl:block' src={logo} alt='' width={120} height={0} />
                                </Link>
                                <ul className='text-black header-ul hidden xl:flex justify-center items-center gap-2'>
                                    {menu}
                                </ul>
                            </div>
                            <div className='col-span-3 flex justify-end items-center gap-0'>

                                <Stack spacing={2} direction="row" alignItems='center'>
                                    {
                                        user?.photoURL ?
                                            <img onClick={() => dispatch(logOut())} src={user.photoURL} alt='profile pic' className={`rounded-full cursor-pointer w-[40px] h-[40px]`} />
                                            :
                                            <img onClick={() => dispatch(logOut())} src={userImgRound} alt='profile pic' className={`rounded-full cursor-pointer w-[40px] h-[40px]`} />
                                    }
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>

            </header >
        </>
    );
};

export default DashboardHeader;