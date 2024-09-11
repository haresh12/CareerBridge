"use client";

import { useRouter } from 'next/navigation';
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
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <div className="flex flex-col items-center text-center space-y-1.5">
        <h1 className="text-5xl font-extrabold drop-shadow-md">
          CareerBridge
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-4 sm:space-y-5 mt-5">
        <Button
          onClick={handleSignInClick}
          className="w-full max-w-xs py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold tracking-wider transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          style={{
            background: "linear-gradient(120deg, #333)",
            color: "white",
            letterSpacing: "0.07em",
            boxShadow: "0 8px 24px rgba(255, 255, 255, 0.1)",
            minWidth: "280px",
          }}
        >
          SIGN IN
        </Button>

        <Button
          onClick={handleSignUpClick}
          className="w-full max-w-xs py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold tracking-wider transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          style={{
            background: "linear-gradient(120deg, #333, #000)",
            color: "white",
            letterSpacing: "0.07em",
            boxShadow: "0 8px 24px rgba(255, 255, 255, 0.1)",
            minWidth: "280px",
          }}
        >
          SIGN UP
        </Button>
      </div>

      <p className="mt-8 text-xl text-center drop-shadow-sm">
        Empowering parents and children for a brighter future.
      </p>
    </main>
  );
}
