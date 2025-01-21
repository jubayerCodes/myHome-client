import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import userImg from '../../../../assets/images/default_user.png'
import { useGetAdminQuery, useUpdateAdminMutation } from '../../../../Utilities/Redux/features/api/adminApi';
import { Bounce, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AdminProfile = () => {

    const { user } = useSelector((store) => store?.auth)

    const { data: admin, refetch } = useGetAdminQuery(user?.email)
    const [updateAdmin, adminResult] = useUpdateAdminMutation()

    const { register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm()

    useEffect(() => {
        setValue('firstName', admin?.firstName)
        setValue('lastName', admin?.lastName)
        setValue('email', admin?.email)
        setValue('phone', admin?.contact?.phone)
        setValue('mobile', admin?.contact?.mobile)
        setValue('skype', admin?.contact?.skype)
        setValue('facebook', admin?.contact?.facebook)
        setValue('instagram', admin?.contact?.instagram)
        setValue('twitter', admin?.contact?.twitter)
        setValue('linkedin', admin?.contact?.linkedin)
        setValue('pinterest', admin?.contact?.pinterest)
        setValue('website', admin?.contact?.website)
        setValue('position', admin?.position)
        setValue('bio', admin?.bio)
        setValue('companyName', admin?.companyName)
        setValue('area', admin?.address?.area)
        setValue('country', admin?.address?.country)
        setValue('city', admin?.address?.city)
    }, [setValue, admin])


    const onSubmit = (data) => {

        const {
            phone,
            email,
            mobile,
            skype,
            facebook,
            instagram,
            twitter,
            linkedin,
            pinterest,
            website,
            bio,
            area,
            country,
            city
        } = data

        const admin = {
            contact: {
                phone,
                mobile,
                skype,
                facebook,
                instagram,
                twitter,
                linkedin,
                pinterest,
                website,
            },
            bio,
            address: {
                area: area,
                city: city,
                country: country
            }
        }


        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update Profile!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                updateAdmin({ email, admin })
                    .then(res => {
                        if (res?.data?.modifiedCount) {
                            toast.success('Admin Updated Successfully!', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                transition: Bounce,
                            });
                        }
                    })
                    .catch(error => {
                        toast.error('Update failed!', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            transition: Bounce,
                        });

                        console.log(error);
                    })
            }
        });
    }

    return (
        <section className='dashboard-section'>
            <h2 className='page-title'>My Profile</h2>
            <div className='grid grid-cols-12 items-start gap-8'>
                <div className='col-span-9'>
                    <form className='admin-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='dashboard-info'>
                            <h4 className='info-title'>Contact Information</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="first-name">First Name</label>
                                    <input type="text" id='first-name' className='form-input' name='firstName' {...register('firstName', { required: true })} required readOnly />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="last-name">Last Name</label>
                                    <input type="text" id='last-name' className='form-input' name='lastName' {...register('lastName', { required: true })} required readOnly />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="phone">Phone</label>
                                    <input type="tel" id='phone' className='form-input' name='phone' {...register('phone')} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" id='email' className='form-input' name='email' {...register('email', { required: true })} required readOnly />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="mobile">Mobile</label>
                                    <input type="tel" id='mobile' className='form-input' name='mobile' {...register('mobile')} />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="skype">Skype</label>
                                    <input type="text" id='skype' className='form-input' name='skype' {...register('skype')} />
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Social Information</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="facebook">Facebook Url</label>
                                    <input type="text" id='facebook' className='form-input' name='facebook' {...register('facebook')} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="instagram">Instagram Url</label>
                                    <input type="text" id='instagram' className='form-input' name='instagram' {...register('instagram')} />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="twitter">X - Twitter Url</label>
                                    <input type="text" id='twitter' className='form-input' name='twitter' {...register('twitter')} />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="linkedin">Linkedin Url</label>
                                    <input type="text" id='linkedin' className='form-input' name='linkedin' {...register('linkedin')} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="pinterest">Pinterest Url</label>
                                    <input type="text" id='pinterest' className='form-input' name='pinterest'{...register('pinterest')} />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="website">Website Url</label>
                                    <input type="text" id='website' className='form-input' name='website' {...register('website')} />
                                </div>

                            </div>
                        </div>
                        <div className='dashboard-info'>
                            <h4 className='info-title'>Admin Address</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="city">City</label>
                                    <input type="text" id='city' name='city' className='form-input' {...register("city")} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="country">Country</label>
                                    <input type="text" id='country' name='country' className='form-input' {...register("country")} required />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="area">Area</label>
                                    <input type="text" id='area' name='area' className='form-input' {...register("area")} required />
                                </div>

                            </div>

                            <div className='flex justify-start gap-5 items-start mt-8'>
                                <input className="header-btn" style={{ padding: '12px 20px', borderRadius: '7px' }} value={'Update Profile'} type='submit' />
                                <button className="header-btn" style={{ padding: '12px 20px', borderRadius: '7px' }}>Delete Profile</button>
                            </div>
                        </div>
                    </form>

                    <form>
                        <div className='dashboard-info mt-10'>
                            <h4 className='info-title'>Change Password</h4>

                            <div className='form-field mb-8'>
                                <label className='form-label' htmlFor="old-password">Old Password</label>
                                <input type="text" id='old-password' className='form-input' />
                            </div>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="new-password">New Password</label>
                                    <input type="text" id='new-password' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="confirm-password">Confirm Password</label>
                                    <input type="text" id='confirm-password' className='form-input' />
                                </div>

                                <div className='flex justify-start gap-5 items-start'>
                                    <input className="header-btn" style={{ padding: '12px 20px', borderRadius: '7px' }} value={'Change Password'} type='submit' />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-span-3 sticky top-40'>
                    <div className='dashboard-sidebar'>


                        {/* //TODO: implement update photo feature */}
                        <h4 className="info-title">Photo</h4>
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} alt={'profile picture'} className='w-full rounded-lg' />
                                :
                                <img src={userImg} alt={user?.photoURL} className='w-full rounded-lg' />
                        }

                        <button className="header-btn w-full mt-8" style={{ padding: '15px 20px', borderRadius: '7px' }}>Update Profile Picture</button>
                        <span className='text-gray-400 text-xs pt-1'>*Minimum 500px x 500px </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminProfile;