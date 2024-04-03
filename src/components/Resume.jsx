import React from 'react';
import vibhuResume from '/VibhuYadav_Resume.pdf'

const Resume = () => {
    return (
    <div class="bg-gray-100 text-gray-800 h-screen">
        <div class="container mx-auto py-10 px-5 h-full">
        <iframe src={vibhuResume} class="w-full h-full" />
        </div>
    </div>
    );
};

export default Resume;

