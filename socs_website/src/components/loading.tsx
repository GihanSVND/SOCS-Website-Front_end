import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <img
                src="/images/socs_logo.png"
                alt="Loading"
                className="w-12 h-12 animate-spin"
            />
        </div>
    );
};

export default Loading;
