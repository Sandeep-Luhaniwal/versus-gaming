import React from 'react'
import { ApexIcon, FortniteIcon, RocketLeagueIcon, ValorantIcon } from './Icons'

const Gamepad = ({setShow}) => {
    return (
        <>
            <div className='absolute min-h-full top-0 start-0 w-full overflow-hidden'>
                <div onClick={() => setShow(false)} className='absolute z-10 w-full min-h-full h-full top-0 start-0'></div>
                <div className="relative z-20 top-16 start-[180px] xl:start-[16%] w-[220px]">
                    <div className="flex gap-1 bg-black-600 p-2 rounded-xl">
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