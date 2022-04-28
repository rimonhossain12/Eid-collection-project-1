import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    const auth = getAuth();

    // sign in email and password
    const registerUser = (email, password, name) => {
        console.log(email, password);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));

    }

    // login user with email and password
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                // useLocation()
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // logout 
    const logOut = () => {
        signOut(auth).then(() => {
            setIsLoading(false);
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }


    // observe user
    useEffect(() => {
         onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth])

    return {
        registerUser,
        loginUser,
        error,
        isLoading,
        user,
        logOut
    }

}

export default useFirebase;