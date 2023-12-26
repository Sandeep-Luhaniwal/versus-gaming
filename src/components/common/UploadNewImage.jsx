import Image from 'next/image';
import { useState } from 'react';
import { CrossIcon, RemoveIcon, UploadImageIcon } from './Icons';

const UploadNewImage = ({ setUploadImage }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // You can use FileReader to preview the selected image
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className='absolute top-0 start-0 w-full h-full'>
                <div onClick={() => setUploadImage(false)}
                    className='absolute bg-black opacity-[0.4] z-20 w-full min-h-full h-full top-0 start-0'>
                </div>
                <div className='container max-w-[1440px] xl:px-6 mx-auto py-3 h-full flex justify-center items-center'>
                    <div className='!max-w-[480px] !w-full bg-black-500 rounded-xl mt-14 relative z-30'>
                        <div className='flex justify-between items-center px-4 py-3 border-b-[1px] border-lightBlack'>
                            <p className='uppercase font-bold leading-4 text-white text-md font-normalidad'>
                                Upload image
                            </p>
                            <span onClick={() => setUploadImage(false)} className='group'>
                                <CrossIcon />
                            </span>
                        </div>
                        <div className='border-b-[1px] p-4 md:p-6 border-lightBlack'>
                            {selectedImage ? (
                                <Image
                                    className='rounded-xl h-[142px]'
                                    src={selectedImage}
                                    alt='uploaded image'
                                    width={432}
                                    height={142}
                                />
                            ) : (
                                <Image
                                    className='rounded-xl h-[142px]'
                                    src='/assets/images/png/login-profile-image.png'
                                    alt='profile image'
                                    width={432}
                                    height={142}
                                />
                            )}
                            <p className='py-4 leading-6 tracking-[0.16px] font-normalidad text-md font-normal text-grey-400'>
                                For best results, we recommend you upload your banners at 952px
                                by 280px as JPEG files and must be under 5MB.
                            </p>
                            <label className='py-3 p-3 rounded-xl cursor-pointer border-[1px] border-lightBlack border-solid hover:border-green-yellow uppercase font-normalidad font-medium text-md flex gap-2 w-full justify-center items-center text-white leading-4 tracking-[0.16px]'>
                                <UploadImageIcon stroke='white' />
                                Browse files
                                <input
                                    type='file'
                                    accept='image/*'
                                    onChange={handleFileChange}
                                    hidden
                                />
                            </label>
                            <button
                                type='button'
                                className='text-white uppercase font-normalidad font-medium text-md flex items-center justify-center w-full mt-4 gap-2 leading-4 tracking-[0.16px]'
                                onClick={handleRemoveImage}>
                                Remove image <RemoveIcon />
                            </button>
                        </div>
                        <div className='p-4 flex gap-3 w-full'>
                            <button onClick={() => setUploadImage(false)} type='button' className='text-white uppercase font-normalidad font-medium text-md leading-4 tracking-[0.16px] bg-lightGrey hover:bg-white transition-all duration-300 hover:text-black p-4 md:px-6 rounded-xl' >Cancel</button>
                            <button type='button' className='text-black uppercase font-normalidad font-medium text-md leading-4 tracking-[0.16px] bg-green-yellow hover:bg-white transition-all duration-300 w-full p-4 rounded-xl' >Upload and save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadNewImage;
