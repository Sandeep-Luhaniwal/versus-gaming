import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BellIcon, CrossIcon, DownArrowIcon, GamepadIcon, LocationTargetIcon, LoginArrowIcon, MenuIcon, VpagelogoIcon, WalletIcon } from './Icons'
import { navLinks } from './Helper'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Login from '../form/Login'
import SelectRegion from '../SelectRegion'
import Wallet from '../Wallet'
import Notifications from '../Notifications'
import ProfileView from '../profile/ProfileView'
import Gamepad from '../Gamepad'

const Header = () => {
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState(false);
    const [walletActive, setWalletActive] = useState(false);
    const [activeLink, setActiveLink] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const [activeBellIcon, setActiveBellIcon] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);

    useEffect(() => {
        // Iterate through navLinks and check if the current URL matches any of the links
        const currentLink = navLinks.find((link) => router.pathname === link.url);
        // Set the active link based on the match
        setActiveLink(currentLink ? currentLink.url : '');

    }, [router.pathname]);
    useEffect(() => {
        if (menu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [menu]);

    return (
        <>
            <nav className='bg-lightBlack border-b-[1px] border-lightGrey overflow-hidden z-[1000] sticky top-0'>
                <div className="container max-w-[1440px] mx-auto xl:px-6">
                    <div className="flex items-center h-12 sm:h-14 justify-between w-full">
                        <div className="flex items-center h-full">
                            <div className="lg:pe-5 xl:pe-6 lg:border-e-[2px] border-lightGrey h-full flex items-center">
                                <Link href="/">
                                    <Image loading="eager" className='sm:h-4 sm:max-w-[124.24px] sm:w-full cursor-pointer' src="/assets/images/webp/page-logo.webp" height={13} width={100} alt='page logo' />
                                </Link>
                            </div>
                            <div className="hidden lg:flex gap-5 px-5 xl:px-6 xl:gap-6">
                                <div onClick={() => setShow(true)} className={` flex gap-2 items-center cursor-pointer group`}>
                                    <GamepadIcon show={show} />
                                    <DownArrowIcon show={show} />
                                </div>
                                <div onClick={() => setLocation(true)} className="flex gap-2 items-center cursor-pointer group">
                                    <LocationTargetIcon location={location} />
                                    <DownArrowIcon location={location} />
                                </div>
                            </div>
                            <div className="hidden lg:flex items-center border-s-[2px] border-lightGrey h-full">
                                {navLinks.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <Link href={data.url}
                                                className={`hover:text-green-yellow text-center transition-all font-normalidad uppercase text-black-400 font-bold ms-5 xl:ms-6 text-sm
                                                        ${data.url === activeLink ? "text-green-yellow" : ""}`}>
                                                {data.navLink}
                                            </Link>
                                        </div>
                                    );
                                })}
                                <div className="ms-2">
                                    <p className='text-darkGrey px-2 py-[2px] text-xs font-normalidad bg-lightGrey rounded-[40px]'>
                                        Coming Soon
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center h-full">
                            <div className="lg:border-e-[2px] border-lightGrey h-full flex items-center pe-4">
                                <button onClick={() => setActiveButton(true)} className='hidden lg:flex sm:tracking-[0.14px] sm:leading-6 items-center h-10 text-black bg-green-yellow p-2 sm:py-3 sm:ps-3 sm:pe-4 font-normalidad text-md uppercase font-medium rounded-xl hover:bg-white duration-300 group transition-all'>
                                    B2B services
                                </button>
                            </div>
                            <button onClick={() => setActiveButton(true)} className='hidden ms-4 lg:flex sm:tracking-[0.14px] sm:leading-6 items-center h-10 text-black bg-green-yellow p-2 sm:py-3 sm:ps-3 sm:pe-4 font-normalidad text-md uppercase font-medium rounded-xl hover:bg-white duration-300 group transition-all'>
                                Log In
                            </button>
                            <button onClick={() => setActiveButton(true)} className='lg:ms-2 flex text-center sm:tracking-[0.14px] sm:leading-6 items-center h-10 text-black bg-green-yellow p-2 sm:py-3 sm:ps-3 sm:pe-4 font-normalidad text-md uppercase font-medium rounded-xl hover:bg-white duration-300 group transition-all'>
                                sign up
                            </button>
                            <div className="lg:hidden ms-8">
                                <div className={`${menu ? "hidden" : ""} cursor-pointer group`} onClick={() => setMenu(true)}>
                                    <MenuIcon />
                                </div>
                                <div className={`${menu ? "block relative z-[100]" : "hidden"} group`} onClick={() => setMenu(false)}>
                                    <CrossIcon />
                                </div>
                            </div>
                        </div>
                        <div className="hidden gap-4 sm:gap-5 xl:gap-6 items-center h-full lg:border-s-[2px] border-lightGrey lg:ps-5 xl:ps-6">
                            <button onClick={() => setActiveButton(true)} className='hidden sm:flex sm:tracking-[0.14px] sm:leading-6 items-center gap-1 sm:gap-2 text-black bg-green-yellow p-2 sm:py-3 sm:ps-3 sm:pe-4 font-normalidad text-sm uppercase font-medium rounded-xl hover:bg-white duration-300 group transition-all'>
                                <VpagelogoIcon />
                                membership
                            </button>
                            <div onClick={() => setActiveBellIcon(true)} className="relative hover:translate-x-[-2px] transition-all duration-300">
                                <BellIcon activeBellIcon={activeBellIcon} />
                                <div className={`${activeBellIcon ? "!hidden" : " "} h-4 w-4 rounded-full bg-green-yellow flex justify-center items-center font-normalidad text-sm font-normal absolute top-[-8px] end-[-8px]`}>5</div>
                            </div>
                            <span onClick={() => setWalletActive(true)} className="group">
                                <WalletIcon walletActive={walletActive} />
                            </span>
                            <div onClick={() => setActiveProfile(true)} className="flex group items-center gap-[7px] cursor-pointer">
                                <Image src="/assets/images/png/login-img.png" height={24} width={24} alt='login page image' className='border-[1px] rounded-full border-lightBlack' />
                                <DownArrowIcon activeProfile={activeProfile} width={8} height={6} />
                            </div>
                        </div>
                        <div className={`${menu ? "fixed gap-5 h-[calc(100vh-49px)] sm:h-[calc(100vh-57px)] w-[300px] bg-red-500 flex flex-col top-[49px] sm:top-[57px] end-0 z-50 transition-all justify-center items-center" : "fixed end-[-100%] transition-all h-[calc(100vh-49px)] sm:h-[calc(100vh-57px)] top-[49px] sm:top-[57px]"} lg:hidden`}>
                            {/* <div onClick={() => setMenu(false)} className='absolute bg-black opacity-[0.4] z-20 w-full min-h-full h-full top-0 start-0'></div> */}
                            <div className="flex gap-4">
                                <div onClick={() => { setShow(true); setMenu(false) }} className={`flex gap-2 items-center cursor-pointer group`}>
                                    <GamepadIcon show={show} />
                                    <DownArrowIcon show={show} />
                                </div>
                                <div onClick={() => { setLocation(true); setMenu(false) }} className="flex gap-2 items-center cursor-pointer group">
                                    <LocationTargetIcon location={location} />
                                    <DownArrowIcon location={location} />
                                </div>
                            </div>
                            {navLinks.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <Link href={data.url}
                                            className={`hover:text-green-yellow text-center transition-all font-normalidad uppercase text-black-400 font-bold text-sm
                                                        ${data.url === activeLink ? "text-green-yellow" : ""}`}>
                                            {data.navLink}
                                        </Link>
                                    </div>
                                );
                            })}
                            <p className='text-darkGrey px-2 py-[2px] text-xs font-normalidad bg-lightGrey rounded-[40px]'>
                                Coming Soon
                            </p>
                            <button onClick={() => { setActiveButton(true); setMenu(false) }} className='flex sm:hidden sm:tracking-[0.14px] sm:leading-6 items-center gap-1 sm:gap-2 text-black bg-green-yellow p-2 sm:py-3 sm:ps-3 sm:pe-4 font-normalidad text-sm uppercase font-medium rounded-xl hover:bg-white duration-300 group transition-all'>
                                <VpagelogoIcon />
                                membership
                            </button>

                        </div>
                    </div>
                </div>
            </nav >
            {activeButton ? <Login activeButton={activeButton} setActiveButton={setActiveButton} /> : ''}
            {show ? <Gamepad setShow={setShow} /> : ''}
            {location ? <SelectRegion setLocation={setLocation} /> : ''}
            {walletActive ? <Wallet setWalletActive={setWalletActive} /> : ''}
            {activeBellIcon ? <Notifications activeBellIcon={activeBellIcon} setActiveBellIcon={setActiveBellIcon} /> : ''}
            {activeProfile ? <ProfileView setActiveProfile={setActiveProfile} /> : ''}
        </>
    )
}

export default Header