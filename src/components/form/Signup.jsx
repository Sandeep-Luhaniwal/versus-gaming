import React, { useEffect, useState } from 'react'
import { CrossIcon, EyeCloseIcon, EyeIcon } from '../common/Icons'
import { loginIconData } from '../common/Helper'
import Link from 'next/link'

const Signup = ({ setActiveButton, setShowLogin, activeButton }) => {
    const [show, setShow] = useState('password');
    const [confirm, setConfirm] = useState('password');

    const passwordShow = () => {
        setShow((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };
    const confirmShow = () => {
        setConfirm((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };
    useEffect(() => {
        if (activeButton) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [activeButton]);
    return (
        <>
            <div className='absolute top-0 w-full h-full transition-all duration-1000'>
                <div onClick={() => setActiveButton(false)} className='absolute bg-black opacity-[0.4] z-20 w-full min-h-full h-full top-0 start-0'></div>
                <div className="container max-w-[1440px] xl:px-6 mx-auto sm:py-3 p-0 h-full flex justify-center items-end sm:items-center">
                    <div className={`!max-w-[480px] !w-full bg-black-500 rounded-xl sm:mt-14 relative z-30 `}>
                        <div className="overflow-scroll scroll-smooth !p-0 !mb-0 h-[520px] ">
                            <div className="flex justify-between items-center px-4 py-3 border-b-[1px] border-lightBlack">
                                <p className='uppercase font-bold leading-4 text-white text-md font-normalidad'>Sing up</p>
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
                                        <label htmlFor='username' className='text-white font-normalidad font-normal leading-6 tracking-[0.16px]'>Username</label>
                                        <input id='username' required className='autofill:bg-black w-full mt-2 mb-4 py-3 px-4 rounded-xl bg-black text-black-400 placeholder:text-black-400 focus:outline-none font-normalidad font-normal leading-4 tracking-[0.14px] text-sm' type="text" placeholder='Your email here' />
                                        <label htmlFor='useremail' className='text-white font-normalidad font-normal leading-6 tracking-[0.16px]'>Email</label>
                                        <input id='useremail' required className='autofill:bg-black w-full mt-2 mb-4 py-3 px-4 rounded-xl bg-black text-black-400 placeholder:text-black-400 focus:outline-none font-normalidad font-normal leading-4 tracking-[0.14px] text-sm' type="email" placeholder='Your email here' />
                                        <label htmlFor='userpassword' className='text-white font-normalidad font-normal leading-6 tracking-[0.16px] '>Password</label>
                                        <div className="flex justify-between items-center bg-black mt-2 mb-4 pe-4 rounded-xl">
                                            <input type={show} id='userpassword' required className='autofill:bg-black w-full py-3 rounded-xl ps-4 pe-3 bg-black text-black-400 placeholder:text-black-400 focus:outline-none font-normalidad font-normal leading-4 tracking-[0.14px] text-sm' placeholder='Your passwrod here' />
                                            <span className='group' onClick={passwordShow}>
                                                {show === 'password' ? <EyeCloseIcon /> : <EyeIcon />}
                                            </span>
                                        </div>
                                        <label htmlFor='confirmpassword' className='text-white font-normalidad font-normal leading-6 tracking-[0.16px]'>Confirm Password</label>
                                        <div className="flex justify-between items-center bg-black mt-2 pe-4 rounded-xl">
                                            <input type={confirm} id='confirmpassword' required className='autofill:bg-black w-full py-3 rounded-xl ps-4 pe-3 bg-black text-black-400 placeholder:text-black-400 focus:outline-none font-normalidad font-normal leading-4 tracking-[0.14px] text-sm' placeholder='Your passwrod here' />
                                            <span className='group' onClick={confirmShow}>
                                                {confirm === 'password' ? <EyeCloseIcon /> : <EyeIcon />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-black-400 text-center font-normalidad text-sm tracking-[0.14px] leading-4 ">By signing up, you agree with our
                                            {" "}<Link href="#" className='text-white hover:opacity-[0.5] duration-300 transition-all'>Terms and Privacy Policy.</Link></p>
                                    </div>
                                    <button type='submit' className="text-black my-4 sm:my-6 uppercase bg-green-yellow hover:bg-white transition-all duration-300 w-full px-6 py-4 text-center font-normalidad font-medium text-md rounded-xl tracking-[0.14px] leading-4">Sign Up</button>
                                </form>
                                <p className='text-center text-white font-normalidad font-sm font-normal tracking-[0.14px] leading-4'>Already have an account?{" "}
                                    <span className='hover:opacity-[0.4] transition-all duration-300 text-green-yellow cursor-pointer' onClick={() => setShowLogin(false)}>
                                        Log in.
                                    </span>
                                </p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup