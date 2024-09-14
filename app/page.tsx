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

      {/* Testimonials Section */}
      <section className="mt-12 px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Parents Are Saying
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-300 italic">
              "CareerBridge helped us explore career paths we never considered. Our child is now pursuing a passion they truly love!"
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              - Ramesh, Parent from Mumbai
            </h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-300 italic">
              "The platform's insights into future career trends made it easier for us to guide our son towards the right choice."
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              - Priya, Parent from Delhi
            </h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-300 italic">
              "We loved how CareerBridge's quizzes helped identify our daughter's strengths and aligned her interests with real-world careers."
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              - Rajesh, Parent from Bangalore
            </h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-300 italic">
              "CareerBridge is a game-changer for parents like us who want to make informed decisions about our children's futures."
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              - Meera, Parent from Hyderabad
            </h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-300 italic">
              "The personalized recommendations gave us the confidence to guide our child towards a rewarding career."
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              - Anil, Parent from Chennai
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
