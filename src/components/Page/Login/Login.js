import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import Loading from '../../Loading/Loading';
const Login = () => {
    // context
    const { emailSignIn, logOut, loading, setLoading, googleSingIn } = useContext(AuthProvider);

    // Email sign in
    const emailHandel = (e) => {
        e.preventDefault()
        const common = e.target;
        const email = common.email.value
        const password = common.password.value;
        console.log(email, password)
        // email sing in
        emailSignIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoading(false)
                console.log(user);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }

    // google handel
    const googleHandel = () => {
        googleSingIn()
            .then((result) => {
                // Message 
                toast.success('Successfully Sign in')
                setLoading(false)
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }

    // loading
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <section className="fxt-template-animation fxt-template-layout6 loaded" >
                <div className="fxt-header">
                    <a href="/" className="fxt-logo">REPLIQ</a>
                </div>
                <div className="fxt-content">
                    <div className="fxt-form">
                        <h2>Login for new account</h2>
                        <form onSubmit={emailHandel}>

                            <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-3">
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-4">
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-5">
                                    <button type="submit" className="fxt-btn-fill">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="fxt-footer">
                        <ul className="fxt-socials">
                            <li className="fxt-facebook fxt-transformY-50 fxt-transition-delay-6">
                                <Link onClick={googleHandel}><FcGoogle></FcGoogle></Link>
                            </li>
                        </ul>
                        <div className="fxt-transformY-50 fxt-transition-delay-10">
                            <p> Create an account?<Link to="/signUp" className="switcher-text2 inline-text">Register</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;