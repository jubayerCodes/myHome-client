import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, IconButton, Modal, TextField, Typography } from '@mui/material';
import './AddProperty.css'
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { store } from '../../../../Utilities/Redux/store';
import imageApi from '../../../../Utilities/Redux/features/api/imageApi';

const AddProperty = () => {
    const { user } = useSelector(store => store.auth)

    const { register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm()
    const { register: registerFloor, handleSubmit: handleSubmitFloor, reset: floorReset, formState: { errors: floorErrors }, watch: floorWatch, } = useForm()
    const [interior, setInterior] = useState([])
    const [outdoor, setOutdoor] = useState([])
    const [others, setOthers] = useState([])
    const [utilities, setUtilities] = useState([])
    const [openFloorsModal, setOpenFloorsModal] = useState(false)
    const [floorPlans, setFloorPlans] = useState([])
    const [floorPhoto, setFloorPhoto] = useState('')
    const date = new Date()

    const addProperty = (data) => {

        const { title, description, price, category, type, property_size, rooms, bedrooms, bathrooms, garages, floors, address, city, zip_code, country, latitude, longitude } = data


        const newProperty = {
            title: title,
            agent_email: user?.email,
            description: description,
            price: parseFloat(price),
            category: category,
            listed_in: type,
            status: "pending",
            photos: [
                "https://i.ibb.co.com/Ph6BcWb/villa-1900-1110x623.webp",
                "https://wpresidence.net/wp-content/uploads/2017/11/interior37-800x467.jpg",
                "https://wpresidence.net/wp-content/uploads/2017/11/interior38-800x467.jpg",
                "https://wpresidence.net/wp-content/uploads/2017/11/interior36-800x467.jpg",
                "https://wpresidence.net/wp-content/uploads/2017/11/image3_large-835x467.jpg"
            ],
            property_size: parseFloat(property_size),
            featured: false,
            rooms: parseInt(rooms),
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            garages: parseInt(garages),
            "built_year": 2010,
            "garage_size": 2,
            "structure_type": "brick",
            floors: parseInt(floors),
            available_from: moment(date).format('YYYY-mm-DD'),
            floor_plans: floorPlans,
            address: {
                address: address,
                city: city,
                zip_code: parseInt(zip_code),
                country: country,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude)
            },
            features: {
                interior: interior,
                outdoor: outdoor,
                others: others,
                utilities: utilities
            },
        }
    }

    const addFloorPlan = async (data) => {

        const { floorTitle, floorPhotoFile, floorBedrooms, floorBathrooms, floorSize, floorDescription } = data

        const photoFile = floorPhotoFile[0]

        if (!photoFile) {
            return alert('Upload Photo!')
        }

        const reader = new FileReader();

        reader.onload = async () => {
            const base64String = reader.result.split(",")[1];

            const photoData = new FormData()
            photoData.append("image", base64String)

            store.dispatch(imageApi.endpoints.postImage.initiate(photoData))
                .then(res => {
                    if (res?.data?.success) {
                        setFloorPhoto(res?.data?.data?.display_url)

                        const plan = {
                            title: floorTitle,
                            photo: floorPhoto,
                            bathrooms: parseInt(floorBathrooms),
                            bedrooms: parseInt(floorBedrooms),
                            size: parseFloat(floorSize),
                            description: floorDescription
                        }

                        setFloorPlans([...floorPlans, plan])
                        floorReset()
                        setOpenFloorsModal(false)
                        console.log(plan);
                    }
                })
        }

        reader.readAsDataURL(photoFile);
    }

    const deleteFloorPlan = (idx) => {

        const newPlans = [...floorPlans]

        newPlans.splice(idx, 1)
        setFloorPlans(newPlans)
    }

    const interiorFeatures = ['Equipped Kitchen', 'Gym', 'Laundry', 'Media Room']
    const outdoorFeatures = [
        "backyard",
        "basketball court",
        "front yard",
        "garage attached",
        "hot bath",
        "pool"
    ]

    const otherFeatures = [
        "chair accessible",
        "elevator",
        "fireplace",
        "smoke detectors",
        "washer",
        "dryer",
        "wifi"
    ]

    const utilitiesFeatures = [
        "central air",
        "electricity",
        "heating",
        "natural gas",
        "ventilation",
        "water"
    ]

    return (
        <section className='dashboard-section add-property'>
            <h2 className='page-title'>Add Property</h2>
            <div className='grid grid-cols-12 items-start gap-8'>
                <div className='col-span-9'>
                    <form className='agent-form' onSubmit={handleSubmit(addProperty)}>
                        <div className='dashboard-info'>
                            <h4 className='info-title'>Property Description</h4>
                            <div className='form-container'>

                                <div className='form-field col-span-2'>
                                    <label className='form-label' htmlFor="title">*Title</label>
                                    <input type="text" id='title' className='form-input' name='title' {...register('title', { required: true })} required />
                                </div>

                                <div className='form-field col-span-2'>
                                    <label className='form-label' htmlFor="description">*Description</label>
                                    <textarea type="text" id='description' className='form-input h-[200px]' cols='15' name='description' {...register('description', {
                                        required: true
                                    })} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="property_size">*Property Size (Square Feet)</label>
                                    <input type="number" id='property_size' className='form-input' name='property_size' {...register('property_size', { required: true })} required min={300} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="rooms">*Rooms</label>
                                    <input type="number" id='rooms' className='form-input' name='rooms' {...register('rooms', { required: true })} required min={4} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="bedrooms">*Bedrooms</label>
                                    <input type="number" id='bedrooms' className='form-input' name='bedrooms' {...register('bedrooms', { required: true })} required min={1} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="bathrooms">*Bathrooms</label>
                                    <input type="number" id='bathrooms' className='form-input' name='bathrooms' {...register('bathrooms', { required: true })} required min={1} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="garages">*Garages</label>
                                    <input type="number" id='garages' className='form-input' name='garages' {...register('garages', { required: true })} required min={0} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="floors">*Floors</label>
                                    <input type="number" id='floors' className='form-input' name='floors' {...register('floors', { required: true })} required min={1} />
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Features</h4>
                            <div className="form-container">
                                <div className="form-field">
                                    <label className='form-label' htmlFor="interior">*Interior</label>

                                    <Autocomplete
                                        multiple
                                        id="interior"
                                        options={interiorFeatures}
                                        getOptionLabel={(option) => option}
                                        filterSelectedOptions
                                        className='form-autocomplete'
                                        onChange={(e, newValue) => setInterior(newValue)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className='form-label' htmlFor="outdoor">*Outdoor</label>

                                    <Autocomplete
                                        multiple
                                        id="outdoor"
                                        options={outdoorFeatures}
                                        getOptionLabel={(option) => option}
                                        filterSelectedOptions
                                        className='form-autocomplete'
                                        onChange={(e, newValue) => setOutdoor(newValue)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className='form-label' htmlFor="others">*Others</label>

                                    <Autocomplete
                                        multiple
                                        id="others"
                                        options={otherFeatures}
                                        getOptionLabel={(option) => option}
                                        filterSelectedOptions
                                        className='form-autocomplete'
                                        onChange={(e, newValue) => setOthers(newValue)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className='form-label' htmlFor="utilities">*Utilities</label>

                                    <Autocomplete
                                        multiple
                                        id="utilities"
                                        options={utilitiesFeatures}
                                        getOptionLabel={(option) => option}
                                        filterSelectedOptions
                                        className='form-autocomplete'
                                        onChange={(e, newValue) => setUtilities(newValue)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Address</h4>
                            <div className='form-container'>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="address">*Address</label>
                                    <input type="text" id='address' className='form-input' name='address' {...register('address', { required: true })} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="city">*City</label>

                                    <input type="text" id='city' className='form-input' name='city' {...register('city', { required: true })} required />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="zip_code">*ZIP Code</label>

                                    <input type="text" id='zip_code' className='form-input' name='zip_code' {...register('zip_code', { required: true })} required />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="country">Country</label>

                                    <input type="text" id='country' className='form-input' name='country' {...register('country', { required: true })} required defaultValue={"Bangladesh"} readOnly />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="latitude">*Latitude</label>

                                    <input type="number" id='latitude' className='form-input' name='latitude' {...register('latitude', { required: true })} required />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="longitude">*Longitude</label>

                                    <input type="number" id='longitude' className='form-input' name='longitude' {...register('longitude', { required: true })} required />
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
                                        <option value="once">Once</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Select Categories</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="category">Category</label>

                                    <select className='form-input' name="category" id="category" {...register('category', { required: true })} required>
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

                                    <select className='form-input' name="type" id="type" {...register('type', { required: true })} required>
                                        <option value="sale">Sale</option>
                                        <option value="rent">Rent</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <div className='flex justify-between'>
                                <h4 className='info-title'>Floor Plans</h4>
                                <button type='button' className="header-btn" onClick={() => setOpenFloorsModal(true)}>Add Plan</button>
                            </div>
                            {
                                floorPlans.length != 0 && <>

                                    {
                                        floorPlans?.map((plan, idx) => (
                                            <div key={idx} className="flex flex-col gap-2 floor-plans mt-5">
                                                <Accordion sx={{ boxShadow: 'none' }} defaultExpanded={idx === 0}>
                                                    <AccordionSummary
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                        sx={{ background: '#fafcff' }}
                                                    >
                                                        <div className="flex justify-between items-center w-full plan">
                                                            <h4 className="plan-title">{plan?.title}</h4>
                                                            <div className="gap-10 flex items-center">
                                                                <span className="text-sm font-light">
                                                                    <span className="font-medium">Baths: </span>
                                                                    {plan?.bathrooms}
                                                                </span>
                                                                <span className="text-sm font-light">
                                                                    <span className="font-medium">Rooms: </span>
                                                                    {plan?.rooms}
                                                                </span>
                                                                <span className="text-sm font-light">
                                                                    <span className="font-medium">Size: </span>
                                                                    {plan?.size}
                                                                </span>
                                                                <IconButton onClick={() => deleteFloorPlan(idx)} size='small' aria-label="delete">
                                                                    <FaTrashAlt />
                                                                </IconButton>
                                                            </div>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div className="py-5">
                                                            <img className="w-full" src={floorPhoto} alt="" />
                                                            <p className="text-[var(--text-color)] text-sm mt-5">{plan?.description}</p>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        ))
                                    }
                                </>
                            }
                        </div>

                        <div className='flex justify-start gap-5 items-start'>
                            <input className="header-btn" style={{ padding: '12px 20px', borderRadius: '7px' }} value={'Add Property'} type='submit' />
                            <button className="header-btn" style={{ padding: '12px 20px', borderRadius: '7px' }}>Save as Draft</button>
                        </div>
                    </form>


                    <Modal
                        open={openFloorsModal}
                        onClose={() => setOpenFloorsModal(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className='modal-container'>

                            <h2 className='text-2xl font-semibold mb-5'>Add Floor Plan</h2>

                            <form onSubmit={handleSubmitFloor(addFloorPlan)}>
                                <div className="modal-form-container">
                                    <div className='form-field'>
                                        <label className='form-label' htmlFor="floorTitle">Title</label>
                                        <input type="text" id='floorTitle' className='form-input' name='floorTitle' {...registerFloor('floorTitle', { required: true })} />
                                    </div>

                                    <div className='form-field'>
                                        <label className='form-label' htmlFor="floorPhotoFile">Photo</label>
                                        <input type="file" id='floorPhotoFile' className='form-input' name='floorPhotoFile' {...registerFloor('floorPhotoFile', { required: true })} required />
                                    </div>
                                    <div className='form-field'>
                                        <label className='form-label' htmlFor="floorBedrooms">Bedrooms</label>
                                        <input type="number" id='floorBedrooms' className='form-input' name='floorBedrooms' {...registerFloor('floorBedrooms', { required: true })} min={1} required />
                                    </div>
                                    <div className='form-field'>
                                        <label className='form-label' htmlFor="floorBathrooms">Bathrooms</label>
                                        <input type="number" id='floorBathrooms' className='form-input' name='floorBathrooms' {...registerFloor('floorBathrooms', { required: true })} min={1} required />
                                    </div>
                                    <div className='form-field col-span-2'>
                                        <label className='form-label' htmlFor="floorSize">Size</label>
                                        <input type="number" id='floorSize' className='form-input' name='floorSize' {...registerFloor('floorSize', { required: true })} min={1} required />
                                    </div>
                                    <div className='form-field col-span-2'>
                                        <label className='form-label' htmlFor="floorDescription">Description</label>
                                        <textarea rows={5} id='floorDescription' className='form-input' name='floorDescription' {...registerFloor('floorDescription', { required: true })} min={1} required />
                                    </div>
                                </div>

                                <input type="submit" value="Add Plan" className='header-btn mt-5 w-full' />
                            </form>

                        </div>
                    </Modal>
                </div>
                <div className='col-span-3 sticky top-40'>
                    <div className='dashboard-sidebar'>
                        {/* //TODO: implement update photo feature */}
                        <h4 className="info-title">Photos</h4>

                        <button className="header-btn w-full" style={{ padding: '15px 20px', borderRadius: '7px' }}>Upload Photos</button>
                        <span className='text-red-600 text-xs pt-1'>*16:9 Ratio Expected</span>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default AddProperty;