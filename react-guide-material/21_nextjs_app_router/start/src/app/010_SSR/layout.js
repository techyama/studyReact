export const metadeta = {
    title: 'Next.js',
    description: 'Generated by Next.js'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="body-class">{children}</body>
        </html>
    );
};