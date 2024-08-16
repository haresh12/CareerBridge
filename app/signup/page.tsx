"use client";

import { useState, useRef } from 'react';

export default function SignUp() {
    const [signUpMethod, setSignUpMethod] = useState<'email' | 'mobile'>('email');
    const [userType, setUserType] = useState<'self' | 'child'>('self');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState<string[]>(Array(4).fill(""));
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const handleCodeChange = (value: string, index: number) => {
        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        // Move to next input if the current input has a value
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleGetCodeClick = () => {
        setCodeSent(true);
    };

    return (
        <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 text-gray-900 p-6 space-y-4">

            <h4 className="font-extrabold tracking-wide text-gray-800 drop-shadow-md" style={{ fontSize: '22px' }}>
                Sign Up
            </h4>

            <form className="w-full max-w-xs space-y-6">

                {/* User Type Selection */}
                <div className="relative w-full max-w-xs flex justify-center">
                    <div className="relative flex items-center bg-gray-200 rounded-full p-1 w-2/3 shadow-lg">
                        <div
                            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#6D83F2] to-[#9AA0F2] rounded-full transition-transform duration-300 ease-in-out transform ${userType === 'self' ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => !codeSent && setUserType('self')}
                            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center transition-transform transform hover:scale-105 ${userType === 'self' ? 'text-white' : 'text-gray-500'
                                } ${codeSent ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            disabled={codeSent}
                        >
                            For Self
                        </button>
                        <button
                            type="button"
                            onClick={() => !codeSent && setUserType('child')}
                            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center transition-transform transform hover:scale-105 ${userType === 'child' ? 'text-white' : 'text-gray-500'
                                } ${codeSent ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            disabled={codeSent}
                        >
                            For Child
                        </button>
                    </div>
                </div>

                {/* Sign Up Method Selection */}
                <div className="relative w-full max-w-xs">
                    <div className="relative flex items-center bg-gray-200 rounded-full p-1 shadow-lg">
                        <div
                            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#F29183] to-[#F2A09A] rounded-full transition-transform duration-300 ease-in-out transform ${signUpMethod === 'email' ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => !codeSent && setSignUpMethod('email')}
                            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center transition-transform transform hover:scale-105 ${signUpMethod === 'email' ? 'text-white' : 'text-gray-500'
                                } ${codeSent ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            disabled={codeSent}
                        >
                            Email
                        </button>
                        <button
                            type="button"
                            onClick={() => !codeSent && setSignUpMethod('mobile')}
                            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center transition-transform transform hover:scale-105 ${signUpMethod === 'mobile' ? 'text-white' : 'text-gray-500'
                                } ${codeSent ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            disabled={codeSent}
                        >
                            Mobile
                        </button>
                    </div>
                </div>

                {/* Input Fields */}
                {signUpMethod === 'email' ? (
                    <div className="space-y-1">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                            disabled={codeSent}
                        />
                    </div>
                ) : (
                    <div className="space-y-1">
                        <div className="relative flex items-center w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">
                                🇮🇳 +91
                            </span>
                            <input
                                type="tel"
                                placeholder="Enter your mobile number"
                                className="w-full p-3 pl-20 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                                disabled={codeSent}
                            />
                        </div>
                    </div>
                )}

                {/* Additional Fields for For Self or For Child */}
                {userType === 'self' && (
                    <>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                                disabled={codeSent}
                            />
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                                disabled={codeSent}
                            />
                        </div>
                    </>
                )}

                {userType === 'child' && (
                    <>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Your First Name"
                                className="w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                                disabled={codeSent}
                            />
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Your Last Name"
                                className="w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                                disabled={codeSent}
                            />
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Child Name"
                                className="w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                                disabled={codeSent}
                            />
                        </div>
                    </>
                )}

                {/* Verification UI */}
                {codeSent && (
                    <div className="w-full max-w-xs mt-4 space-y-4">
                        <div className="flex justify-center space-x-2">
                            {verificationCode.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleCodeChange(e.target.value, index)}
                                    className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl rounded-lg bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col items-center mt-6 w-full max-w-xs">
                    <button
                        type="button"
                        onClick={handleGetCodeClick}
                        className="w-3/4 py-3 rounded-full text-base font-medium tracking-wider text-white bg-gradient-to-r from-[#6D83F2] to-[#9AA0F2] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 transition-transform duration-300 ease-in-out"
                        disabled={codeSent}
                    >
                        {codeSent ? "Next" : "Get Code"}
                    </button>
                </div>
            </form>
        </main>
    );
}
