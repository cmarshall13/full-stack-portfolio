import React from 'react';


export default function About({ProfilePicture}) {
    return (
        <section id="about" className="h-full">
            <div className="flex flex-col items-center text-center">
                <ProfilePicture />
                <p className="w-4/5 pb-12 mt-8 font-serif text-xl">
                    Hey there and thanks for stopping by! I'm an up-and-coming Full-Stack Web Developer from Connecticut.
                    My focus is building applications that solve real world problems, like Gift-Buddy: an app that stores 
                    your gift ideas for family and friends, and Vacci-Date: A dating app exclusively for singles vaccinated 
                    against Covid-19. I am passionate about learning new materials and technologies and thinking outside the box.
                    <br></br><br></br>
                    When I step away from my computer, you can find me treading the boards at the Downtown Cabaret Theatre
                    in Bridgeport, CT. I have a degree in Musical Theatre Performance and use it daily! Besides singing/acting/coding, 
                    I love a good happy hour and karaoke night!
                </p>
            </div>
        </section>
    )
};