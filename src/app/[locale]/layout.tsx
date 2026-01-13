import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IBM_Plex_Mono, Martian_Mono, Inter } from "next/font/google";
import { Toaster } from "sonner";
import Providers from '../contexts/Providers';
import Header from "../components/Header/Header";
import "../globals.css";
export const runtime = "edge";
const ibm = IBM_Plex_Mono({ weight: ['100', '300', '700'], subsets: ["latin"], variable: '--font-ibm' });
const martian = Martian_Mono({ weight: ['100', '400', '700'], subsets: ["latin"], variable: '--font-martian' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Sameer Choudhary | AI-ML Engineer",
  description: "I'm Sameer Choudhary, an AI-ML Engineer specializing in artificial intelligence and machine learning. Welcome to my portfolio.",
  openGraph: {
    title: "Sameer Choudhary | AI-ML Engineer",
    description: "Check out Sameer Choudhary's AI projects.",
    url: "https://sameerchoudhary.pages.dev",
    siteName: "Sameer Choudhary Portfolio",
    images: [
      {
        url: "https://sameerchoudhary.pages.dev/images/tucano.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Choudhary Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Choudhary | AI-ML Engineer Portfolio",
    description: "AI-ML Engineer passionate about creating intelligent solutions.",
    images: ["https://sameerchoudhary.pages.dev/images/tucano.jpg"],
  },
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string }; }) {
  const messages = await getMessages();


  return (
    <html lang={locale} className="min-h-full min-w-full scroll-smooth overflow-x-hidden" suppressHydrationWarning={true}>
      <body className={inter.className + " h-full w-full bg-[hsl(60,13%,100%)] overflow-x-hidden dark:text-white text-black dark:bg-[#000000] " + martian.variable} suppressHydrationWarning={true}>
        <div style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          pointerEvents: "none"
        }}>
          <div style={{ width: "100%", height: "100%", backgroundSize: "128px", backgroundRepeat: "repeat", backgroundImage: "url('/images/noise.png')", opacity: "0.06", borderRadius: "0px" }}></div>
        </div>
        {/* beware of gpu killer. cool visuals tho */}
        {/* <Sketch/> */}
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}

