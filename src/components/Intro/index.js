import React from 'react';

export default function Intro({ active, setActive }) {
   return (
      <div>
         <section id="intro" className="flex flex-col items-center justify-center w-full h-screen pt-8 text-center xl:pt-12">
            <h1 className='font-headline text-8xl text-gradient bg-gradient-to-tr from-pink-600 to-red-500 to-yellow-200'>
               Corinne Marshall
            </h1>
            <p className="text-3xl font-bold text-gradient sm:text-4xl text-extra-bold bg-gradient-to-tr from-pink-600 to-red-500 to-yellow-200">FULL STACK WEB DEVELOPER.</p>
            <button
               className="px-8 py-4 mt-20 mb-1 mr-1 text-2xl font-bold text-gray-300 uppercase transition-all duration-150 ease-linear border border-red-500 border-dotted rounded-full outline-none animate-pulse hover:opacity-100 font-intro place-self-center focus:outline-none w-60"
               type="button"
               onClick={() => setActive("About")}
            >
               Welcome
            </button>
         </section>
      </div>
   )
};