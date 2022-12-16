import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, GithubAuthProvider, updateProfile, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isAdmin,setIsAdmin] = useState(false);


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
                savedUsers(email,userName,'POST');
                setError('');
                // savedUsers(email,displayName:userName,'POST');
                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/')
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));

    }

    // login user with email and password
    const loginUser = (email, password, location, navigate) => {
        console.log(email,password);
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
                savedUsers(user.email,user.displayName,'PUT');
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
                savedUsers(user.email,user.displayName,'PUT');
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
            //    getIdToken(user)
            //    .then(idToken => console.log('idToken',idToken))
               getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken',idToken));
                setUser(user);
                
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth]);

    // admin trigger this email is admin checking
    useEffect(() => {
        fetch(`https://eid-collection-server1.onrender.com/foundAdmin/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsAdmin(data.admin)
        });
    },[setIsAdmin,user.email]);

    // saved user to the database
    const savedUsers = (email,displayName,method) => {
       const user = {email,displayName}
       console.log('user send',user);
        fetch('https://eid-collection-server1.onrender.com/registerUsers',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return {
        registerUser,
        loginUser,
        error,
        isLoading,
        user,
        logOut,
        isAdmin,
        googleLoginSystem,
        githubLoginSystem
    }

}

export default useFirebase;