import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Button, IconButton, Modal, TextField } from '@mui/material';
import './AddProperty.css'
import { FaTrashAlt, FaUpload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { store } from '../../../../Utilities/Redux/store';
import imageApi from '../../../../Utilities/Redux/features/api/imageApi';
import styled from '@emotion/styled';
import { usePostPropertyMutation } from '../../../../Utilities/Redux/features/api/propertiesApi';
import { Bounce, toast } from 'react-toastify';

const AddProperty = () => {
    const { user } = useSelector(store => store.auth)
    const [postProperty, propertyResult] = usePostPropertyMutation()

    const { register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm()
    const { register: registerFloor, handleSubmit: handleSubmitFloor, reset: floorReset, formState: { errors: floorErrors }, watch: floorWatch, } = useForm()
    const [interior, setInterior] = useState([])
    const [outdoor, setOutdoor] = useState([])
    const [others, setOthers] = useState([])
    const [utilities, setUtilities] = useState([])
    const [openFloorsModal, setOpenFloorsModal] = useState(false)
    const [floorPlans, setFloorPlans] = useState([])
    const [floorPhoto, setFloorPhoto] = useState('')
    const [propertyPhotos, setPropertyPhotos] = useState([])
    const date = new Date()

    const addProperty = (data) => {

        const { title, description, price, category, property_size, rooms, bedrooms, bathrooms, garages, floors, address, city, zip_code, country, latitude, longitude, builtYear, garageSize, structureType } = data

        if (!propertyPhotos?.length) {
            return alert("Add images first!")
        }

        if (!floorPlans.length) {
            return alert("Add floor plan first!")
        }


        const newProperty = {
            title: title,
            agent_email: user?.email,
            agent: user?.displayName,
            description: description,
            price: parseFloat(price),
            category: category,
            status: "pending",
            photos: [...propertyPhotos],
            property_size: parseFloat(property_size),
            featured: false,
            rooms: parseInt(rooms),
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            garages: parseInt(garages),
            built_year: builtYear,
            garage_size: garageSize,
            structure_type: structureType,
            floors: parseInt(floors),
            available_from: moment(date).format('YYYY-MM-DD'),
            floor_plans: [...floorPlans],
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

        postProperty(newProperty)
            .then(res => {
                if (res?.data?.insertedId) {
                    toast.success('Agent Updated Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce,
                    });

                    reset()
                    setFloorPlans([])
                    setFloorPhoto('')
                    setPropertyPhotos([])
                }
            })
            .catch(error => console.log(error))

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
                            photo: res?.data?.data?.display_url,
                            bathrooms: parseInt(floorBathrooms),
                            bedrooms: parseInt(floorBedrooms),
                            size: parseFloat(floorSize),
                            description: floorDescription
                        }

                        setFloorPlans([...floorPlans, plan])
                        floorReset()
                        setOpenFloorsModal(false)
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

    const deletePropertyPhotos = (idx) => {
        const newPhotos = [...propertyPhotos]
        newPhotos.splice(idx, 1)
        setPropertyPhotos(newPhotos)
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

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const uploadPropertiesPhoto = async (data) => {
        const files = [...data]

        const photosPromises = files.map((file) => {

            const photoData = new FormData()
            photoData.append("image", file)

            return store.dispatch(imageApi.endpoints.postImage.initiate(photoData))
                .catch(error => console.log(error))

        })

        const responses = await Promise.all(photosPromises)

        const photos = responses.map((response) => response?.data?.data?.display_url);



        setPropertyPhotos(photos)
    }

    return (
        <section className='dashboard-section add-property'>
            <h2 className='page-title'>Add Property</h2>
            <div className='grid grid-cols-12 items-start gap-8'>
                <div className='col-span-9'>
                    <form className='property-form' onSubmit={handleSubmit(addProperty)}>
                        <div className='dashboard-info'>
                            <h4 className='info-title'>Property Description</h4>
                            <div className='form-container'>

                                <div className='form-field col-span-2'>
                                    <label className='form-label' htmlFor="title">*Title</label>
                                    <input type="text" id='title' className='form-input' name='title' {...register('title')} required />
                                </div>

                                <div className='form-field col-span-2'>
                                    <label className='form-label' htmlFor="description">*Description</label>
                                    <textarea type="text" id='description' className='form-input h-[200px]' cols='15' name='description' {...register('description')} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="property_size">*Property Size (Square Feet)</label>
                                    <input type="number" id='property_size' className='form-input' name='property_size' {...register('property_size')} required min={300} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="rooms">*Rooms</label>
                                    <input type="number" id='rooms' className='form-input' name='rooms' {...register('rooms')} required min={4} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="bedrooms">*Bedrooms</label>
                                    <input type="number" id='bedrooms' className='form-input' name='bedrooms' {...register('bedrooms')} required min={1} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="bathrooms">*Bathrooms</label>
                                    <input type="number" id='bathrooms' className='form-input' name='bathrooms' {...register('bathrooms')} required min={1} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="garages">*Garages</label>
                                    <input type="number" id='garages' className='form-input' name='garages' {...register('garages')} required min={0} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="garageSize">*Garage Size</label>
                                    <input type="number" id='garageSize' className='form-input' name='garageSize' {...register('garageSize')} required min={1} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="structureType">*Structure Type</label>
                                    <select className='form-input' name="structureType" id="structureType" {...register('structureType')} required>
                                        <option value="brick">Brick</option>
                                        <option value="wood">Wood</option>
                                        <option value="concrete">Concrete</option>
                                    </select>
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="floors">*Floors</label>
                                    <input type="number" id='floors' className='form-input' name='floors' {...register('floors')} required min={1} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="builtYear">*Built Year</label>

                                    <input
                                        type='number'
                                        id='builtYear'
                                        className='form-input'
                                        {...register('builtYear')}
                                        required
                                        min={1960}
                                        max={parseInt(moment(date).format('YYYY'))}
                                    />
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
                                    <input type="text" id='address' className='form-input' name='address' {...register('address')} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="city">*City</label>

                                    <input type="text" id='city' className='form-input' name='city' {...register('city')} required />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="zip_code">*ZIP Code</label>

                                    <input type="text" id='zip_code' className='form-input' name='zip_code' {...register('zip_code')} required />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="country">Country</label>

                                    <input type="text" id='country' className='form-input' name='country' {...register('country')} required defaultValue={"Bangladesh"} readOnly />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="latitude">*Latitude</label>

                                    <input type="number" id='latitude' className='form-input' name='latitude' {...register('latitude')} required step={0.1} />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label' htmlFor="longitude">*Longitude</label>

                                    <input type="number" id='longitude' className='form-input' name='longitude' {...register('longitude')} required step={0.1} />
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-info'>
                            <h4 className='info-title'>Property Price</h4>
                            <div className='form-container'>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="price">Price in $</label>
                                    <input type="number" id='price' className='form-input' name='price' {...register('price')} required />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label' htmlFor="period">Price Period</label>

                                    <select className='form-input' name="period" id="period" {...register('period')} required>
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

                                    <select className='form-input' name="category" id="category" {...register('category')} required>
                                        <option value="offices">Offices</option>
                                        <option value="land">Land</option>
                                        <option value="apartments">Apartments</option>
                                        <option value="condos">Condos</option>
                                        <option value="villa">Villa</option>
                                        <option value="industrial">Industrial</option>
                                        <option value="houses">Houses</option>
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
                <div className='col-span-3'>
                    <div className='dashboard-sidebar overflow-hidden'>
                        <h4 className="info-title">Photos</h4>

                        {
                            propertyPhotos?.map((photo, idx) => <div key={idx} className='relative'>
                                <IconButton onClick={() => deletePropertyPhotos(idx)} size='small' aria-label="delete" style={{ position: 'absolute', color: 'white', top: '10px', right: '10px', backgroundColor: 'black', padding: '10px' }}>
                                    <FaTrashAlt />
                                </IconButton>
                                <img src={photo} alt={''} className='w-full rounded-lg mb-5' />
                            </div>)
                        }

                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<FaUpload />}
                            className='w-full header-btn'
                        >
                            Upload files
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event) => uploadPropertiesPhoto(event.target.files)}
                                multiple
                                accept=".jpg,.jpeg,.png,.webp"
                            />
                        </Button>
                        <span className='text-red-600 text-xs pt-1 block'>*16:9 Ratio Expected</span>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default AddProperty;