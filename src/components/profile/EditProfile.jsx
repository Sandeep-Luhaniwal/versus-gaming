import Image from 'next/image'
import React, { useState } from 'react'
import { CircleCrossIcon, ImageIcon, UploadImageIcon } from '../common/Icons'
import { loginFormData } from '../common/Helper';
import UploadNewImage from './UploadNewImage';

const EditProfile = () => {
    const [bio, setBio] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [userName, setUserName] = useState('');
    const [uploadImage, setUploadImage] = useState(false);
    const [newImageUpload, setnewImageUpload] = useState(false);
    //TEXTAERA COUNT NUMBER DATA
    const maxChars = 400;

    const handleBioChange = (event) => {
        const inputBio = event.target.value;
        if (inputBio.length <= maxChars) {
            setBio(inputBio);
        }
    };
    const handleBioReset = () => {
        setBio('');
    };

    //ONCLICK CIRCLECROSSICON SHOW AND HIDDEN
    const handleInputChange = (field, event) => {
        if (field === 'display_name') {
            setDisplayName(event.target.value);
        } else if (field === 'user_name') {
            setUserName(event.target.value);
        }
    };

    const handleReset = (field) => {
        if (field === 'display_name') {
            setDisplayName('');
        } else if (field === 'user_name') {
            setUserName('');
        }
    };
    //ONCLICK MAP DATA FUNCTION CIRCLECROSSICON SHOW AND HIDDEN
    const [socialInputs, setSocialInputs] = useState(
        loginFormData.map(() => ({ value: '' }))
    );

    const handleSocialInputChange = (index, event) => {
        const updatedInputs = [...socialInputs];
        updatedInputs[index].value = event.target.value;
        setSocialInputs(updatedInputs);
    };

    const handleSocialInputReset = (index) => {
        const updatedInputs = [...socialInputs];
        updatedInputs[index].value = '';
        setSocialInputs(updatedInputs);
    };
   
    return (
        <>
            <>
                <p className='font-normalidad text-md font-bold leading-5 text-white uppercase'>Edit profile</p>
                <div className="p-4 md:p-6 my-4 md:my-6 border-[1px] relative border-solid border-black-500 rounded-xl">
                    {/* <Image className='rounded-xl h-32 sm:h-40 md:h-48 lg:h-60 xl:h-[280px]' src="/assets/images/png/login-profile-image.png" alt='profile image' width={1002} height={280} /> */}
                    {newImageUpload ? (
                        <Image className='rounded-xl h-36 sm:h-40 md:h-48 lg:h-60 xl:h-[280px]'
                            src={newImageUpload}
                            alt='uploaded image'
                            width={1002} height={280}
                        />
                    ) : (
                            <Image className='rounded-xl h-36 sm:h-40 md:h-48 lg:h-60 xl:h-[280px]'
                            src='/assets/images/png/login-profile-image.png'
                            alt='profile image'
                            width={1002} height={280}
                        />
                    )}
                    <div onClick={() => setUploadImage(true)} className="h-14 md:h-20 w-14 md:w-20 lg:h-24 lg:w-24 xl:w-[120px] xl:h-[120px] border-[3px] border-solid cursor-pointer border-black rounded-full absolute bottom-[-8px] start-16">
                        <Image height={120} width={120} src="/assets/images/png/login-img.png" alt='login image' />
                        <div className="absolute top-1/2 start-1/2 translate-y-[-50%] translate-x-[-50%]">
                            <ImageIcon />
                        </div>
                    </div>
                    <div onClick={() => setUploadImage(true)} className="p-2 pe-3 lg:p-4 lg:pe-6 bg-lightBlack absolute rounded-xl top-6 end-8 md:top-10 md:end-10 cursor-pointer flex gap-2">
                        <UploadImageIcon />
                        <p className='uppercase text-white text-md font-medium font-normalidad leading-4 tracking-[0.16px]'>Upload new image</p>
                    </div>
                </div>
                <div className="flex flex-col whitautofill">
                    <label htmlFor="display_name" className='text-white text-md font-normal mb-2 font-normalidad leading-6 tracking-[0.16px]'>Display name</label>
                    <div className='flex items-center w-full rounded-xl bg-black-500 border-[1px] border-transparent border-solid hover:border-green-yellow transition-all duration-300 pe-2'>
                        <input type="text" value={displayName} onChange={(e) => handleInputChange('display_name', e)} name='display_name' id='display_name' placeholder='sandeep' className='ps-4 pe-2 py-2 placeholder:text-black-400 bg-black-500 w-full text-white text-sm font-medium font-normalidad leading-4 tracking-[0.14px]  rounded-xl outline-none' />
                        {displayName && (
                            <div className="cursor-pointer rounded-full" onClick={() => handleReset('display_name')}>
                                <CircleCrossIcon />
                            </div>
                        )}
                    </div>
                    <label htmlFor="user_name" className='text-white text-md font-normal mt-6 mb-2 font-normalidad leading-6 tracking-[0.16px]'>Username</label>
                    <div className='flex items-center w-full rounded-xl bg-black-500 border-[1px] border-transparent border-solid hover:border-green-yellow transition-all duration-300 pe-2'>
                        <input type="text" value={userName} onChange={(e) => handleInputChange('user_name', e)} name='user_name' id='user_name' placeholder='sandeep' className='ps-4 pe-2 py-2 placeholder:text-black-400 bg-black-500 w-full text-white text-sm font-medium font-normalidad leading-4 tracking-[0.14px]  rounded-xl outline-none' />
                        {userName && (
                            <div className="cursor-pointer rounded-full" onClick={() => handleReset('user_name')}>
                                <CircleCrossIcon />
                            </div>
                        )}
                    </div>
                    <label htmlFor="user_biodata" className='text-white text-md font-normal mt-6 mb-2 font-normalidad leading-6 tracking-[0.16px]'>Bio</label>
                    <div className='flex w-full rounded-xl bg-black-500 border-[1px] border-transparent border-solid hover:border-green-yellow transition-all duration-300 pe-2'>
                        <textarea name="user_biodata" value={bio} onChange={handleBioChange} id="user_biodata" cols="100" rows="20" placeholder='sandeep' className='ps-4 pe-2 py-2 resize-none h-40 bg-black-500 placeholder:text-black-400 text-white text-sm font-medium font-normalidad leading-5 tracking-[0.20px] w-full rounded-xl outline-none'></textarea>
                        {bio && (
                            <div className="cursor-pointer mt-2 h-4 rounded-full" onClick={handleBioReset}>
                                <CircleCrossIcon />
                            </div>
                        )}

                    </div>
                    <p className='font-normalidad font-normal text-sm text-black-400 flex justify-end mt-2'>{bio.length}/{maxChars}</p>
                </div>
                <div className="py-10">
                    <p className='font-normalidad text-md font-bold leading-5 text-white uppercase'>Socials</p>
                    <div className="flex flex-wrap">
                        {socialInputs.map((input, index) => (
                            <div key={index} className={`w-full md:w-1/2 mt-4 md:mt-6 ${loginFormData[index].style}`}>
                                <label htmlFor={loginFormData[index].description} className='text-white text-md font-normal font-normalidad leading-6 tracking-[0.16px]'>
                                    {loginFormData[index].title}
                                </label>
                                <div className='p-3 sm:p-4 lg:pe-6 bg-black-500 rounded-xl flex gap-2 lg:gap-3 mt-2'>
                                    <div className='h-10 w-10 flex justify-center items-center bg-lightBlack rounded-lg'>{loginFormData[index].icon}</div>
                                    <div className="flex items-center w-full border-[1px] border-lightBlack border-solid hover:border-green-yellow transition-all duration-300 rounded-xl relative">
                                        <input
                                            type="text"
                                            name={loginFormData[index].description}
                                            id={loginFormData[index].description}
                                            placeholder={loginFormData[index].placeholder}
                                            value={input.value}
                                            onChange={(e) => handleSocialInputChange(index, e)}
                                            className={`ps-4 pe-2 py-2 h-full w-full bg-black-500 placeholder:text-black-400 text-white text-sm font-medium font-normalidad leading-4 tracking-[0.14px] rounded-xl outline-none`}
                                        />
                                        {input.value && (
                                            <div className="cursor-pointer pe-1 rounded-full" onClick={() => handleSocialInputReset(index)}>
                                                <CircleCrossIcon />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button type='submit' className="text-black my-4 sm:my-6 uppercase bg-green-yellow hover:bg-white transition-all duration-300 w-full px-6 py-4 text-center font-normalidad font-medium text-md rounded-xl tracking-[0.14px] leading-4">Save changes</button>
            </>
            {uploadImage && <UploadNewImage uploadImage={uploadImage} setnewImageUpload={setnewImageUpload} setUploadImage={setUploadImage} />}
        </>
    )
}

export default EditProfile