"use client";

import Cta from "../components/Cta/Cta";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";

import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Stack from "../components/Stack/Stack";
import "../globals.css";
import Script from 'next/script';

export default function Home() {

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sameer Choudhary",
            url: "https://sameerchoudhary.pages.dev", // <-- replace with your domain
            sameAs: [
              "https://github.com/Sameerkc3579", // <-- replace with your links
              "https://www.linkedin.com/in/sameer-choudhary-646117235"
            ],
            jobTitle: "AI-ML Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance"
            },
            description: "AI-ML Engineer specializing in artificial intelligence and machine learning. Welcome to my portfolio."
          }),
        }}
      />

      <div
        className="min-h-full min-w-full px-[130px] py-[40px] xl:px-[30px] sm:px-6 xs:px-4 overflow-x-hidden"
        id="home"
      >
        <main className="my-10 lg:my-5">
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Stack />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
}
