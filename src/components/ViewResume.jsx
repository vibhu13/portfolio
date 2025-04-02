import React from 'react';
import { useNavigate } from "react-router-dom";

const ViewResume = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/resume")}
      className="px-4 py-2 text-sm sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
    >
      View Resume
    </button>
  );
};

export default ViewResume;