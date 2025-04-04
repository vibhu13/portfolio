import React from 'react';
import DownloadResume from './DownloadResume';
import ViewResume from './ViewResume';
import { Skills } from './Skills';

export const About = () => {
    return (
        <section class="pt-10 overflow-hidden bg-white dark:bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 md:grid-cols-2">
    
                <div>
                    <h2 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hi 👋 I am Vibhu Yadav
                    </h2>
                    <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-400 md:mt-8">
                    A Software Engineer currently working at Apple.
                    I have around 7 years of experience with previous roles at Expedia Group and Info Edge India Ltd.
                    </p>
                    <Skills/>
                    <p class="mt-4 mb-4 text-xl text-gray-600 md:mt-8 space-x-4">
                        <ViewResume/>
                        <DownloadResume/>
                    </p>
                </div>
    
                <div class="relative">
                    <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://vibhu13.github.io/portfolio.photography/images/about.jpg" alt="" />
                </div>
    
            </div>
        </div>
    </section>
    )
}

export default About;
