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
        <form onSubmit={onSubmit} className="space-y-4 bg-black p-[40px] shadow-md rounded-[37px]">
            {fields.map((field) => (
                <div key={field.name} className="mb-4">
                    {field.type !== 'hidden' && (
                        <label className="block text-white font-medium mb-2">{field.label}</label>
                    )}
                    {field.type === 'file' ? (
                        <div className="w-full">
                            <label
                                htmlFor={field.name}
                                className="block cursor-pointer border-2 border-dashed border-gray-400 rounded-[30px] p-6 text-center hover:border-white transition "
                            >
                                <div id={`${field.name}-preview`} className="flex flex-col items-center space-y-2">
                                    <svg
                                        className="w-8 h-8 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    <p className="text-gray-400 text-sm">Click to upload file</p>
                                </div>
                            </label>
                            <input
                                id={field.name}
                                type="file"
                                name={field.name}
                                accept="image/*"
                                onChange={(e) => {
                                    field.onChange(e);
                                    const file = e.target.files?.[0];
                                    const previewElement = document.getElementById(`${field.name}-preview`);

                                    if (file && previewElement) {
                                        const reader = new FileReader();
                                        reader.onload = () => {
                                            if (file.type.startsWith("image/")) {
                                                previewElement.innerHTML = `
                      <img src="${reader.result}" alt="Uploaded file thumbnail" class="w-40 h-40 object-cover rounded-lg" />
                      <p class="text-gray-300 text-sm truncate">${file.name}</p>
                    `;
                                            } else {
                                                previewElement.innerHTML = `
                      <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.88 3.549a2.4 2.4 0 012.4 2.4v12.6a2.4 2.4 0 01-2.4 2.4H7.12a2.4 2.4 0 01-2.4-2.4V5.949a2.4 2.4 0 012.4-2.4h9.76z" />
                      </svg>
                      <p class="text-gray-300 text-sm truncate">${file.name}</p>
                    `;
                                            }
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                required={field.required}
                                className="hidden"
                            />
                        </div>
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={field.value as string}
                            onChange={field.onChange}
                            required={field.required}
                            className="border rounded-[37px] p-3 w-full focus:outline-none bg-[#252525] transition focus:shadow-[0_0_15px_5px_rgba(255,255,255,0.4)] "
                        />
                    )}
                </div>
            ))}
            <div className="pt-[20px]">
                <button
                    type="submit"
                    className="w-full bg-white text-black py-3 px-4 rounded-[37px] transition hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.4)]"
                >
                    {buttonText}
                </button>
            </div>
        </form>

    );
};

export default AdminForm;
