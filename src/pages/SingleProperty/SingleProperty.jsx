import { useLoaderData } from "react-router-dom";


const SingleProperty = () => {

    const { data } = useLoaderData()

    console.log(data);

    return (
        <div>
            <h1 className='text-4xl'>Single Property</h1>
        </div>
    );
};

export default SingleProperty;