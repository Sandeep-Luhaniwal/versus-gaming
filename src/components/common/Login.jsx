import React, { useState } from 'react'
import { CrossIcon, EyeCloseIcon, EyeIcon, GoogleIcon } from './Icons'
import { loginIconData } from './Helper'
import Link from 'next/link'
import Signup from './Signup'

const Login = ({ setActiveButton }) => {
    const [show, setShow] = useState('password');
    const [showLogin, setShowLogin] = useState(false);

    const toggleInputType = () => {
        setShow((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <>
            <div onClick={() => setActiveButton(false)} className='absolute bg-black opacity-[0.4] z-20 w-full min-h-full h-full top-0 start-0'></div>
            <div className="container max-w-[1440px] mx-auto py-3 min-h-[calc(100vh-75px)] sm:min-h-[calc(100vh-81px)] flex justify-center items-center">
                <div className="!max-w-[480px] !w-full bg-black-500 rounded-xl relative z-30">
                    <div className="flex justify-between items-center px-4 py-3 border-b-[1px] border-lightBlack">
                        <p className='uppercase font-bold leading-4 text-white text-md font-normalidad'>Login</p>
                        <span onClick={() => setActiveButton(false)} className='group'><CrossIcon /></span>
                    </div>
                    <div className="p-4 sm:p-6">
                        <div className="w-full flex gap-4 pb-4 sm:pb-6 border-b-[1px] border-lightBlack">
                            {loginIconData.map((data, index) => {
                                return (
                                    <div key={index} className='w-1/3'>
                                        <Link href={data.url} target='_blank' className="p-4 bg-lightBlack rounded-lg flex justify-center transition-all group cursor-pointer hover:bg-green-yellow">
                                            {data.icon}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                        <form>
                            <div className="py-4 sm:py-6">
                                <label htmlFor='email' className='text-white font-normalidad font-normal leading-6 tracking-[0.16px]'>Email</label>
                                <input id='email' required className='autofill:bg-black w-full mt-2 mb-4 py-3 px-4 rounded-xl bg-black text-black-400 placeholder:text-black-400 focus:outline-none font-normalidad font-normal leading-4 tracking-[0.14px] text-sm' type="email" placeholder='Your email here' />
                                <label htmlFor='password' className='text-white font-normalidad font-normal leading-6 tracking-[0.16px] '>Password</label>
                                <div className="flex justify-between items-center bg-black mt-2 pe-4 rounded-xl">
                                    <input type={show} id='password' required className='autofill:bg-black w-full py-4 rounded-xl ps-4 pe-3 bg-black text-black-400 placeholder:text-black-400 focus:outline-none font-normalidad font-normal leading-4 tracking-[0.14px] text-sm' placeholder='Your passwrod here' />
                                    <span className='group' onClick={toggleInputType}>
                                        {show === 'password' ? <EyeCloseIcon /> : <EyeIcon />}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Link href="#" className="text-white font-normalidad text-sm tracking-[0.14px] leading-4 hover:opacity-[0.5] duration-300 transition-all">Forgot password</Link>
                            </div>
                            <button type='submit' className="text-black my-4 sm:my-6 uppercase bg-green-yellow hover:bg-white transition-all duration-300 w-full px-6 py-4 text-center font-normalidad font-medium text-md rounded-xl tracking-[0.14px] leading-4">login</button>
                        </form>
                        <p className='text-center text-white font-normalidad font-sm font-normal tracking-[0.14px] leading-4'>Don&apos;t have an account?
                            {" "}<span className='hover:opacity-[0.4] transition-all duration-300 text-green-yellow cursor-pointer' onClick={() => setShowLogin(true)}>
                                Sign Up.
                            </span></p>
                    </div>
                </div>
            </div>
            {showLogin && <Signup setActiveButton={setActiveButton} setShowLogin={setShowLogin} />}
        </>
    )
}

export default Login