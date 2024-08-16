"use client";

import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { getSignUpSchema } from '../../utils/validationSchemas';

export default function SignUp() {
    const [signUpMethod, setSignUpMethod] = useState<'email' | 'mobile'>('email');
    const [userType, setUserType] = useState<'self' | 'child'>('self');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState<string[]>(Array(4).fill(""));

    const formik = useFormik({
        initialValues: {
            signUpMethod,
            userType,
            email: '',
            mobile: '',
            firstName: '',
            lastName: '',
            yourFirstName: '',
            yourLastName: '',
            childName: '',
        },
        validationSchema: getSignUpSchema(),
        onSubmit: (values) => {
            setCodeSent(true);
        },
    });

    useEffect(() => {
        formik.setFieldValue('signUpMethod', signUpMethod);
        formik.setFieldValue('userType', userType);
    }, [signUpMethod, userType]);

    const handleCodeChange = (value: string, index: number) => {
        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);
    };

    return (
        <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 text-gray-900 p-6 space-y-4">

            <h4 className="font-extrabold tracking-wide text-gray-800 drop-shadow-md" style={{ fontSize: '22px' }}>
                Sign Up
            </h4>

            <form onSubmit={formik.handleSubmit} className="w-full max-w-xs space-y-6">

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
                            {...formik.getFieldProps('email')}
                            className={`w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${formik.touched.email && formik.errors.email ? 'border border-red-500' : ''
                                }`}
                            disabled={codeSent}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        )}
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
                                {...formik.getFieldProps('mobile')}
                                className={`w-full p-3 pl-20 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${formik.touched.mobile && formik.errors.mobile ? 'border border-red-500' : ''
                                    }`}
                                disabled={codeSent}
                            />
                        </div>
                        {formik.touched.mobile && formik.errors.mobile && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.mobile}</div>
                        )}
                    </div>
                )}

                {/* Additional Fields for For Self or For Child */}
                {userType === 'self' && (
                    <>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="First Name"
                                {...formik.getFieldProps('firstName')}
                                className={`w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${formik.touched.firstName && formik.errors.firstName ? 'border border-red-500' : ''
                                    }`}
                                disabled={codeSent}
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                            )}
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Last Name"
                                {...formik.getFieldProps('lastName')}
                                className={`w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${formik.touched.lastName && formik.errors.lastName ? 'border border-red-500' : ''
                                    }`}
                                disabled={codeSent}
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                            )}
                        </div>
                    </>
                )}

                {userType === 'child' && (
                    <>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Your First Name"
                                {...formik.getFieldProps('yourFirstName')}
                                className={`w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${formik.touched.yourFirstName && formik.errors.yourFirstName ? 'border border-red-500' : ''
                                    }`}
                                disabled={codeSent}
                            />
                            {formik.touched.yourFirstName && formik.errors.yourFirstName && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.yourFirstName}</div>
                            )}
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Your Last Name"
                                {...formik.getFieldProps('yourLastName')}
                                className={`w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${formik.touched.yourLastName && formik.errors.yourLastName ? 'border border-red-500' : ''
                                    }`}
                                disabled={codeSent}
                            />
                            {formik.touched.yourLastName && formik.errors.yourLastName && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.yourLastName}</div>
                            )}
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                placeholder="Child Name"
                                {...formik.getFieldProps('childName')}
                                className={`w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${formik.touched.childName && formik.errors.childName ? 'border border-red-500' : ''
                                    }`}
                                disabled={codeSent}
                            />
                            {formik.touched.childName && formik.errors.childName && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.childName}</div>
                            )}
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
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="mt-3 text-sm text-white bg-gradient-to-r from-[#F29183] to-[#F2A09A] py-2 px-4 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50">
                                Re-send Code
                            </button>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col items-center mt-6 w-full max-w-xs">
                    <button
                        type="submit"
                        className="w-3/4 py-3 rounded-full text-base font-medium tracking-wider text-white bg-gradient-to-r from-[#6D83F2] to-[#9AA0F2] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 transition-transform duration-300 ease-in-out"
                        disabled={formik.isSubmitting}
                    >
                        {codeSent ? "Register" : "Sign Up"}
                    </button>
                </div>
            </form>
        </main>
    );
}
