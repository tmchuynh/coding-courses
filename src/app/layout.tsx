import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow mt-24 md:pb-0">
            <DynamicBreadcrumb />
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
