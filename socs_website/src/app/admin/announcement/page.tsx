import React from 'react';

interface AnnouncementFormProps {
    fields: {
        label: string;
        name: string;
        type: 'text' | 'file';
        value?: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        required?: boolean;
    }[];
    onSubmit: (e: React.FormEvent) => void;
    buttonText: string;
}

const AnnouncementForm: React.FC<AnnouncementFormProps> = ({ fields, onSubmit, buttonText }) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4 bg-gray-900 text-white p-6 rounded-md shadow-md">
            {fields.map((field) => (
                <div key={field.name} className="mb-4">
                    <label className="block font-medium mb-2">{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        accept={field.type === 'file' ? 'image/*' : undefined}
                        required={field.required}
                        className="w-full p-2 border rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
            ))}
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                {buttonText}
            </button>
        </form>
    );
};

export default AnnouncementForm;
