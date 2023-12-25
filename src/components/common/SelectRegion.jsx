import React from 'react'

const SelectRegion = ({ setLocation }) => {
    return (
        <>
            <div className='absolute h-full top-0 start-0 w-full'>
                <div onClick={() => setLocation(false)} className='absolute bg-black opacity-[0.4] z-10 w-full h-full top-0 start-0'></div>
                <div className="container max-w-[1440px] mx-auto w-full">
                    <div className="flex gap-1 bg-black-600 p-2 rounded-xl w-[116px] relative z-20 mt-[72px] ms-16 sm:ms-32 lg:ms-60">
                        <div className="w-12 h-12 bg-lightBlack rounded-lg flex justify-center items-center group/item hover:bg-lightGrey transition-all duration-300">
                            <p className='font-sm text-darkGrey font-normalidad font-medium leading-4 group-hover/item:text-green-yellow transition-all duration-300 tracking-[0.16px]'>NA</p>
                        </div>
                        <div className="w-12 h-12 bg-lightBlack rounded-lg flex justify-center group/item items-center hover:bg-lightGrey transition-all duration-300">
                            <p className='font-sm text-darkGrey font-normalidad font-medium leading-4 group-hover/item:text-green-yellow transition-all duration-300 tracking-[0.16px]'>EU</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectRegion