import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";


const page = () => {
    return (
        <div className='w-[86%] mx-auto my-24'>
            <div className='grid grid-cols-2 gap-12'>
                <div>
                    <Image src="/assets/images/login/login.svg" width={540} height={540} alt='login img' />
                </div>
                <div className='border-2 border-[#D0D0D0] shadow-xl rounded-md'>
                    <h2 className='text-center my-8 text-4xl font-semibold text-[#444444]'>Login</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white text-lg">Login</button>
                        </div>
                        <div className='text-center'>
                            <p className='my-4 text-[#444444] font-semibold'>Or Sign In with</p>
                            <div className='w-[200px] mx-auto flex justify-between'>
                                <div className='p-4 bg-white hover:bg-[#dbdfe0] rounded-full cursor-pointer text-2xl text-[#3B5998]'><FaFacebook /></div>
                                <div className='p-4 bg-white hover:bg-[#dbdfe0] rounded-full cursor-pointer text-2xl text-[#0A66C2]'><FaLinkedinIn /></div>
                                <div className='p-4 bg-white hover:bg-[#dbdfe0] rounded-full cursor-pointer text-2xl text-[#EB4132]'><FaGoogle />
                                </div>
                            </div>
                            <p className='text-[#737373] font-semibold mt-8'>Not have an account yet ? <Link href={"/singup"} className='text-primary'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;