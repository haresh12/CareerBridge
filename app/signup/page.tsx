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
        <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 space-y-4">

            <h4 className="font-extrabold tracking-wide drop-shadow-md" style={{ fontSize: '22px' }}>
                Sign Up
            </h4>

            <form className="w-full max-w-xs space-y-6">

                {/* User Type Selection */}
                <div className="relative w-full max-w-xs flex justify-center">
                    <div className="relative flex items-center bg-gray-800 rounded-full p-1 w-2/3 shadow-lg">
                        <div
                            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full transition-transform duration-300 ease-in-out transform ${userType === 'self' ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => !codeSent && setUserType('self')}
                            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center transition-transform transform hover:scale-105 ${userType === 'self' ? 'text-white' : 'text-gray-400'
                                } ${codeSent ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            disabled={codeSent}
                        >
                            For Self
                        </button>
                        <button
                            type="button"
                            onClick={() => !codeSent && setUserType('child')}
                            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center transition-transform transform hover:scale-105 ${userType === 'child' ? 'text-white' : 'text-gray-400'
                                } ${codeSent ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            disabled={codeSent}
                        >
                            For Child
                        </button>
                    </div>
                </div>

                {/* Sign Up Method Selection */}
                <div className="relative w-full max-w-xs">
                    <div className="relative flex items-center bg-gray-800 rounded-full p-1 shadow-lg">
                        <div
                            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full transition-transform duration-300 ease-in-out transform ${signUpMethod === 'email' ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => !codeSent && setSignUpMethod('email')}
                            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center transition-transform transform hover:scale-105 ${signUpMethod === 'email' ? 'text-white' : 'text-gray-400'
                                } ${codeSent ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                            disabled={codeSent}
                        >
                            Email
                        </button>
                        <button
                            type="button"
                            onClick={() => !codeSent && setSignUpMethod('mobile')}
                            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center transition-transform transform hover:scale-105 ${signUpMethod === 'mobile' ? 'text-white' : 'text-gray-400'
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
                            className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500"
                            disabled={codeSent}
                        />
                    </div>
                ) : (
                    <div className="space-y-1">
                        <div className="relative flex items-center w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                🇮🇳 +91
                            </span>
                            <input
                                type="tel"
                                placeholder="Enter your mobile number"
                                className="w-full p-3 pl-20 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500"
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
                                className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500"
                                disabled={codeSent}
                            />
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500"
                                disabled={codeSent}
                            />
                        </div>
                    </>
                )}

                {/* Submit Button */}
                <div className="flex flex-col items-center mt-6 w-full max-w-xs">
                    <button
                        type="button"
                        onClick={handleGetCodeClick}
                        className="w-3/4 py-3 rounded-full text-base font-medium tracking-wider text-white bg-gradient-to-r from-gray-700 to-gray-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out"
                        disabled={codeSent}
                    >
                        {codeSent ? "Next" : "Get Code"}
                    </button>
                </div>
            </form>
        </main>
    );
}
