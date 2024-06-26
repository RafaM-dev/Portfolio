import type { Metadata } from "next";
import "./globals.css";
import { Montserrat as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import ParticlesComponent from "@/components/Particles";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "RafaDev",
};

export default function RootLayout({
  children,
  locale
}: Readonly<{
  children: React.ReactNode; locale: never;
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/my-icon.ico" sizes="16" />
        <link
          rel="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        ></link>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )} >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ParticlesComponent />
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}