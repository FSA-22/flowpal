export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        NavBar
        {children}
        Footer
    </main>  
  );
}
