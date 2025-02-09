import {Poppins} from 'next/font/google';
import './globals.css';

const poppins = Poppins({weight: '400', subsets: ['latin']});

export const metadata = {
    title: 'Your Website Title',
    description: 'Your website description',
    verification: {
        google: 'o2HXFlunKthkmZlEzQQ3iWt_XZBe3d9wNAN6RgifN5c',
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head/>
        <body className={poppins.className}>{children}</body>
        </html>
    );
}
