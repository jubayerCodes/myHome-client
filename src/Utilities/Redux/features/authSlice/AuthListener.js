import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, clearUser, setError, setRole, setUser } from "./authSlice";
import usersApi from "../api/usersApi";

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (currentUser) => {
        if (currentUser) {
          dispatch(
            usersApi.endpoints.getUser.initiate(currentUser?.email)
          ).then((data) => {
            const { data: user } = data;

            dispatch(setRole(currentUser?.email));

            dispatch(
              setUser({
                uid: currentUser?.uid,
                firstName: user?.firstName,
                lastName: user?.lastName,
                displayName: currentUser?.displayName,
                email: currentUser?.email,
                photoURL: currentUser?.photoURL,
              })
            );
          });
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
