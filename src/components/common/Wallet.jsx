import React, { useState } from 'react'
import { BlackArrowDownIcon, BlackArrowRightIcon, CrossIcon, EuroIcon, GreyArrowRightIcon, YellowArrowUpIcon } from './Icons'
import Image from 'next/image'
import { depositData } from './Helper';

const Wallet = ({ setWalletActive }) => {
    const [activetab, setActiveTab] = useState(true);
    const [show, setShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleDeposit = (title) => {
        setSelectedValue(title);
        setShow(true);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className='absolute top-0 w-full h-full'>
                <div onClick={() => setWalletActive(false)} className='absolute bg-black opacity-[0.4] z-10 w-full min-h-full h-full top-0 end-0'></div>
                <div className={`container max-w-[1440px] xl:px-6 w-full mx-auto flex justify-end`}>
                    <div className={`sm:me-12 md:me-24 lg:me-16 mt-[72px] max-w-[480px] relative z-20 w-full bg-black-500 border-b-[1px] border-lightBlack rounded-xl`}>
                        <div className={`p-4 sm:p-6 ${activetab === "First" ? "hidden" : ""} ${activetab === "Second" ? "hidden" : ""}`}>
                            <div className={`p-4 sm:p-6 bg-lightBlack rounded-xl relative overflow-hidden`}>
                                <Image priority className='absolute bottom-0 right-0 object-contain h-full' src='/assets/images/png/Versus-Icon.png' height={100} width={133} alt='versus icon' />
                                <p className='text-md text-grey-400 font-normalidad leading-4 tracking-[0.16px]'>Balance</p>
                                <p className='text-xl pt-3 font-bold uppercase text-white font-normalidad flex leading-6 tracking-[0.16px]'><EuroIcon /><span className='ms-3'>1.950,50</span></p>
                            </div>
                            <div className={`flex pt-4 gap-4 w-full`}>
                                <div onClick={() => handleTabClick("First")} className={`p-4 sm:p-6 bg-green-yellow cursor-pointer rounded-xl w-full group `}>
                                    <BlackArrowDownIcon />
                                    <p className={`text-md pt-4 font-medium uppercase text-black font-normalidad flex leading-4 tracking-[0.16px]`}>
                                        Deposit
                                    </p>
                                </div>
                                <div onClick={() => handleTabClick("Second")} className={`${activetab === "Second" ? " !bg-green-yellow" : ""} p-4 sm:p-6 bg-lightBlack cursor-pointer rounded-xl w-full group `}>
                                    <YellowArrowUpIcon />
                                    <p className={`text-md pt-4 font-medium uppercase text-white font-normalidad flex leading-4 tracking-[0.16px]`}>
                                        Withdraw
                                    </p>
                                </div>
                            </div>
                        </div>
                        {activetab === "First" && (
                            <div className={`${show ? "hidden" : ""}`}>
                                <div className='px-4 py-3 border-b-[1px] border-lightBlack'>
                                    <p className="text-white flex uppercase font-normalidad font-bold fs-md leading-4 items-center">
                                        <span onClick={() => setActiveTab(false)} className='me-2 group transition-all duration-300'><GreyArrowRightIcon /></span>
                                        deposit
                                    </p>
                                </div>
                                <div className="p-4 sm:p-6 border-b-[1px] border-lightBlack">
                                    {depositData.map((data, index) => {
                                        return (
                                            <div key={index} className={`${data.style} flex justify-between p-2 ps-4 bg-lightBlack items-center rounded-xl`}>
                                                <p className="text-white text-lg font-normalidad font-medium leading-5 tracking-[0.2px]">€ {data.title}</p>
                                                <button onClick={() => handleDeposit(data.title)} className='bg-green-yellow border-0 flex items-center gap-2 text-md font-medium font-normalidad text-black leading-4 p-3 ps-4 tracking-[0.16px] uppercase rounded-xl hover:bg-white transition-all duration-300'>{data.button} <BlackArrowRightIcon /></button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="p-4">
                                    <button onClick={() => setShow(true)} className='py-4 px-6 bg-green-yellow w-full text-md font-medium font-normalidad text-black leading-4 tracking-[0.16px] uppercase rounded-xl hover:bg-white transition-all duration-300'>Continue</button>
                                </div>
                            </div>
                        )}
                        {activetab === "Second" && (
                            <>
                                <div className='px-4 py-3 border-b-[1px] border-lightBlack'>
                                    <p className="text-white flex uppercase font-normalidad font-bold fs-md leading-4 items-center">
                                        <span onClick={() => setActiveTab(false)} className='me-2 group transition-all duration-300'><GreyArrowRightIcon /></span>
                                        Withdraw
                                    </p>
                                </div>
                                <div className="p-4 sm:p-6 border-b-[1px] border-lightBlack">
                                    <p className="text-white text-md leading-6 tracking-[0.16px] font-normalidad pb-2">
                                        Credits to be withdrawn
                                    </p>
                                    <div className="p-4 bg-black rounded-xl border-[1px] border-lightBlack border-solid">
                                        <p className='text-white font-normalidad text-xl leading-6 font-bold'>
                                            <span className="text-green-yellow">€</span> {" "}1.950,50
                                        </p>
                                    </div>
                                    <div className="p-4 my-4 rounded-xl border-[1px] border-lightBlack border-solid">
                                        <div className="flex justify-between pb-3 border-b-[1px] border-lightBlack border-solid">
                                            <p className='font-normalidad text-sm text-grey-400 tracking-[0.14px] leading-4'>Total value that will be withdrawn</p>
                                            <p className='font-normalidad text-sm text-grey-400 tracking-[0.14px] leading-4'>€ 1.950,50</p>
                                        </div>
                                        <div className="flex justify-between pt-3">
                                            <p className='font-normalidad text-sm text-grey-400 tracking-[0.14px] leading-4'>Your balance after withdraw</p>
                                            <p className='font-normalidad text-sm text-grey-400 tracking-[0.14px] leading-4'>€ 0,00</p>
                                        </div>
                                    </div>
                                    <p className='sm:pe-3 font-normalidad font-normal text-sm text-grey-400'>
                                        Your payment will be processed by PayPal. Review their{" "} <span className="text-green-yellow">Privacy Policy here {" "}</span>.
                                        By clicking &quot;Complete Purchase&quot;, you agree to the {" "} <span className="text-green-yellow">Terms of Service</span>{" "}& {" "} <span className="text-green-yellow">Terms of Sale</span>.
                                    </p>
                                </div>

                                <div className="p-4">
                                    <button className='py-4 px-1 bg-green-yellow w-full text-md font-medium font-normalidad text-black leading-4 tracking-[0.16px] uppercase rounded-xl hover:bg-white transition-all duration-300'>
                                        Withdraw
                                    </button>
                                </div>
                            </>
                        )}
                        {show && (
                            <>
                                <div className='px-4 py-3 border-b-[1px] border-lightBlack flex justify-between items-center'>
                                    <p className="text-white flex uppercase font-normalidad font-bold fs-md leading-4 items-center">
                                        <span onClick={() => setShow(false)} className='me-2 group transition-all duration-300'><GreyArrowRightIcon /></span>
                                        Deposit
                                    </p>
                                    <div onClick={() => setWalletActive(false)} className="group">
                                        <CrossIcon />
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6 border-b-[1px] border-lightBlack">
                                    <div className="p-4 bg-black-500 rounded-xl border-[1px] border-lightGrey">
                                        <p className='text-center text-grey-400 text-md font-normalidad font-normal trackin-[0.16px] leading-4'>
                                            Your balance
                                            {" "}<span className="text-white">€ 1.950,50</span>
                                        </p>
                                    </div>
                                    <p className="py-4 sm:pt-6 text-white font-normalidad leading-4 tracking-[0.16px] text-md font-medium">
                                        You are depositing
                                    </p>
                                    <div className="p-4 sm:p-6 bg-lightBlack rounded-xl">
                                        <p className='text-white font-normalidad text-[30px] leading-[30px] font-bold text-center'>
                                            <span className="text-green-yellow">€</span> {selectedValue || "10,00"}
                                        </p>
                                    </div>
                                    <p className='pt-4 sm:pe-3 sm:pt-6 font-normalidad font-normal text-sm text-grey-400'>
                                        Your payment will be processed by PayPal. Review their{" "} <span className="text-green-yellow">Privacy Policy here {" "}</span>.
                                        By clicking &quot;Complete Purchase&quot;, you agree to the {" "} <span className="text-green-yellow">Terms of Service</span>{" "}& {" "} <span className="text-green-yellow">Terms of Sale</span>.</p>
                                </div>
                                <div className="p-4">
                                    <button className='py-4 px-1 text-[14px] bg-green-yellow w-full sm:text-md font-medium font-normalidad text-black leading-4 tracking-[0.16px] uppercase rounded-xl hover:bg-white transition-all duration-300'>
                                        Complete Purchase with PayPal
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Wallet