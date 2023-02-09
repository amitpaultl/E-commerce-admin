import React, { createContext } from 'react';
import app from '../Page/Login/Firebase'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from "firebase/auth";
const auth = getAuth(app)
export const AuthProvider = createContext()

const AuthContext = ({ children }) => {

    // google provider
    const googleProvider = new GoogleAuthProvider()

    // Google SignIn
    const signInWithGoogle = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Email sing up 
    const emailSignUp = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //   Email Verify
    const emailVerify = () => {
        // setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const authInfo = { signInWithGoogle, emailSignUp,emailVerify }
    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;