import React from 'react';
import { useSelector } from 'react-redux';
import userImg from '../../../../assets/images/default_user.png'

const AgentProfile = () => {

    const { user } = useSelector(state => state.auth)

    return (
        <section className='dashboard-section'>
            <h2 className='page-title'>My Profile</h2>
            <div className='grid grid-cols-12 items-start gap-8'>
                <div className='col-span-9'>
                    <form className='agent-form'>
                        <div className='dashboard-info'>
                            <h4 className='info-title'>Contact Information</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="first-name">First Name</label>
                                    <input type="text" id='first-name' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="last-name">Last Name</label>
                                    <input type="text" id='last-name' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="phone">Phone</label>
                                    <input type="tel" id='phone' className='form-input' />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" id='email' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="mobile">Mobile</label>
                                    <input type="tel" id='mobile' className='form-input' />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="skype">Skype</label>
                                    <input type="text" id='skype' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="company">Company</label>
                                    <input type="text" id='company' className='form-input' />
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Social Information</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="facebook">Facebook Url</label>
                                    <input type="text" id='facebook' className='form-input' />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="instagram">Instagram Url</label>
                                    <input type="text" id='instagram' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="twitter">X - Twitter Url</label>
                                    <input type="text" id='twitter' className='form-input' />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="instagram">Instagram Url</label>
                                    <input type="text" id='instagram' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="linkedin">Linkedin Url</label>
                                    <input type="text" id='linkedin' className='form-input' />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="pinterest">Pinterest Url</label>
                                    <input type="text" id='pinterest' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="website">Website Url</label>
                                    <input type="text" id='website' className='form-input' />
                                </div>

                            </div>
                        </div>
                        <div className='dashboard-info'>
                            <h4 className='info-title'>Agent Location</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="city">City</label>
                                    <input type="text" id='city' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="country">Country</label>
                                    <input type="text" id='country' className='form-input' />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="area">Area</label>
                                    <input type="text" id='area' className='form-input' />
                                </div>

                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Agent Details</h4>
                            <div className='flex flex-col items-stretch gap-8 justify-start'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="position">Title/Position</label>
                                    <input type="text" id='position' className='form-input' />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="bio">About Me</label>
                                    <textarea type="text" id='bio' className='form-input h-[200px]' cols='15' />
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

                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-span-3 sticky top-40'>
                    <div className='dashboard-sidebar'>
                        <h4 className="info-title">Photo</h4>
                        <img src={userImg} alt="" className='w-full rounded-lg' />

                        <button className="header-btn w-full mt-8" style={{ padding: '15px 20px', borderRadius: '7px' }}>Update Profile Picture</button>
                        <span className='text-gray-400 text-xs pt-1'>*Minimum 500px x 500px </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentProfile;