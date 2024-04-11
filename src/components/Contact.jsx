import React, {useState} from 'react';

export const Contact = () => {

    const [yourName, setYourName] = useState('');
    const [body, setBody] = useState('');

    const [showMessage, setShowMessage] = useState(false);

    const submitFn = (e) => {
        const formElement = document.querySelector("form");
        e.preventDefault();
        const formData = new FormData(formElement);
        fetch(
            "https://script.google.com/macros/s/AKfycbzzp7YVZbu8AmrTc_P9dkApgZQQTqW6zrpbqQZB12N9kSeLnsbX0mQ0lSxI0EGGMvDC/exec"
            ,{ method: "POST", body: formData, redirect: "follow"}
        ).then((res) => res.json()).then((data) => {
            console.log(data);
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
              }, 3000);

        }).catch((err) =>{
            console.log(err);
        });
    }
     

    return (
        <section className="pt-10 overflow-hidden bg-white dark:bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <form onSubmit={(e) => submitFn(e)}>
                        <h4 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Contact Me</h4>
                        <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        <input type="text" id="name" name="Name" placeholder="Your Name" value={yourName} onChange={(e) => setYourName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 focus:outline-none dark:border-gray-700 dark:focus:ring-amber-400 dark:focus:border-amber-400 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                        </p>

                        <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        <textarea name="Message" id="content" cols="30" rows="5" placeholder="Your Message" value={body} onChange={(e) => setBody(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 focus:outline-none dark:border-gray-700 dark:focus:ring-amber-400 dark:focus:border-amber-400 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"></textarea>
                        </p>

                    <p class="mt-4 mb-4 text-xl text-gray-600 md:mt-8">
                    <button type="submit" className="px-4 py-2 text-sm sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg relative inline-block"><span class="relative">Send Message</span></button>
                    </p>
                    { showMessage &&<h5> {/* <!-- Alert Success --> */}
                        <div class="max-w-lg mt-3 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span class="font-medium">Your Message was Sent Successfully!</span>
                        </div>
                        {/* <!-- End Alert Success --> */}
                    </h5>}
                    </form>

                    <div className="relative">
                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src="https://vibhu13.github.io/portfolio.photography/images/about.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}
