import { Nunito } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { ClientOnly } from './utils/ClientOnly';
import { RegisterModal } from './components/Modal/RegisterModal';
import { ToasterProvier } from './providers/ToastProvider';

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
          <ToasterProvier/>
          <Navbar />
          <RegisterModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
