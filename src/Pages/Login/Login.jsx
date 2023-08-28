// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import LoginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
    const {singIn}=useContext(AuthContext)
 const handellogin=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
    singIn(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    })
 }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={LoginImg} alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handellogin} className="card-body">
                            <h1 className="text-5xl text-center">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='py-5 text-center font-semibold'> You Have Create New Account? <Link to='/singup' className='text-[#FF3811] font-semibold'>Sing Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;