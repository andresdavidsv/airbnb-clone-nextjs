import { Nunito } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { ClientOnly } from './utils/ClientOnly';
import { Modal } from './components/Modal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal isOpen title="Hello World" actionLabel="Submit" />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
