"use client";

import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import animationData from './family.json';
import { Button } from '@headlessui/react';

export default function Home() {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/signin');
  };

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 text-gray-900 p-6">
      <div className="flex flex-col items-center text-center space-y-1.5">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ height: '190px', width: '190px' }}
        />
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-md">
          CareerBridge
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-4 sm:space-y-5 mt-5">
        <Button
          onClick={handleSignInClick}
          className="w-full max-w-xs py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold tracking-wider transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50"
          style={{
            background: "linear-gradient(120deg, #6D83F2, #9AA0F2)",
            color: "#FFFFFF",
            letterSpacing: "0.07em",
            boxShadow: "0 8px 24px rgba(109, 131, 242, 0.6)",
            minWidth: "280px",
          }}
        >
          SIGN IN
        </Button>

        <Button
          onClick={handleSignUpClick}
          className="w-full max-w-xs py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold tracking-wider transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50"
          style={{
            background: "linear-gradient(120deg, #F29183, #F2A09A)",
            color: "#FFFFFF",
            letterSpacing: "0.07em",
            boxShadow: "0 8px 24px rgba(242, 145, 131, 0.6)",
            minWidth: "280px",
          }}
        >
          SIGN UP
        </Button>
      </div>

      <p className="mt-8 text-xl text-center text-gray-600 drop-shadow-sm">
        Empowering parents and children for a brighter future.
      </p>
    </main>
  );
}
