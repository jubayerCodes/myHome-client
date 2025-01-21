import { Box, FormControl, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useGetPropertiesQuery, useGetTotalPagesQuery } from '../../../../Utilities/Redux/features/api/propertiesApi';
import Loader from '../../../shared/Loader/Loader';
import { KeyboardArrowLeft, KeyboardArrowRight, Label } from '@mui/icons-material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ManageProperties = () => {

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    const { data: properties, isLoading } = useGetPropertiesQuery({ page: page, category: '', city: '', sort: 'pending', limit: rowsPerPage })

    const { data: totalPages } = useGetTotalPagesQuery({ limit: rowsPerPage, category: '', city: '' })

    if (isLoading) {
        return <Loader />
    }


    const handleActive = (id) => {
        console.log(id);
    }

    const handleInactive = (id) => {
        console.log(id);
    }

    return (
        <section className='dashboard-section'>
            <h2 className='page-title'>Manage Properties</h2>

            <div>
                <div className="bg-white rounded flex justify-between items-center property-list-filter mb-10" style={{ boxShadow: '0 10px 31px 0 rgba(7,152,255,.09)' }}>
                    <Box display={'flex'} gap={1} padding={'15px'} justifyContent={'space-between'} width={'100%'}>
                        <div className='flex items-center'>
                            <label className='text-sm' htmlFor='limit'>Rows Per Page</label>
                            <Select
                                size='small'
                                id='limit'
                                value={rowsPerPage}
                                onChange={(e) => {
                                    setRowsPerPage(e.target.value)
                                    setPage(1)
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    textTransform: 'capitalize'
                                }}
                            >

                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={5}>
                                    5
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={10}>
                                    10
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={25}>
                                    25
                                </MenuItem>

                            </Select>
                        </div>

                        <div className='flex items-center'>
                            <label className='text-sm' htmlFor='limit'>{page} of {totalPages?.pages}</label>
                            <IconButton disabled={page === 1} onClick={() => setPage(page - 1)} aria-label="page">
                                <IoIosArrowBack />
                            </IconButton>
                            <IconButton disabled={page === totalPages?.pages} onClick={() => setPage(page + 1)} aria-label="page">
                                <IoIosArrowForward />
                            </IconButton>
                        </div>
                    </Box>
                </div>


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="right">Agent</TableCell>
                                <TableCell align="right">Agent Email</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {properties?.map((property) => (
                                <TableRow
                                    key={property?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {property?.title}
                                    </TableCell>
                                    <TableCell align="right">{property?.address?.city}</TableCell>
                                    <TableCell align="right">{property?.agent}</TableCell>
                                    <TableCell align="right">{property?.agent_email}</TableCell>
                                    <TableCell align="right">${property?.price.toLocaleString()}</TableCell>
                                    <TableCell sx={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }} align="left">
                                        {
                                            <>
                                                {
                                                    property?.status === 'active' ?
                                                        <button onClick={() => handleActive(property?._id)} className="header-btn">
                                                            Inactive
                                                        </button>
                                                        :
                                                        <button onClick={() => handleInactive(property?._id)} className="header-btn">
                                                            Active
                                                        </button>
                                                }
                                                <button className="header-btn">
                                                    Delete
                                                </button>
                                            </>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
};

export default ManageProperties;