import React from 'react';

const Loading = () => {
    return (
        <>
            <div className='min-h-screen flex justify-center bg-white dark-toggle rounded-2xl my-4'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        </>
    );
};

export default Loading;