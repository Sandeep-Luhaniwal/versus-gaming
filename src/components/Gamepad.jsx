import React from 'react'
import { ApexIcon, FortniteIcon, RocketLeagueIcon, ValorantIcon } from './common/Icons'

const Gamepad = ({setShow}) => {
    return (
        <>
            <div className='absolute h-full top-0 start-0 w-full'>
                <div onClick={() => setShow(false)} className='absolute bg-black opacity-[0.4] w-full min-h-full h-full top-0 start-0'></div>
                <div className="container max-w-[1440px] mx-auto w-full">
                    <div className="flex gap-1 bg-black-600 p-2 rounded-xl w-[220px] mt-[72px] ms-10 sm:ms-14 md:ms-36 z-20 relative">
                        <div className="w-12 h-12 bg-lightBlack rounded-lg flex justify-center items-center group/item hover:bg-lightGrey transition-all duration-300">
                            <ValorantIcon />
                        </div>
                        <div className="w-12 h-12 bg-lightBlack rounded-lg flex justify-center group/item items-center hover:bg-lightGrey transition-all duration-300">
                            <ApexIcon />
                        </div>
                        <div className="w-12 h-12 bg-lightBlack rounded-lg flex justify-center group/item items-center hover:bg-lightGrey transition-all duration-300">
                            <FortniteIcon />
                        </div>
                        <div className="w-12 h-12 bg-lightBlack rounded-lg flex justify-center group/item items-center hover:bg-lightGrey transition-all duration-300">
                            <RocketLeagueIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gamepad