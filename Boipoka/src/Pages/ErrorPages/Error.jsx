import React from 'react';
import './Error.css'; // We'll define custom animation styles here

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-9xl font-bold text-red-500 animate-3d">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;
