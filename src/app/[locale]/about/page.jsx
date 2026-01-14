"use client"
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    const t = useTranslations("Hero");

    const certificates = [
        { title: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard", link: "https://drive.google.com/file/d/1Sv_9RoBNEMowhrKuF4zU2iklg-ImLsPk/view?usp=drive_link", date: "2025" },
        { title: "Introduction to Deep Learning", issuer: "Infosys Springboard", link: "https://drive.google.com/file/d/1Tm3Uz1oNWfSSYie-M19RPRklheyfqpZw/view?usp=drive_link", date: "2025" },
    ];

    const handleCertificateClick = (link) => {
        if (link && link !== "#") {
            window.open(link, "_blank");
        }
    };

    return (
        <div className="pt-32 pb-20 px-8 xl:px-4 max-w-7xl mx-auto min-h-screen flex flex-col gap-16">

            {/* Main Section: Picture + Bio */}
            <section className="flex flex-row md:flex-col gap-12 items-center justify-center">

                {/* Left: Picture of Me */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-1/3 md:w-full flex justify-end md:justify-center"
                >
                    <div className="relative w-72 h-72 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-black/5 dark:border-white/10 shadow-lg bg-gray-200 dark:bg-gray-800">
                        {/* Placeholder Image - User to replace src */}
                        <Image
                            src="/Me.jpeg"
                            alt="Sameer Choudhary"
                            fill
                            className="object-cover object-[center_100%]"

                        />
                    </div>
                </motion.div>

                {/* Right: Bio + Links */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-1/2 md:w-full flex flex-col gap-6 text-left md:items-center md:text-center"
                >
                    <div className="md:w-full md:flex md:flex-col md:items-center">
                        <h1 className="text-4xl font-bold mb-2">About Me</h1>
                        <div className="h-1 w-16 bg-black dark:bg-white rounded-full opacity-30 md:mx-auto"></div>
                    </div>

                    <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                        <p>
                            Hi I&apos;m <span className="font-semibold text-black dark:text-white">Sameer</span>, an <span className="font-semibold text-black dark:text-white">AI Engineer</span> focused on building <span className="font-semibold text-black dark:text-white">usable software</span>. I combine <span className="font-semibold text-black dark:text-white">Python-based machine learning (NLP, Computer Vision)</span> with <span className="font-semibold text-black dark:text-white">Next.js</span> to turn raw models into <span className="font-semibold text-black dark:text-white">functional, end-to-end applications</span>.
                        </p>
                        <p>
                            I am from <span className="font-semibold text-black dark:text-white">Hajipur, Bihar</span>.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-2">
                        <a href="mailto:sameerkumar12choudhary@gmail.com" className="p-3 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors group">
                            <span style={{ maskImage: `url("/images/mail.svg")` }} className="block w-6 h-6 bg-black dark:bg-white svgMask group-hover:opacity-80"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/sameer-choudhary-646117235" target="_blank" className="p-3 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors group">
                            <span style={{ maskImage: `url("/images/linkedin.svg")` }} className="block w-6 h-6 bg-black dark:bg-white svgMask group-hover:opacity-80"></span>
                        </a>
                        <a href="https://github.com/Sameerkc3579" target="_blank" className="p-3 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors group">
                            <span style={{ maskImage: `url("/images/github.svg")` }} className="block w-6 h-6 bg-black dark:bg-white svgMask group-hover:opacity-80"></span>
                        </a>
                    </div>
                </motion.div>

            </section>

            {/* Certificates Section */}
            <section className="flex flex-col items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="w-full max-w-4xl"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Certificates</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                onClick={() => handleCertificateClick(cert.link)}
                                className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer group hover:shadow-md"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-lg text-black dark:text-white group-hover:underline decoration-1 underline-offset-4">{cert.title}</p>
                                        <p className="text-sm text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
