import React, { useState, useEffect } from 'react';

interface AlertProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 3000); // Auto-hide after 3 seconds
        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) return null;

    return (
        <div
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-md ${
                type === 'success'
                    ? 'bg-green-500 text-white'
                    : type === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-blue-500 text-white'
            }`}
        >
            <p>{message}</p>
            <button
                onClick={() => {
                    setVisible(false);
                    onClose();
                }}
                className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;
