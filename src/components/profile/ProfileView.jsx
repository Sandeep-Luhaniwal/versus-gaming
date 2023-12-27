import Image from 'next/image'
import React from 'react'
import { DiscordIcon, SignOutIcon, TeamIcon, TwitchIcon, TwitterIcon, YoutubeIcon } from '../common/Icons'
import { loginData } from '../common/Helper'
import Link from 'next/link'

const ProfileView = ({ setActiveProfile }) => {
  return (
    <>
      <div className='absolute top-0 w-full h-full'>
        <div onClick={() => setActiveProfile(false)} className='absolute bg-black opacity-[0.4] z-10 w-full min-h-full h-full top-0 end-0'></div>
        <div className={`container max-w-[1440px] xl:px-6 w-full mx-auto flex justify-end`}>
          <div className={`mt-[72px] max-w-[320px] relative z-20 w-full bg-black-500 border-b-[1px] border-lightBlack rounded-xl`}>
            <div className="flex flex-col p-4">
              <Image className='rounded-t-xl' src="/assets/images/png/login-profile-image.png" alt="profile image" width={288} height={104} />
              <div className='pt-16 pb-6 bg-lightBlack rounded-b-xl relative'>
                <Image className='absolute top-[-36px] border-[3px] rounded-full border-lightBlack start-1/2 -translate-x-1/2' src="/assets/images/png/login-img.png" alt="profile image" width={80} height={80} />
                <p className='text-center leading-4 text-md tracking-[0.16px] font-normalidad font-medium text-white'>Alisson Rochinski</p>
                <p className='pt-1 text-center leading-4 text-md tracking-[0.14px] font-normalidad font-normal text-black-400'>@rochinski</p>
              </div>
              <div className='p-2 bg-lightBlack rounded-xl mt-3 flex gap-2 items-center'>
                <Image src="/assets/images/svg/team-logo.svg" alt="profile image" width={48} height={48} />
                <p className='font-normalidad text-md leading-4'>
                  <span className='tracking-[0.16px] font-medium text-white'>The Lorem ipsum team</span>
                  <span className='pt-1 text-md tracking-[0.14px] font-normal text-green-yellow flex gap-1 items-center'><TeamIcon fill="#D4FF27" /> 5 players</span>
                </p>
              </div>
              <div className='py-4'>
                {loginData.map((data, index) => {
                  return (
                    <div key={index} className='py-3'>
                      <Link href={data.url} onClick={() => setActiveProfile(false)} className='inline-block cursor-pointer group hover:text-white transition-all duration-300 font-normalidad text-md font-normal leading-4 tracking-[0.16px] text-black-400'><span className='flex items-center gap-2'>{data.icon}{data.title}</span></Link>
                    </div>
                  )
                })}
                <div className="pt-2 border-b-[1px] border-lightBlack"></div>
                <p className='py-3 mt-2 inline-block cursor-pointer group hover:text-white transition-all duration-300 font-normalidad text-md font-normal leading-4 tracking-[0.16px] text-black-400'><span className='flex items-center gap-2'><SignOutIcon /> Sing out</span></p>
              </div>
              <div className='flex justify-center gap-4'>
                <span className="group"><TwitchIcon isWhite={true} width="20px" height="20px" fill="#4D545E" /></span>
                <YoutubeIcon />
                <TwitterIcon />
                <span className="group"><DiscordIcon isWhite={true} width="20px" height="20px" fill="#4D545E" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileView