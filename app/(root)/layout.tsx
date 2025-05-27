import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full flex-col min-h-screen text-gray-900">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
