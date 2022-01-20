import React from 'react';


export default function Resume ({ResumePic}) {
    return (
        <section id="resume" className="h-full">
            <div className= "flex flex-col items-center">
            <h5 className='font-serif text-bold text-3xl'><a href='https://drive.google.com/file/d/1IVST1NvBGUA9Tzv-ppPXpL2SVfl_2NGt/view?usp=sharing' target="_blank">*please click here to download*</a></h5>
                <ResumePic />
            </div>
        </section>
    );
};