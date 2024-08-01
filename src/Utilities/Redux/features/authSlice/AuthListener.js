import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, clearUser, setError, setUser } from "./authSlice";

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (currentUser) => {
        if (currentUser) {
          dispatch(
            setUser({
              uid: currentUser?.uid,
              name: currentUser?.displayName,
              email: currentUser?.email,
              photoURL: currentUser?.photoURL,
            })
          );
        } else {
          dispatch(clearUser());
        }
      },
      (error) => {
        dispatch(setError(error));
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default AuthListener;
