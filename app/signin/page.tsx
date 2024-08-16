"use client";

import { useState } from 'react';

export default function SignIn() {
  const [signInMethod, setSignInMethod] = useState<'email' | 'mobile'>('email');
  const [userType, setUserType] = useState<'self' | 'child'>('self');
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(4).fill(""));

  const handleCodeChange = (value: string, index: number) => {
    let newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 text-gray-900 p-6">

      <h4 className="font-extrabold tracking-wide text-gray-800 drop-shadow-md" style={{ fontSize: '22px' }}>
        Sign In
      </h4>


      {/* User Type Selection with Enhanced Styling */}
      <div className="relative w-full max-w-xs mt-6 flex justify-center">
        <div className="relative flex items-center bg-gray-200 rounded-full p-1 w-2/3 shadow-lg">
          <div
            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#6D83F2] to-[#9AA0F2] rounded-full transition-transform duration-300 ease-in-out transform ${userType === 'self' ? 'translate-x-0' : 'translate-x-full'
              }`}
          />
          <button
            onClick={() => setUserType('self')}
            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center transition-transform transform hover:scale-105 ${userType === 'self' ? 'text-white' : 'text-gray-500'
              }`}
          >
            For Self
          </button>
          <button
            onClick={() => setUserType('child')}
            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center transition-transform transform hover:scale-105 ${userType === 'child' ? 'text-white' : 'text-gray-500'
              }`}
          >
            For Child
          </button>
        </div>
      </div>

      {/* Sign In Method Options with Enhanced Styling */}
      <div className="relative w-full max-w-xs mt-6">
        <div className="relative flex items-center bg-gray-200 rounded-full p-1 shadow-lg">
          <div
            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#F29183] to-[#F2A09A] rounded-full transition-transform duration-300 ease-in-out transform ${signInMethod === 'email' ? 'translate-x-0' : 'translate-x-full'
              }`}
          />
          <button
            onClick={() => setSignInMethod('email')}
            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center transition-transform transform hover:scale-105 ${signInMethod === 'email' ? 'text-white' : 'text-gray-500'
              }`}
          >
            Email
          </button>
          <button
            onClick={() => setSignInMethod('mobile')}
            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center transition-transform transform hover:scale-105 ${signInMethod === 'mobile' ? 'text-white' : 'text-gray-500'
              }`}
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Input for Email or Phone */}
      <div className="w-full max-w-xs mt-6">
        {signInMethod === 'email' ? (
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-shadow duration-300 ease-in-out shadow-lg"
          />
        ) : (
          <div className="relative flex items-center w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full p-3 pl-20 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-shadow duration-300 ease-in-out shadow-lg"
            />
          </div>
        )}

        {/* Code Verification UI */}
        {codeSent && (
          <div className="flex justify-center space-x-2 mt-8">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(e.target.value, index)}
                className="w-12 h-12 text-center text-xl rounded-lg bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-md"
              />
            ))}
          </div>
        )}
      </div>

      {/* Get Code/Verify Button and Re-send Option */}
      <div className="flex flex-col items-center mt-6 w-full max-w-xs">
        <button
          onClick={() => setCodeSent(true)}
          className="w-3/4 py-3 rounded-full text-base font-medium tracking-wider text-white bg-gradient-to-r from-[#6D83F2] to-[#9AA0F2] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 transition-transform duration-300 ease-in-out shadow-lg"
        >
          {codeSent ? "Verify" : "Get Code"}
        </button>

        {codeSent && (
          <button className="mt-3 text-sm text-white bg-gradient-to-r from-[#F29183] to-[#F2A09A] py-2 px-4 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50">
            Re-send Code
          </button>
        )}
      </div>
    </main>
  );
}
