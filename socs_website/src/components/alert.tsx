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
            className={`fixed top-4 right-4 z-50 p-6 rounded-[28px] shadow-lg ring-2 ring-white ring-opacity-50 bg-black text-white flex items-center space-x-4 ${
                type === 'success'
                    ? 'border border-white shadow-[0_0_20px_10px_rgba(255,255,255,0.2)]'
                    : type === 'error'
                    ? 'border border-red-400'
                    : 'border border-blue-400'
            }`}
        >
            {/* Logo Image */}
            <img
                src="/images/socs_logo.png"
                alt="Logo"
                className="w-8 h-8 animate-spin-slow"
            />
            {/* Message Text */}
            <p className="text-[15px] font-medium">{message}</p>
            {/* Close Button */}
            <button
                onClick={() => {
                    setVisible(false);
                    onClose();
                }}
                className="text-white hover:text-gray-300 ml-auto transform transition duration-200 hover:scale-110"
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;
