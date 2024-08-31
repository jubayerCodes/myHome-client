import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { FaChartBar, FaPrint, FaRegCaretSquareRight, FaRegEnvelope, FaRegHeart, FaRegUser } from 'react-icons/fa';
import DashboardHeader from '../../components/Dashboard/DashboardHeader/DashboardHeader';
import './DashboardLayout.css'
import { Outlet } from 'react-router-dom';
import DashboardActiveLnk from '../../components/Dashboard/DashboardActiveLink/DashboardActiveLnk';
import { useSelector } from 'react-redux';
import Loader from '../../components/shared/Loader/Loader';
import { HiOutlineHome, HiOutlinePlus } from 'react-icons/hi';
import { Typography } from '@mui/material';

const drawerWidth = 260

const DashboardLayout = () => {

    const { role, user } = useSelector(state => state.auth)

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Box component={'div'} sx={{ marginTop: '150px' }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <img src={user?.photoURL} alt={user?.displayName} className='rounded-full w-[50px]' />
                <h6 className='text-[var(--text-color)] font-semibold mt-2'>{user?.displayName}</h6>
            </Box>
            <List sx={{ paddingTop: '30px', justifyContent: 'start' }}>

                {
                    role === 'user' && (
                        <>
                            <ListItem sx={{ paddingX: '20px' }} disablePadding>
                                <DashboardActiveLnk href={'user-profile'}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <FaRegUser />
                                    </ListItemIcon>
                                    <ListItemText primary={'My Profile'} />
                                </DashboardActiveLnk>
                            </ListItem>
                        </>
                    )
                }

                {
                    role === 'agent' && (
                        <>
                            <ListItem sx={{ paddingX: '20px' }} disablePadding>
                                <DashboardActiveLnk href={'agent-profile'}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <FaRegUser />
                                    </ListItemIcon>
                                    <ListItemText primary={'My Profile'} />
                                </DashboardActiveLnk>
                            </ListItem>

                            <ListItem sx={{ paddingX: '20px' }} disablePadding>
                                <DashboardActiveLnk href={'overview'}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <FaChartBar />
                                    </ListItemIcon>
                                    <ListItemText primary={'overview'} />
                                </DashboardActiveLnk>
                            </ListItem>

                            <ListItem sx={{ paddingX: '20px' }} disablePadding>
                                <DashboardActiveLnk href={'my-properties'}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <HiOutlineHome />
                                    </ListItemIcon>
                                    <ListItemText primary={'My Properties List'} />
                                </DashboardActiveLnk>
                            </ListItem>

                            <ListItem sx={{ paddingX: '20px' }} disablePadding>
                                <DashboardActiveLnk href={'add-property'}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <HiOutlinePlus />
                                    </ListItemIcon>
                                    <ListItemText primary={'Add New Property'} />
                                </DashboardActiveLnk>
                            </ListItem>
                        </>
                    )
                }

                <ListItem sx={{ paddingX: '20px' }} disablePadding>
                    <DashboardActiveLnk href={'favorites'}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <FaRegHeart />
                        </ListItemIcon>
                        <ListItemText primary={'favorites'} />
                    </DashboardActiveLnk>
                </ListItem>

                {
                    role === 'user' && <>
                        <ListItem sx={{ paddingX: '20px' }} disablePadding>
                            <DashboardActiveLnk href={'user-invoices'}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FaPrint />
                                </ListItemIcon>
                                <ListItemText primary={'my invoices'} />
                            </DashboardActiveLnk>
                        </ListItem>
                    </>
                }

                {
                    role === 'agent' && <>
                        <ListItem sx={{ paddingX: '20px' }} disablePadding>
                            <DashboardActiveLnk href={'agent-invoices'}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FaPrint />
                                </ListItemIcon>
                                <ListItemText primary={'my invoices'} />
                            </DashboardActiveLnk>
                        </ListItem>
                    </>
                }

                <ListItem sx={{ paddingX: '20px' }} disablePadding>
                    <DashboardActiveLnk href={'inbox'}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <FaRegEnvelope />
                        </ListItemIcon>
                        <ListItemText primary={'inbox'} />
                    </DashboardActiveLnk>
                </ListItem>

                {/* //TODO: it should be a logout button */}

                <ListItem sx={{ paddingX: '20px' }} disablePadding>
                    <DashboardActiveLnk href={'logout'}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <FaRegCaretSquareRight />
                        </ListItemIcon>
                        <ListItemText primary={'logout'} />
                    </DashboardActiveLnk>
                </ListItem>

            </List>
        </div>
    );

    return (
        <>
            {/* Header */}

            <DashboardHeader />

            {/* Drawer */}
            <Box sx={{ display: 'flex', marginTop: '125px' }} className="dashboard" >

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: '165px 40px 140px', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    className='dashboard-container'
                >
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;