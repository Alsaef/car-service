// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <h2 className='text-center text-4xl pb-5'>&#128549;</h2>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center block"
        >
          Go to Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default Error;