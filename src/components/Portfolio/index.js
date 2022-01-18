import React from 'react';
import bandspot from '../../assets/images/bandspot.png';
import giftbuddy from '../../assets/images/gift-buddy.png';
import vaccidate from '../../assets/images/vacci-date.png';



export default function Projects () {
    const projects = [
        {
           name: 'GiftBuddy',
           image: giftbuddy,
           description: 'A two-person team built this MVC CRUD application which logs gift ideas for any number of people. A user can log into this app, submit a gift idea, and then search for that gift on amazon straight from our app.',
           stack: 'Materialize / CSS / Node / Express / MySQL / Handlebars / Sequelize',
           github: 'https://github.com/cmarshall13/GiftBuddy',
           deploy: 'https://giftbuddy-project2.herokuapp.com/'
        },
        {
           name: 'Vacci-Date',
           image: vaccidate,
           description: 'Dating App that only allows fully vaccinated users to join. Users can then match with other vaccinated singles, edit their profile, and look through their matches.',
           stack: 'React / Tailwind / HTML / JSX / graphQL',
           github: 'https://github.com/cmarshall13/vacci-date',
           deploy: 'https://powerful-basin-63649.herokuapp.com/'
        },
        {
           name: 'BandSpot',
           image: bandspot,
           description: 'BANDSpot is an application which allows you to login in through your Spotify account and be shown the upcoming concerts happening by your top artists in your location. Links to buy tickets directly from Bandsintown appear on each event listing, and the user can filter shows further by month, artist, or region.',
           stack: 'HTML / CSS / JavaScript / Materialize / Git',
           github: 'https://github.com/trippjoe/bandspot',
           deploy: 'https://trippjoe.github.io/bandspot/'
        }
     ];
  
     return (
        <section id="projects">
           <h3 className="p-4 pt-20 text-5xl font-bold tracking-wide text-center font-headline text-gradient bg-gradient-to-tr from-pink-600 to-red-500 to-yellow-200">
              PROJECTS
           </h3>
           <p className="w-4/5 pt-6 m-auto text-xl text-center font-intro sm:text-2xl text-gradient bg-gradient-to-tr from-pink-600 to-red-500 to-yellow-200">
              This section features my recent projects. These were all group efforts and I'd be happy to speak on my personal involvement so don't hesitate to reach out!
              
           </p>
           <div className="flex flex-wrap justify-around p-10">
              {projects.map((projects) => (
                 <div className="max-w-sm mb-4 text-center transition-all duration-500 rounded opacity-80 hover:opacity-100" key={projects.name}>
                    <img className="w-full h-48" src={projects.image} alt={projects.name} />
                    <div className="px-6 py-4 divide-y divide-red-500 shadow-2xl divide-opacity-25">
                       <div className="pb-2 mb-2 text-2xl font-semibold leading-tight uppercase font-headline sm:text-4xl text-gradient bg-gradient-to-br from-pink-600 to-red-500 to-yellow-200">{projects.name}</div>
                       <p className="pt-4 pb-5 text-sm text-gray-300 font-intro sm:text-xl">
                          {projects.description}
                       </p>
                       <div className="flex pt-2 pb-2 text-center text-gradient bg-gradient-to-br from-pink-600 to-red-500 to-yellow-200 font-headline">
                          <p className="m-auto text-sm sm:text-base">{projects.stack}</p>
                       </div>
                       <div className="flex flex-wrap justify-around gap-2 px-6 py-4 text-sm sm:text-base font-headline sm:py-8">
                          <a href={projects.github} target="_blank" className="px-8 py-2 text-gray-300 transition-all duration-500 border border-red-500 border-dotted rounded-full hover:opacity-100 hover: hover:text-red-500">CODE</a>
                          {projects.deploy && <a href={projects.deploy} target="_blank" className="px-8 py-2 text-gray-300 transition-all duration-500 border border-red-500 border-dotted rounded-full hover:opacity-100 hover: hover:text-red-500">DEPLOY</a>}
                       </div>
                    </div>
                 </div>
              ))}
           </div >
        </section>
     )
  };
