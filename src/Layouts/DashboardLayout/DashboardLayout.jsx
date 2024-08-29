import React, { useEffect } from 'react';
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
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardActiveLnk from '../../components/Dashboard/DashboardActiveLink/DashboardActiveLnk';

const drawerWidth = 300

const DashboardLayout = () => {

    const navigate = useNavigate()

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

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

    // TODO: different list for different role

    const drawer = (
        <div>
            <Toolbar >

            </Toolbar>
            <Divider />
            <List sx={{ paddingTop: '80px', justifyContent: 'start' }}>

                <ListItem sx={{ paddingX: '20px' }} disablePadding>
                    <DashboardActiveLnk href={'overview'}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <FaChartBar />
                        </ListItemIcon>
                        <ListItemText primary={'overview'} />
                    </DashboardActiveLnk>
                </ListItem>

                <ListItem sx={{ paddingX: '20px' }} disablePadding>
                    <DashboardActiveLnk href={'user-profile'}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <FaRegUser />
                        </ListItemIcon>
                        <ListItemText primary={'My Profile'} />
                    </DashboardActiveLnk>
                </ListItem>

                <ListItem sx={{ paddingX: '20px' }} disablePadding>
                    <DashboardActiveLnk href={'favorites'}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <FaRegHeart />
                        </ListItemIcon>
                        <ListItemText primary={'favorites'} />
                    </DashboardActiveLnk>
                </ListItem>

                <ListItem sx={{ paddingX: '20px' }} disablePadding>
                    <DashboardActiveLnk href={'user-invoices'}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <FaPrint />
                        </ListItemIcon>
                        <ListItemText primary={'my invoices'} />
                    </DashboardActiveLnk>
                </ListItem>

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
                    sx={{ flexGrow: 1, p: 5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;