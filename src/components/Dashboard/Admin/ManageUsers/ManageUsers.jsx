import { Box, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useGetTotalUsersQuery, useGetUsersQuery } from '../../../../Utilities/Redux/features/api/usersApi';

const ManageUsers = () => {

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [role, setRole] = useState('')

    const { data: users, refetch } = useGetUsersQuery({ role, page, limit: rowsPerPage }, { refetchOnMountOrArgChange: true })

    const { data: totalUsers } = useGetTotalUsersQuery(role, { refetchOnMountOrArgChange: true })

    const totalPages = Math.ceil(totalUsers / rowsPerPage)

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
                                >
                                    <TableCell component="th" scope="row">{user?.displayName} </TableCell>
                                    <TableCell align="right">{user?.email}</TableCell>
                                    <TableCell align="right">{user?.role}</TableCell>
                                    <TableCell sx={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }} align="left">
                                        {
                                            <>
                                                {
                                                    user?.role === 'admin' ?
                                                        <button className="bg-black hover:bg-[var(--header-bg)] duration-300 text-sm py-2 px-5 text-white capitalize font-semibold rounded cursor-pointer">
                                                            Make Agent
                                                        </button>
                                                        :
                                                        user?.role === 'agent' ? 
                                                        <button className="bg-black hover:bg-[var(--header-bg)] duration-300 text-sm py-2 px-5 text-white capitalize font-semibold rounded cursor-pointer">
                                                            Make Admin
                                                        </button>
                                                        : 
                                                        <button className="bg-black hover:bg-[var(--header-bg)] duration-300 text-sm py-2 px-5 text-white capitalize font-semibold rounded cursor-pointer">
                                                            Make Agent
                                                        </button>
                                                }
                                            </>
                                        }
                                    </TableCell>
                                    <TableCell sx={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }} align="left">
                                        <button className="bg-red-700 hover:bg-[var(--header-bg)] duration-300 text-sm py-2 px-5 text-white capitalize font-semibold rounded cursor-pointer">
                                            Delete
                                        </button>
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

export default ManageUsers;