// Importing the React
import React, { useState } from 'react'

import ChaiAurCodeText from '../components/ChaiAurCodeText'
import ChaiAurCodeIcon from '../components/ChaiAurCodeIcon'
import OTPInput from 'react-otp-input'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Creating Component for OTP Verification Form
function OTPVerificationForm() {

    const [otp, setOtp] = useState('');
    const [isValidOTP, setIsValidOTP] = useState(null)

    const checkValidOtp = () => {
        console.log("Otp : ", otp)
        if (otp.length === 4) {
            if (otp === "1234") {
                setIsValidOTP(true)
            }
            else {
                setIsValidOTP(false)
            }
        }
        else {
            alert("Your OTP is Empty")
        }
    }

    return (
        <main className='h-screen bg-[#3F72AF]'>

            {/* Chai Aur Code Text Component */}
            <ChaiAurCodeText extraClasses={`text-white`} />

            {/* Main Card for the Form */}
            <div className='otp-card h-50 bg-white flex flex-col items-center justify-center w-2/5 p-10 px-16 my-20 rounded-2xl mx-auto'>
                <div className="text-md text-center font-bold text-3xl">Mobile Phone Verification</div>
                <div className="text-md text-center font-normal px-5 mt-3 text-[#BFBFBF] text-xl">Enter the 4-digit verification code that was sent to your phone number.</div>

                <div className="otp-form my-10">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        inputType='tel'
                        renderSeparator={<span className='mx-1.5'></span>}
                        renderInput={(props) =>
                            <input {...props} className={`bg-[#DBE2EF] text-xl !w-14 h-14 rounded-lg text-black ${isValidOTP !== null ? (isValidOTP === true ? 'border-[#23CF9B] border-[1px]' : 'border-[#FF0000] border-[1px]') : ''}`} />
                        }
                    />

                    {isValidOTP === null && <button type='button' className='btn bg-[#112D4E] text-white w-full my-4 p-3 rounded-md' onClick={checkValidOtp}>Verify Account</button>}
                    {isValidOTP === true && <button type='button' className='btn bg-[#23CF9B] text-white w-full my-4 p-3 rounded-md shadow-md'>Verified</button>}
                    {isValidOTP === false && <button type='button' className='btn bg-[#EB2D5B] text-white w-full my-4 p-3 rounded-md shadow-md' onClick={checkValidOtp}>Verification failed</button>}
                    {isValidOTP !== true && <div className="text-md text-center font-normal mt-! text-[#BFBFBF]">Didn't receive code? <a className='text-[#112D4E] font-normal' href="/otp-form">Resend</a></div>}
                </div>
                <ChaiAurCodeIcon />
            </div>
        </main>
    )

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exporting the OTPVerificationForm Component
export default OTPVerificationForm