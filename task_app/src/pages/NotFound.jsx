import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h2 className="text-9xl font-extrabold text-blue-600">404</h2>
                    <h1 className="mt-6 text-3xl font-bold text-gray-900">
                        Page not found
                    </h1>
                    <p className="mt-2 text-md text-gray-600">
                        Oops! The page you are looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="mt-8">
                    <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;