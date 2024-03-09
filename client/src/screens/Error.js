import React from 'react'

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg text-gray-800 mb-4">We apologize for the inconvenience.</p>
                <img
                    src="https://cdn.pixabay.com/photo/2015/08/05/15/04/mistake-876597_1280.jpg"
                    alt="Error"
                    className="w-full rounded h-64 mb-4 object-cover"
                />
                <div className='flex justify-center'>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 text-center py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Error