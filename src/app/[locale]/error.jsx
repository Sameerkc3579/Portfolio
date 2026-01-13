'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition-opacity"
            >
                Try again
            </button>
        </div>
    );
}
