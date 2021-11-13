
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useEffect, useState } from "react";

import firstAuthentication from "../Pages/Login/Firebase/firebase.init";
firstAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [photoURL, setPhotoUrl] = useState('')

    const auth = getAuth();

    const registerUser = (email, password, history, name) => {

        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name, photoURL: photoURL }
                setUser(newUser)
                saveUser(email, name, photoURL);


                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsloading(false));

    }

    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsloading(false));
    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://guarded-refuge-97562.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }



    const loginUser = (email, password, location, history) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination);
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsloading(false));
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
            } else {
                // user na Paoya geele
                setUser({})
            }

            setIsloading(false)
        });

        return (unsubscribe)
    }, [auth])


    useEffect(() => {
        fetch(`https://guarded-refuge-97562.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])




    return {
        admin,
        authError,
        user,
        registerUser,
        isLoading,
        logOut,
        loginUser,
        setPhotoUrl

    }

}
export default useFirebase;