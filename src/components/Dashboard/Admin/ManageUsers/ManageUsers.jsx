import { Box, Button, IconButton, Menu, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaRegTrashAlt } from "react-icons/fa";
import { useGetTotalUsersQuery, useGetUsersQuery, useUpdateUserMutation } from '../../../../Utilities/Redux/features/api/usersApi';
import { Bounce, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ManageUsers = () => {

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [role, setRole] = useState('')
    const { user: currentUser } = useSelector(store => store.auth)

    const { data: users, refetch } = useGetUsersQuery({ role, page, limit: rowsPerPage }, { refetchOnMountOrArgChange: true })

    const [updateUser, userResult] = useUpdateUserMutation()

    const { data: totalUsers } = useGetTotalUsersQuery(role, { refetchOnMountOrArgChange: true })

    const totalPages = Math.ceil(totalUsers / rowsPerPage)

    const handleMakeAgent = (email) => {
        updateUser({ email, user: { role: 'agent' } })
            .then(res => {
                if (res?.data?.modifiedCount) {
                    toast.success('Role Updated Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce,
                    });

                    refetch()
                }
            })
    }

    const handleMakeAdmin = (email) => {
        updateUser({ email, user: { role: 'admin' } })
            .then(res => {
                if (res?.data?.modifiedCount) {
                    toast.success('Role Updated Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce,
                    });

                    refetch()
                }
            })
    }

    const handleMakeFraud = (email) => {
        updateUser({ email, user: { fraud: true } })
            .then(res => {
                if (res?.data?.modifiedCount) {
                    toast.success('Marked as fraud!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce,
                    });

                    refetch()
                }
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
                                    value={role}
                                    onChange={(e) => {
                                        setRole(e.target.value)
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
                                    <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'admin'}>
                                        admin
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'agent'}>
                                        agent
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'user'}>
                                        user
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
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Role</TableCell>
                                <TableCell align="right">Actions</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map((user) => (
                                <TableRow
                                    key={user?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${user?.fraud && 'bg-red-300'}`}
                                >
                                    <TableCell component="th" scope="row">{user?.displayName} </TableCell>
                                    <TableCell align="right">{user?.email}</TableCell>
                                    <TableCell align="right">{user?.role}</TableCell>
                                    <TableCell align="right">
                                        {
                                            (user?.email !== currentUser?.email) && (user?.role === 'admin' ?
                                                <button onClick={() => handleMakeAgent(user?.email)} className="header-btn">
                                                    Make Agent
                                                </button>
                                                :
                                                user?.role === 'agent' ?
                                                    <>
                                                        <button onClick={() => handleMakeAdmin(user?.email)} className="header-btn mr-2">
                                                            Make Admin
                                                        </button>
                                                        <button onClick={() => handleMakeFraud(user?.email)} disabled={user?.fraud} className="header-btn disabled:bg-slate-400 disabled:cursor-default">
                                                            Mark as Fraud
                                                        </button>
                                                    </>
                                                    :
                                                    <button onClick={() => handleMakeAgent(user?.email)} className="header-btn">
                                                        Make Agent
                                                    </button>)
                                        }
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            id="basic-button"
                                            disabled={(user?.email === currentUser?.email)}
                                        >
                                            <FaRegTrashAlt />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section >
    );
};

export default ManageUsers;