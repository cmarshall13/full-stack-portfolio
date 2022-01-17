import { React, useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Result = () => {
    return (
        <p className="text-gray-200">Your message has been sent successfully. I will respond as soon as possible!</p>
    );
};

export default function Contact() {
    const [result, showResult] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', subject: '', email: '', message: ''});
    const { name, subject, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
    };
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
};

    const sendEmail = (e) => {
        e.preventDefault();
    }


return (
    <section id="contact" className="w-full mt-12 text-gray-300">
       <div className="flex flex-col items-center w-full mb-10 text-center avatar">
          <h3 className="p-4 text-5xl font-bold text-center sm:pt-24 font-headline text-gradient bg-gradient-to-tl from-pink-600 to-red-500 to-yellow-200">
             CONTACT ME
          </h3>
          <p className="w-4/5 pt-2 m-auto text-xl text-center sm:text-3xl text-gradient bg-gradient-to-tr from-pink-600 to-red-500 to-yellow-200 sm:pt-8 sm:w-3/5 font-intro">
             I am always available for pleasantries, collaborations, insights, and opportunities. Feel free to connect with me on social media or use the contact form to send me an email directly.
          </p>
       </div>

       <div className="relative flex flex-col items-center justify-center p-5 pb-10 rounded font-intro lg:px-20 sm:pt-10 md:flex-row">
          <form onSubmit={sendEmail} className="w-full p-8 pl-12 pr-12 border border-red-500 border-dotted rounded md:w-1/2">
             <h2 className="pb-3 pb-10 text-2xl font-semibold text-center text-gradient bg-gradient-to-br from-pink-600 to-red-500 to-yellow-200">
                Send me an email!
             </h2>
             <div>
                <div className="flex flex-col mb-3">
                   <label htmlFor="name" className="pb-2 pl-1 font-semibold text-gray-200">Name</label>
                   <input
                      type="text" id="name" name="name" defaultValue={name} onBlur={handleChange} required
                      className="px-3 py-2 bg-gray-800 border border-gray-200 rounded focus:border-red-500 focus:outline-none focus:bg-gray-900 focus:text-red-500"
                   />
                </div>
                <div className="flex flex-col mb-3">
                   <label htmlFor="subject" className="pb-2 pl-1 font-semibold text-gray-200">Subject</label>
                   <input
                      type="text" id="subject" name="subject" defaultValue={subject} onBlur={handleChange} required
                      className="px-3 py-2 bg-gray-800 border border-gray-200 rounded focus:border-red-500 focus:outline-none focus:bg-gray-900 focus:text-red-500"
                   />
                </div>
                <div className="flex flex-col mb-3">
                   <label htmlFor="email" className="pb-2 pl-1 font-semibold text-gray-200">Email</label>
                   <input
                      type="text" id="email" name="email" defaultValue={email} onBlur={handleChange} required
                      className="px-3 py-4 bg-gray-800 border border-gray-200 rounded focus:border-red-500 focus:outline-none focus:bg-gray-900 focus:text-red-500"
                   />
                </div>
                {errorMessage && (
                   <div>
                      <p className="pb-3 pl-1 text-gray-200">{errorMessage}</p>
                   </div>
                )}
                <div className="flex flex-col mb-3">
                   <label htmlFor="message" className="pb-2 pl-1 font-semibold text-gray-200">Message</label>
                   <textarea
                      rows="10" id="message" name="message" defaultValue={message} onBlur={handleChange} required
                      className="px-3 py-2 bg-gray-800 border border-gray-200 rounded focus:border-red-500 focus:outline-none focus:bg-gray-900 focus:text-red-500"
                   ></textarea>
                </div>
             </div>
             <div className="flex justify-center w-full">
                <button type="submit" className="w-48 px-4 py-2 mt-6 text-xl font-semibold transition-all transition duration-500 bg-gray-900 border border-gray-200 rounded-full cursor-pointer duration-50 focus:outline-none hover:border hover:border-dotted hover:border-red-500">
                   Send
                </button>
             </div>
             <div className="w-3/5 pt-8 m-auto text-xl text-center font-intro">{result ? <Result /> : null}</div>
          </form>
       </div>
    </section>
 )
};