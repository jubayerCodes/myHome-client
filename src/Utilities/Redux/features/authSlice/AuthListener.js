import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, clearUser, setError, setRole, setUser } from "./authSlice";

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (currentUser) => {
        if (currentUser) {
          dispatch(setRole(currentUser?.email));

          dispatch(
            setUser({
              uid: currentUser?.uid,
              displayName: currentUser?.displayName,
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
