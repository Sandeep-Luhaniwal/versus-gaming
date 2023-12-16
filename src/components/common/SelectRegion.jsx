import React from 'react'

const SelectRegion = ({setLocation}) => {
  return (
      <>
          <div className='absolute min-h-full top-0 start-0 w-full overflow-hidden'>
              <div onClick={() => setLocation(false)} className='absolute z-10 w-full min-h-full h-full top-0 start-0'></div>
              <div className="relative z-20 top-16 start-[220px] xl:start-[20%] w-[116px]">
                  <div className="flex gap-1 bg-black-600 p-2 rounded-xl">
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