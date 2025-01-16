"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {Poppins} from "next/font/google";

const poppins4 = Poppins({weight: "600", subsets: ["latin"]});
const poppins2 = Poppins({weight: "300", subsets: ["latin"]});

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                router.push('/admin/dashboard');
            } else {
                const data = await res.json().catch(() => null);
                if (data && data.error) {
                    setError(data.error);
                } else {
                    setError('An unexpected error occurred');
                }
            }
        } catch (error) {
            setError('Failed to log in. Please try again later.' + error);
        }
    };

    return (
        <>
            <style jsx>{`
                .input-dark {
                    background-color: black;
                    color: white;
                    border: 1px solid #444;
                    border-radius: 37px;
                    padding: 12px;
                    width: 100%;
                    outline: none;
                    transition: box-shadow 0.3s ease-in-out;
                }
                .input-dark:focus {
                    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.4);
                }
            `}</style>
            <div className="min-h-screen flex items-center justify-center bg-black">
                <form
                    onSubmit={handleLogin}
                    className="bg-[#141414] p-[50px] rounded-[17px] shadow-md w-full max-w-md border border-white border-opacity-10"
                >
                    <h1 className={`${poppins4.className} text-[50px] text-center font-semibold mb-4 text-white`}>Login</h1>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label className={`${poppins4.className} block text-white text-[20px]`}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`${poppins2.className} input-dark`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`${poppins4.className} block text-white text-[20px]`}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={`${poppins2.className} input-dark`}
                        />
                    </div>
                    <div className="py-[20px]">
                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 px-4 rounded-[37px] transition hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.4)]"
                    >
                        Login
                    </button>
                    </div>
                </form>
            </div>
        </>
    );
}
