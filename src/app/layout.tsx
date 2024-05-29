import type { Metadata } from "next";
import "./globals.css";
import { Montserrat as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import ParticlesComponent from "@/components/Particles";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "RafaDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        ></link>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )} suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}