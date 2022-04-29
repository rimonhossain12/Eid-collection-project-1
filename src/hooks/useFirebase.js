import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, GithubAuthProvider, updateProfile, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // sign in email and password
    const registerUser = (userName, email, password, navigate) => {
        console.log('user register data', email, password, userName);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const updatedUser = { email, displayName: userName }
                setUser(updatedUser);
                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {
                }).catch((error) => {
                });
                setError('');
                navigate('/')
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));

    }

    // login user with email and password
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // sign in with google
    const googleLoginSystem = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));

    }

    // sign in with github
    const githubLoginSystem = (location,navigate) => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setError(error.message);
            });
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
        logOut,
        googleLoginSystem,
        githubLoginSystem
    }

}

export default useFirebase;