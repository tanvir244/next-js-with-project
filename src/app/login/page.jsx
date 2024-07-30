import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
                            <button className="btn btn-primary text-white">Sign Up</button>
                        </div>
                        <p className='text-[#737373] font-semibold mt-8'>Not have an account ? <Link href={"/singup"} className='text-primary'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;