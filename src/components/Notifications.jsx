import React, { useEffect, useState } from 'react';
import { BellIcon, RedCrossIcon, YellowRightIcon } from './common/Icons';
import { notificationsData } from './common/Helper';

const Notifications = ({ setActiveBellIcon, activeBellIcon }) => {
    const [close, setClose] = useState(notificationsData.map(() => true));

    const handleDeclineClick = (index) => {
        setClose((prev) => prev.map((_, i) => (i === index ? false : prev[i])));
    };

    const allclosednotification = close.filter(Boolean);
    useEffect(() => {
        if (activeBellIcon) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [activeBellIcon]);
    return (
        <>
            <div className='absolute top-0 w-full h-full'>
                <div onClick={() => setActiveBellIcon(false)} className='bg-black opacity-[0.4] absolute z-10 w-full min-h-full h-full top-0 end-0'></div>
                <div className={`container max-w-[1440px] xl:px-6 w-full h-full mx-auto flex justify-center items-start sm:justify-end`}>
                    <div className={`sm:me-24 md:me-36 lg:me-36 mt-[72px] max-w-[440px] relative z-20 w-full bg-black-500 border-b-[1px] border-lightBlack rounded-xl`}>
                        <div className="flex flex-col py-4 ps-4">
                            <div className="max-h-[544px] overflow-y-scroll scroll-smooth pe-4 flex gap-4 flex-col">
                                {notificationsData.map((data, index) => {
                                    return (
                                        close[index] && (
                                            <div key={index} className={`bg-lightBlack p-4 pe-6 rounded-xl`}>
                                                <div className='flex w-full'>
                                                    <span>{data.icon}</span>
                                                    <div className='ps-3'>
                                                        <p className='text-white font-normalidad font-normal text-md leading-4 tracking-[0.16px] overflow-hidden' style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2 }}>
                                                            {data.title}
                                                        </p>
                                                        <p className='text-black-400 font-normalidad font-normal text-md pt-1 leading-4 tracking-[0.14px]'>{data.time}</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between gap-1 lg:gap-2 pt-3'>
                                                    <button className='py-3 max-w-[180px] w-full rounded-xl bg-lightGrey text-white uppercase font-normalidad hover:text-black hover:bg-green-yellow group transition-all duration-300 font-medium text-md leading-4 tracking-[0.16px] flex justify-center gap-1'>
                                                        accept <YellowRightIcon />
                                                    </button>
                                                    <button onClick={() => handleDeclineClick(index)} className='py-3 max-w-[180px] w-full rounded-xl bg-lightGrey text-white uppercase font-normalidad hover:bg-red-orange group transition-all duration-300 font-medium text-md leading-4 tracking-[0.16px] flex justify-center gap-1'>
                                                        decline <RedCrossIcon />
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    )
                                })}
                                {allclosednotification.length === 0 &&
                                    <div className='py-9'>
                                        <div className='mx-auto w-5 pb-4'>
                                            <BellIcon />
                                        </div>
                                        <p className='font-normalidad text-white uppercase leading-5 tracking-[0.16px] text-md font-blod text-center'>No notifications yet</p>
                                        <p className='font-normalidad pt-2 text-black-400 leading-4 tracking-[0.14px] text-sm font-normal text-center'>It looks like you don&apos;t have any new notifications here, so when they appear you can check them here.</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notifications;
