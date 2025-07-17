import './globals.css';
import Navbar from './components/navbar';

export const metadata = {
  title: 'Faheem Portfolio',
  description: 'Personal portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
