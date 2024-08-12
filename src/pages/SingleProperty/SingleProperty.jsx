import { useLoaderData } from "react-router-dom";
import Loader from "../../components/shared/Loader/Loader";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { Button, Link, Menu, MenuItem, Typography } from "@mui/material";
import { FaEnvelope, FaFacebook, FaFacebookF, FaHeart, FaMapMarkerAlt, FaPrint, FaShare, FaShareAlt, FaTwitter } from "react-icons/fa";
import { useState } from "react";


const SingleProperty = () => {

    const { data: property, isLoading } = useLoaderData()
    const [anchorEl, setAnchorEl] = useState(null);

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

    return (
        <div className="mt-[125px] bg-[var(--secondary-bg)]">
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
        </div>
    );
};

export default SingleProperty;