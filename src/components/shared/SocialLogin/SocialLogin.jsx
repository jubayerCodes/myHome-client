import { useSelector } from "react-redux";


const SocialLogin = ({ className }) => {

    const user = useSelector(state => state.auth.user)

    return (
        <div className={`${className}`}>
            <button className='bg-[#ed5565] hover:bg-black duration-300 text-base py-2 px-5 text-white capitalize font-semibold rounded-sm flex justify-center items-center gap-2' style={{ width: '100%' }}>
                Sign Up With Google
            </button>
        </div>
    );
};

export default SocialLogin;