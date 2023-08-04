import { Nunito } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { RegisterModal } from './components/Modal/RegisterModal';
import { LoginModal } from './components/Modal/LoginModal';
import { ToasterProvier } from './providers/ToastProvider';
import { ClientOnly } from './utils/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvier />
          <Navbar currentUser={currentUser} />
          <RegisterModal />
          <LoginModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
