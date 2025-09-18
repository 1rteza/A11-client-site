import React from 'react';

const Loading = () => {
    return (
        <>
            <div className='min-h-screen  flex flex-col justify-center items-center text-center  bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back rounded-2xl my-4'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        </>
    );
};

export default Loading;