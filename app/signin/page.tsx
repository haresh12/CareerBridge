"use client";

import { useState } from 'react';

export default function SignIn() {
  const [signInMethod, setSignInMethod] = useState('email');
  const [userType, setUserType] = useState('self');

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black text-white p-4 space-y-10">
      
      <h3 className="text-3xl sm:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Sign In
      </h3>

      {/* Smaller Toggle-like User Type Selection */}
      <div className="relative w-full max-w-xs mt-4 flex justify-center">
        <div className="relative flex items-center bg-gray-800 rounded-full p-1 space-x-2 w-1/2">
          <div
            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-transform duration-300 ease-in-out transform ${
              userType === 'self' ? 'translate-x-0' : 'translate-x-full'
            }`}
          />
          <button
            onClick={() => setUserType('self')}
            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center ${
              userType === 'self' ? 'text-white' : 'text-gray-400'
            }`}
          >
            For Self
          </button>
          <button
            onClick={() => setUserType('child')}
            className={`relative z-10 w-1/2 py-2 text-xs font-medium text-center ${
              userType === 'child' ? 'text-white' : 'text-gray-400'
            }`}
          >
            For Child
          </button>
        </div>
      </div>

      {/* Toggle-like Sign In Method Options */}
      <div className="relative w-full max-w-xs">
        <div className="relative flex items-center bg-gray-800 rounded-full p-1">
          <div
            className={`absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-transform duration-300 ease-in-out transform ${
              signInMethod === 'email' ? 'translate-x-0' : 'translate-x-full'
            }`}
          />
          <button
            onClick={() => setSignInMethod('email')}
            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center ${
              signInMethod === 'email' ? 'text-white' : 'text-gray-400'
            }`}
          >
            Email
          </button>
          <button
            onClick={() => setSignInMethod('mobile')}
            className={`relative z-10 w-1/2 py-2 text-sm font-medium text-center ${
              signInMethod === 'mobile' ? 'text-white' : 'text-gray-400'
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Input for Email or Phone */}
      <div className="w-full max-w-xs mt-4">
        {signInMethod === 'email' ? (
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 mb-0 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-cyan-300"
          />
        ) : (
          <div className="relative flex items-center w-full mb-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
              🇮🇳 +91
            </span>
            <input 
              type="tel" 
              placeholder="Enter your mobile number" 
              className="w-full p-3 pl-20 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center mb-1 w-full max-w-xs">
        <button
          className="w-3/4 py-3 rounded-full text-base font-medium tracking-wider bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50 transition-transform duration-300 ease-in-out"
        >
          Get Code
        </button>
      </div>
    </main>
  );
}
