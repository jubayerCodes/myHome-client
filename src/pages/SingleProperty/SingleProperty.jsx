import { useLoaderData } from "react-router-dom";


const SingleProperty = () => {

    const { data, isLoading } = useLoaderData()

    console.log(data, isLoading);

    return (
        <div>
            <h1 className='text-4xl'>Single Property: {data._id}</h1>
        </div>
    );
};

export default SingleProperty;