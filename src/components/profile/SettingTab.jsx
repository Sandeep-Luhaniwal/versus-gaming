import React, { useState } from 'react'
import { CompeteIcon, EditProfileIcon, LockIcon, SignOutIcon } from '../common/Icons'
import EditProfile from './EditProfile';
import Security from './Security';

const SettingTab = () => {
    const [activeTab, setActiveTab] = useState("editProfile");

    return (
        <>
            <div className='container max-w-[1440px] mx-auto px-5 md:px-6 xl:px-12 pt-6 xl:pt-10'>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
                    <div className="md:w-1/4 sm:w-1/4 p-2 md:p-3 rounded-xl bg-black-500 h-full">
                        <div className={`flex flex-col gap-2`}>
                            <p onClick={() => setActiveTab("editProfile")} className={`${activeTab === "editProfile" ? "text-white bg-lightBlack" : " "} hover:bg-lightBlack rounded-xl py-4 px-4 sm:px-2 md:px-4 inline-block cursor-pointer group hover:text-white transition-all duration-300 font-normalidad text-md font-normal leading-4 tracking-[0.16px] text-black-400`}><span className='flex items-center gap-2'><EditProfileIcon activeTab={activeTab} /> Edit profile</span></p>
                            <p onClick={() => setActiveTab("security")} className={`${activeTab === "security" ? "text-white bg-lightBlack" : " "} hover:bg-lightBlack rounded-xl py-4 px-4 sm:px-2 md:px-4 inline-block cursor-pointer group hover:text-white transition-all duration-300 font-normalidad text-md font-normal leading-4 tracking-[0.16px] text-black-400`}><span className='flex items-center gap-2'><LockIcon activeTab={activeTab} /> Security</span></p>
                            <p onClick={() => setActiveTab("myGame")} className={`${activeTab === "myGame" ? "text-white bg-lightBlack" : " "} hover:bg-lightBlack rounded-xl py-4 px-4 sm:px-2 md:px-4 inline-block cursor-pointer group hover:text-white transition-all duration-300 font-normalidad text-md font-normal leading-4 tracking-[0.16px] text-black-400`}><span className='flex items-center gap-2'><CompeteIcon activeTab={activeTab} /> My games</span></p>
                        </div>
                        <div className="pt-2 border-b-[1px] border-lightBlack"></div>
                        <p onClick={() => setActiveTab("signOut")} className={`hover:bg-lightBlack mt-2 w-full rounded-xl py-4 px-4 sm:px-2 md:px-4 inline-block cursor-pointer group hover:text-white transition-all duration-300 font-normalidad text-md font-normal leading-4 tracking-[0.16px] text-black-400`}><span className='flex items-center gap-2'><SignOutIcon /> Sign out</span></p>
                    </div>
                    <div className="md:w-3/4 sm:w-3/4">
                        {activeTab === "editProfile" && (
                            <>
                                <EditProfile />
                            </>
                        )
                        }
                        {activeTab === "security" && (
                            <>
                                <Security />
                            </>
                        )
                        }
                        {activeTab === "myGame" && (
                            <>
                                <h1 className='text-white'>hello 3</h1>
                            </>
                        )
                        }
                        {activeTab === "signOut" && (
                            <>
                                <h1 className='text-white'>sign out</h1>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingTab