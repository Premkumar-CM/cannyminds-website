'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to error reporting service
        console.error('Page Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <div className="flex flex-col items-center text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Something went wrong!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We apologize for the inconvenience. An error occurred while loading this page.
                    </p>
                    <button
                        onClick={reset}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                        Try again
                    </button>
                    <a
                        href="/"
                        className="mt-4 text-blue-600 hover:text-blue-800 underline"
                    >
                        Go back home
                    </a>
                </div>
            </div>
        </div>
    );
}
