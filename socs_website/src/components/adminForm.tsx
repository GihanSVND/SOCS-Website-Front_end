import React from 'react';

interface FormField {
    label: string;
    name: string;
    type: 'text' | 'file' | 'hidden';
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

interface ReusableFormProps {
    fields: FormField[];
    onSubmit: (e: React.FormEvent) => void;
    buttonText: string;
}

const AdminForm: React.FC<ReusableFormProps> = ({fields, onSubmit, buttonText}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-md">
            {fields.map((field) => (
                <div key={field.name} className="mb-4">
                    {field.type !== 'hidden' && (
                        <label className="block text-gray-700 font-medium mb-2">{field.label}</label>
                    )}
                    <input
                        type={field.type}
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        accept={field.type === 'file' ? 'image/*' : undefined}
                        required={field.required}
                        className="border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
            ))}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
                {buttonText}
            </button>
        </form>
    );
};

export default AdminForm;
