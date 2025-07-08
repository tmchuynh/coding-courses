import AppLayout from "@/components/layout/AppLayout";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Coding Courses - Learn to Code, Shape Your Future",
  description:
    "Empower your child with essential digital skills through our expert-led coding classes. From elementary school to high school, our age-appropriate curriculum builds confidence, creativity, and technical skills that last a lifetime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
