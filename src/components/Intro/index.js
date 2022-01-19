import React from 'react';

export default function Intro({ active, setActive }) {
   return (
      <div>
         <section id="intro" className="flex flex-col items-center justify-center w-full h-screen pt-8 text-center xl:pt-12">
            <h1 className='font-serif text-8xl text-gradient bg-gradient-to-tr from-pink-200 to-pink-300 to-pink-400'>
               Corinne Marshall
            </h1>
            <p className="text-3xl font-serif text-gradient sm:text-4xl text-extra-bold bg-gradient-to-tr from-pink-200 to-pink-300 to-pink-400">Full-Stack Web Developer</p>
            <button
               className="px-8 py-4 mt-20 mb-1 mr-1 text-2xl font-serif text-black uppercase transition-all duration-150 ease-linear border border-pink-400 border-dotted rounded-full outline-none animate-pulse hover:opacity-100 font-intro place-self-center focus:outline-none w-60"
               type="button"
               onClick={() => setActive("About")}
            >
               Welcome
            </button>
         </section>
      </div>
   )
};