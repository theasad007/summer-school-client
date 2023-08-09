import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
import axios from "axios";
const auth = getAuth(app);


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    // Email Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email Login
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google SIgnUp/SingIn
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    // SignOut 
    const logOut = () => {
        return signOut(auth)
    }

    // Keep Track of Users Has or No
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser);
            // Get and Set JWT
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                .then(data => {
                    // console.log(data)
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else {
                localStorage.removeItem('access-token')
            }

            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, []);


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        emailLogin,
        googleLogin,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;