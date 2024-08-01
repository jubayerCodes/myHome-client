import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle } from "../../../Utilities/Redux/features/authSlice/authSlice";



const SocialLogin = ({ className }) => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div className={`${className}`}>
            <button onClick={() => dispatch(signInWithGoogle())} className='bg-[#ed5565] hover:bg-black duration-300 text-base py-2 px-5 text-white capitalize font-semibold rounded-sm flex justify-center items-center gap-2' style={{ width: '100%' }}>
                Sign Up With Google
            </button>
        </div>
    );
};

export default SocialLogin;