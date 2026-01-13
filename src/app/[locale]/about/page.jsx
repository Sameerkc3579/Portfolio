"use client"
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    const t = useTranslations("Hero");

    const certificates = [
        // Placeholder certificates
        // { title: "Deep Learning Specialization", issuer: "Coursera", link: "#", date: "2024" },
    ];

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
                            src="/images/photo.jpg"
                            alt="Sameer Choudhary"
                            fill
                            className="object-cover"
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
                            I am a passionate AI-ML Engineer based in India, dedicated to building intelligent systems that bridge the gap between complex algorithms and real-world utility. My journey is driven by a curiosity for Deep Learning, Computer Vision, and Natural Language Processing.
                        </p>
                        <p>
                            I specialize in Python ecosystems (PyTorch, TensorFlow) and modern web technologies like Next.js. I strive to create software that not only functions efficiently but feels consistent, premium, and intuitive. I am always excited to collaborate on innovative projects.
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
                        {/* Placeholder Cards - User to add later */}
                        <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer group">
                            <p className="font-semibold text-lg text-black dark:text-white group-hover:underline decoration-1 underline-offset-4">Certificate Name Placeholder</p>
                            <p className="text-sm text-gray-500 mt-1">Issuer Name • 2024</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer group">
                            <p className="font-semibold text-lg text-black dark:text-white group-hover:underline decoration-1 underline-offset-4">Certificate Name Placeholder</p>
                            <p className="text-sm text-gray-500 mt-1">Issuer Name • 2024</p>
                        </div>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
