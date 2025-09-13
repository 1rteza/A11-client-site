import React, { use } from 'react';
import loginLottie from '../assets/lotties/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import './Register.css'
import Menu from './Menu';


const Login = () => {


      const {signInUser,signInWithGoogle} = use(AuthContext)
    
    
        const handleLogin = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
    
            signInUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(e => {
                console.log(e);
            })
        }

        const handleGoogleLogin = () => {
            signInWithGoogle()
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            })
        }


    return (
        <div className="hero min-h-screen pb-10 md:py-15 bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 dark-toggle banner">
            <div className="hero-content w-[90%] flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left">
                    <Lottie animationData={loginLottie} className='w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 max-w-full' loop={true}></Lottie>
                </div>
                <div className="card bg-white/80 shadow-xl shadow-blue-100 w-full max-w-sm shrink-0 text-blue-500 hover:shadow-2xl hover:shadow-blue-200/50 dark-toggle reg">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <h1 className="text-4xl md:text-5xl font-bold">Login now!</h1>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input bg-blue-500 text-white" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input bg-blue-500 text-white" placeholder="Password" />
                                <button className="mt-6 btn btn-lg border-0 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg text-xs md:text-sm dark-toggle">Login</button>
                                <div className="divider text-blue-500">OR</div>
                                <button onClick={handleGoogleLogin} className="btn btn-lg text-xs md:text-sm rounded-lg bg-white text-black border-[#e5e5e5] hover:border-0 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <Menu></Menu>
        </div>
    );
};

export default Login;