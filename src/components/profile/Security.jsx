import React, { useState } from 'react';

const Security = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');

    const updatePasswordState = (newPassword, newConfirmPassword) => {
        setPassword(newPassword);
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(newPassword === newConfirmPassword);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        const newConfirmPassword = confirmPassword;
        updatePasswordState(newPassword, newConfirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newPassword = password;
        const newConfirmPassword = e.target.value;
        updatePasswordState(newPassword, newConfirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (passwordMatch && password.length >= 12) {
            // Perform your password update logic here
            console.log('Password updated successfully');
            setSuccessMessage('Password updated successfully');
            resetForm(); // Reset the form after a successful password update
        } else {
            console.log('Passwords do not match or do not meet the length requirement');
        }
    };

    const resetForm = () => {
        setPassword('');
        setConfirmPassword('');
        setPasswordMatch(true);
    };

    return (
        <>
            <p className='font-normalidad text-md font-bold leading-5 text-white uppercase'>security</p>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label className='text-white' htmlFor='password'>
                    New password
                </label>
                <input
                    maxLength={12}
                    minLength={12}
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
                {password.length >= 12 ? (
                    <p className='text-green-500'>Successfully met.</p>
                ) : (
                    <p className='text-white'>Minimum length of 12 characters.</p>
                )}
                <label className='text-white' htmlFor='confirmPassword'>
                    Confirm new password
                </label>
                <input
                    maxLength={12}
                    minLength={12}
                    type='password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                {!passwordMatch && <p className='text-red-500'>The two passwords do not match.</p>}
                {passwordMatch && password.length >= 12 && (
                    <p className='text-green-500'>Password match.</p>
                )}

                <input
                    type="submit"
                    className='text-black mt-3 bg-green-yellow'
                    value="Create password"
                />
            </form>
        </>
    );
};

export default Security;
