import React from 'react';
import { useForm } from 'react-hook-form';

const AddProperty = () => {

    const { register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className='dashboard-section'>
            <h2 className='page-title'>Add Property</h2>
            <div className='grid grid-cols-12 items-start gap-8'>
                <div className='col-span-9'>
                    <form className='agent-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='dashboard-info'>
                            <h4 className='info-title'>Property Description</h4>
                            <div className='form-container'>

                                <div className='form-field col-span-2'>
                                    <label className='form-label' htmlFor="title">*Title</label>
                                    <input type="text" id='title' className='form-input' name='title' {...register('title', { required: true })} required />
                                </div>

                                <div className='form-field col-span-2'>
                                    <label className='form-label' htmlFor="description">Description</label>
                                    <textarea type="text" id='description' className='form-input h-[200px]' cols='15' name='description' {...register('description')} />
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Property Price</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="price">Price in $</label>
                                    <input type="number" id='price' className='form-input' name='price' {...register('price', { required: true })} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="period">Price Period</label>

                                    <select className='form-input' name="period" id="period" {...register('period', { required: true })} required>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="tax">Yearly Tax Rate %</label>
                                    <input type="number" id='tax' className='form-input' name='tax' {...register('tax', { required: true })} required />
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Select Categories</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="category">Category</label>

                                    <select className='form-input' name="category" id="category" {...register('category', { required: true })} required>
                                        <option value="">none</option>
                                        <option value="offices">Offices</option>
                                        <option value="land">Land</option>
                                        <option value="apartments">Apartments</option>
                                        <option value="condos">Condos</option>
                                        <option value="villa">Villa</option>
                                        <option value="industrial">Industrial</option>
                                        <option value="houses">Houses</option>
                                    </select>
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="type">Type</label>

                                    <select className='form-input' name="type" id="type" {...register('listed_in', { required: true })} required>
                                        <option value="">none</option>
                                        <option value="sale">Sale</option>
                                        <option value="rent">Rent</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* <div className='dashboard-info'>
                            <h4 className='info-title'>Select Categories</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="price">Price in $</label>
                                    <input type="number" id='price' className='form-input' name='price' {...register('price', { required: true })} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="period">Price Period</label>

                                    <select className='form-input' name="period" id="period" {...register('period', { required: true })} required>


                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="tax">Yearly Tax Rate %</label>
                                    <input type="number" id='tax' className='form-input' name='tax' {...register('tax', { required: true })} required />
                                </div>
                            </div>
                        </div> */}

                        {/* //! Temporary */}
                        <div className='flex justify-start gap-5 items-start'>
                            <input className="header-btn" style={{ padding: '12px 20px', borderRadius: '7px' }} value={'Add Property'} type='submit' />
                            <button className="header-btn" style={{ padding: '12px 20px', borderRadius: '7px' }}>Save as Draft</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddProperty;