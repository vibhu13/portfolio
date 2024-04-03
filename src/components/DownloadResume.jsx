import React from 'react';
import vibhuResume from '/VibhuYadav_Resume.pdf'

const downloadPdfFile = () => {
    // Replace this URL with your actual PDF file URL
    const pdfFileUrl = vibhuResume;

    // Fetch the PDF file as a Blob
    fetch(pdfFileUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a download link for the Blob object
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);

        // Set the file name for download
        downloadLink.download = 'VibhuYadav_Resume.pdf';

        // Append the download link to the body and trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up by removing the download link from the body
        document.body.removeChild(downloadLink);
      })
      .catch(error => {
        console.error('Error fetching PDF:', error);
        // Handle error if PDF fetch fails
    });
};


const DownloadResume = () => {
    return (
        <button onClick={downloadPdfFile} value="download" className="px-4 py-2 text-sm sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg relative inline-block">
            <span class="relative">Download Resume</span>
        </button>
    )
}

export default DownloadResume;