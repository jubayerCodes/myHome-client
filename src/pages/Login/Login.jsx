import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import loginBg from '../../assets/images/couple.jpg'
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../../Utilities/Redux/features/authSlice/authSlice';
import { Divider } from '@mui/material';
import SocialLogin from '../../components/shared/SocialLogin/SocialLogin';
import './Login.css'
import Title from '../../components/Title/Title';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()

    const location = useLocation()
    const from = location?.state?.from?.pathname

    const password = watch("password", "");

    const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin }, reset: resetLogin, watch: watchLogin } = useForm()

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false)

    const handleRegister = (data) => {
        const { firstName, lastName, email, password, role } = data

        const user = {
            firstName,
            lastName,
            email,
            password,
            role,
        }

        dispatch(registerWithEmailAndPassword(user))
            .then(() => {
                navigate(from || '/dashboard');
            });

        reset()
    }

    const handleLogin = (data) => {
        const userCredentials = { ...data }

        dispatch(loginWithEmailAndPassword(userCredentials))
            .then(() => {
                navigate(from || '/dashboard');
            })

        resetLogin()
    }


    return (
        <section className={`bg-cover bg-center`} style={{ backgroundImage: `url(${loginBg})` }}>
            <Title page={"Login"} />
            <div className="bg-[#00000098] section px-5">
                <div className='login-form bg-white mx-auto min-w-[200px] max-w-[600px] rounded-md py-10 xl:py-16'>
                    <h4 className={`text-2xl text-center ${isRegister ? 'hidden' : ''}`}>Sign into your account</h4>
                    <h4 className={`text-2xl text-center ${isRegister ? '' : 'hidden'}`}>Create an account</h4>
                    <div className='px-5 xl:px-10 mt-10'>
                        <div className={` w-full ${isRegister ? 'hidden' : ''}`}>
                            <form onSubmit={handleSubmitLogin(handleLogin)} className={`flex-col items-stretch justify-between`}>
                                <input {...registerLogin('email', { required: true })} placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="login-email-field" required />
                                <input {...registerLogin('password', { required: true })} placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="login-password-field" required />
                                <input type="submit" value="Login" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                            </form>
                            <Divider className='text-sm'>OR</Divider>
                            <SocialLogin className={'mt-4'} />
                        </div>
                        <div className={`${isRegister ? '' : 'hidden'}`}>
                            <form onSubmit={handleSubmit(handleRegister)} className={`flex-col items-stretch justify-between `}>
                                <input required {...register('firstName', { required: true })} placeholder='First Name' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="text" name="firstName" id="firstName-field" />

                                <input required {...register('lastName', { required: true })} placeholder='Last Name' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="text" name="lastName" id="lastName-field" />

                                <input required {...register('email', { required: true })} placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="register-email-field" />
                                <input required {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    }
                                })} placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="register-password-field" />

                                {errors.password && <span className='form-warning'>{errors.password.message}</span>}

                                <input required {...register('confirmPassword', {
                                    validate: value =>
                                        value === password || "Passwords do not match"
                                })} placeholder='Retype Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="confirmPassword" id="confirm-password-field" />

                                {errors.confirmPassword && <span className='form-warning'>{errors.confirmPassword.message}</span>}

                                <select required {...register('role', { required: true })} placeholder="Select Role" className='w-full mb-5 border focus:outline-none p-2 text-sm capitalize' name="role" id="role-field">
                                    <option value="">Select Role</option>
                                    <option value="user">user</option>
                                    <option value="agent">agent</option>
                                </select>
                                <input type="submit" value="Register" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                            </form>
                            <Divider className='text-sm'>OR</Divider>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <button onClick={() => setIsRegister(true)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${isRegister ? 'hidden' : ''}`}>Register here!</button>
                            <button onClick={() => setIsRegister(false)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${isRegister ? '' : 'hidden'}`}>Back to login</button>
                            <button className={`${isRegister ? 'hidden' : ''} cursor-pointer transition hover:text-[var(--btn-bg)]`}>Forgot Password?</button>
                        </div>
                        <div className='p-5 mt-10 border rounded-md'>
                            <h4 className='pb-1'>Credentials</h4>
                            <hr />
                            <div className='py-4 border-b'>
                                <span>
                                    Admin:
                                </span>
                                <br />
                                <p className='ms-5'>
                                    email: admin@gmail.com
                                     <br />
                                    password: Admin#1112
                                </p>
                            </div>
                            <div className='pt-4'>
                                <span>
                                    Agent:
                                </span>
                                <br />
                                <p className='ms-5'>
                                    email: agent@gmail.com
                                     <br />
                                    password: Agent#1112
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;