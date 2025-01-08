import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactSection.css'

const ContactSection = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()


    const handleEmail = ({ name, phone, email, city, message }) => {
        console.log(name, phone, email, city, message);

        reset({ name: '', phone: '', email: '', city: '', message: '' })
    }

    return (
        <section className='section bg-[#002B54]'>
            <div className="w-full xl:w-[700px] mx-auto px-5">
                <h2 className='text-xl xl:text-2xl text-center font-medium text-white mb-5 xl:mb-10'>Contact us today if you’d like to know more about how we help buy, sell or rent your home</h2>
                <div className='bg-white rounded-md p-5 xl:p-10 mx-auto'>

                    <h3 className='text-xl font-medium text-center mb-3'>Schedule a meeting with our team</h3>
                    <p className='text-[#5c727d] text-sm xl:text-base text-center max-w-[350px] mx-auto'>Our experts and developers would love to contribute their expertise and insights</p>
                    <form onSubmit={handleSubmit(handleEmail)} className="contact-form mt-8">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 items-center justify-between">
                            <input id="name-field" name="name" type="text" className="input" placeholder="Your Name" {...register('name', { required: true })} required />
                            <input id="phone-field" name="phone" type="tel" className="input" placeholder="Your Phone" {...register('phone', { required: true })} required />

                            <input id="email-field" name="email" type="email" className="input" placeholder="Your Email" {...register('email', { required: true })} required />

                            <input id="city-field" name="city" type="text" className="input" placeholder="Your City" {...register('city', { required: true })} required />

                        </div>
                        <textarea name="message" id="message-field" className="input w-full mt-3" rows={8} required {...register('message', { required: true })}></textarea>

                        <div className="mt-2 flex flex-col gap-3">
                            <input type="submit" className="primary-btn" value={'Send Email'} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;