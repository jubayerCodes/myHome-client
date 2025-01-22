import { Box, FormControl, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDeletePropertyMutation, useGetPropertiesQuery, useGetTotalPagesQuery, useUpdatedStatusMutation } from '../../../../Utilities/Redux/features/api/propertiesApi';
import Loader from '../../../shared/Loader/Loader';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Bounce, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ManageProperties = () => {

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('')

    const { data: properties, isLoading, refetch } = useGetPropertiesQuery({ page: page, sort: 'newest_first', limit: rowsPerPage, status }, { refetchOnMountOrArgChange: true })

    const { data: totalPages } = useGetTotalPagesQuery({ limit: rowsPerPage, status: status })

    const [updateStatus, statusResult] = useUpdatedStatusMutation()
    const [deleteProperty, deleteResult] = useDeletePropertyMutation()

    if (isLoading) {
        return <Loader />
    }


    const handleActive = async (id) => {
        updateStatus({ id, status: 'active' })
            .then(res => {
                if (res?.data?.modifiedCount) {
                    toast.success('Status Updated Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce,
                    })
                    refetch()
                }
            })
            .catch(error => {
                toast.error('Status Update Failed!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce,
                })

                console.log(error);
            })
    }

    const handleReject = async (id) => {
        updateStatus({ id, status: 'rejected' })
            .then(res => {
                if (res?.data?.modifiedCount) {
                    toast.success('Status Updated Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce,
                    })
                    refetch()
                }
            })
            .catch(error => {
                toast.error('Status Update Failed!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce,
                })

                console.log(error);
            })
    }


    const handleDelete = (id) => {
        deleteProperty(id)
            .then(res => {
                if (res.data.deletedCount) {
                    toast.success('Property Deleted Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce,
                    })

                    refetch()
                }
            })
            .catch(error => {
                toast.error('Property Delete Failed!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce,
                })

                console.log(error);
            })
    }

    return (
        <section className='dashboard-section'>
            <h2 className='page-title'>Manage Properties</h2>

            <div>
                <div className="bg-white rounded flex justify-between items-center property-list-filter mb-10" style={{ boxShadow: '0 10px 31px 0 rgba(7,152,255,.09)' }}>
                    <Box display={'flex'} gap={1} padding={'15px'} justifyContent={'space-between'} width={'100%'}>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <label className='text-sm' htmlFor='limit'>Rows Per Page</label>
                                <Select
                                    size='small'
                                    id='limit'
                                    value={rowsPerPage}
                                    onChange={(e) => {
                                        setRowsPerPage(e.target.value)
                                        setPage(1)
                                        refetch()
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
                                <Select
                                    size='small'
                                    id='status'
                                    value={status}
                                    onChange={(e) => {
                                        setStatus(e.target.value)
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


                                    <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={''}>
                                        All
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'pending'}>
                                        Pending
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'active'}>
                                        Active
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'rejected'}>
                                        Rejected
                                    </MenuItem>

                                </Select>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label className='text-sm' htmlFor='limit'>Page - {page}</label>
                            <IconButton disabled={(page === 1)} onClick={() => setPage(page - 1)} aria-label="page">
                                <IoIosArrowBack />
                            </IconButton>
                            <IconButton disabled={(page === totalPages?.pages) || (totalPages?.pages === 0)} onClick={() => setPage(page + 1)} aria-label="page">
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
                                        <Link to={`/properties/${property?._id}`} target='_blank'>
                                            {property?.title}
                                        </Link>
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
                                                        <button onClick={() => handleReject(property?._id)} className="bg-black hover:bg-[var(--header-bg)] duration-300 text-sm py-2 px-5 text-white capitalize font-semibold rounded cursor-pointer">
                                                            Reject
                                                        </button>
                                                        :
                                                        <button onClick={() => handleActive(property?._id)} className="header-btn">
                                                            Active
                                                        </button>
                                                }
                                                <button onClick={() => handleDelete(property?._id)} className="bg-red-700 hover:bg-[var(--header-bg)] duration-300 text-sm py-2 px-5 text-white capitalize font-semibold rounded cursor-pointer">
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