import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle } from "../../../Utilities/Redux/features/authSlice/authSlice";
import { useNavigate } from "react-router-dom";



const SocialLogin = ({ className }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        dispatch(signInWithGoogle())
            .then(() => {

                navigate("/dashboard");
            });
    }

    return (
        <div className={`${className}`}>
            <button onClick={() => handleGoogleLogin()} className='bg-[#ed5565] hover:bg-black duration-300 text-base py-2 px-5 text-white capitalize font-semibold rounded-sm flex justify-center items-center gap-2' style={{ width: '100%' }}>
                Sign Up With Google
            </button>
        </div >
    );
};

export default SocialLogin;