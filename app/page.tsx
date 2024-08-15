"use client";

import Lottie from 'lottie-react';
import animationData from './family.json';
import { Button } from '@headlessui/react';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black text-white p-4 space-y-4">
      
      <h3 className="text-5xl sm:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse leading-normal">
        CareerBridge
      </h3>

      {/* Lottie Animation */}
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ height: '160px', width: '160px' }}
      />

      <div className="flex flex-col items-center space-y-3 sm:space-y-5">
        <Button
          className="relative w-full max-w-xs py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold tracking-wider transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50"
          style={{
            background: "linear-gradient(120deg, #FF4081, #FFA726, #66BB6A, #42A5F5, #7E57C2)",
            backgroundSize: "300% 300%",
            animation: "moveGradient 4s ease infinite",
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            boxShadow: "0 8px 30px rgba(66, 165, 245, 0.5)",
            minWidth: "300px",
          }}
        >
          SIGN IN
        </Button>

        <Button
          className="relative w-full max-w-xs py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold tracking-wider transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50"
          style={{
            background: "linear-gradient(120deg, #7E57C2, #42A5F5, #66BB6A, #FFA726, #FF4081)",
            backgroundSize: "300% 300%",
            animation: "moveGradient 4s ease infinite",
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            boxShadow: "0 8px 30px rgba(126, 87, 194, 0.5)",
            minWidth: "300px",
          }}
        >
          SIGN UP
        </Button>
      </div>

      <style jsx>{`
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </main>
  );
}
