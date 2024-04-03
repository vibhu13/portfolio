import React, {useState} from 'react';

export const Contact = () => {

    const [yourName, setYourName] = useState('');
    const [body, setBody] = useState('');

    const sendEmail = () => {
        const mailtoLink = `mailto:smartyvibhuse@gmail.com?subject=Let's Connect&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      };

    return (
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h4 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Contact Me</h4>
                        <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        <input type="text" id="name" placeholder="Your Name" value={yourName} onChange={(e) => setYourName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 focus:outline-none dark:border-gray-700 dark:focus:ring-amber-400 dark:focus:border-amber-400 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                        </p>

                        <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        <textarea name="content" id="content" cols="30" rows="5" placeholder="Your Message" value={body} onChange={(e) => setBody(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 focus:outline-none dark:border-gray-700 dark:focus:ring-amber-400 dark:focus:border-amber-400 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"></textarea>
                        </p>

                    <p class="mt-4 mb-4 text-xl text-gray-600 md:mt-8">
                    <button onClick={sendEmail} className="px-4 py-2 text-sm sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg relative inline-block"><span class="relative">Send Message</span></button>
                    </p>
                    </div>

                    <div className="relative">
                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src="https://vibhu13.github.io/portfolio.photography/images/about.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}
