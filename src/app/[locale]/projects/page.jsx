"use client"
import Box from '@/app/components/Projects/components/Box';
import { projects } from '@/app/constants/projects';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AllProjects() {
    const t = useTranslations("Projects");

    return (
        <div className="pt-32 pb-20 px-8 xl:px-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
            <div>
                <h1 className="text-5xl font-bold mb-10 text-center">{t('title')}</h1>
                <div className='grid grid-cols-3 gap-[60px] md:gap-9 lg:gap-2 md:grid-cols-1'>
                    {projects.map((project) => (
                        <Box key={project.name} {...project} description={t(project.descriptionKey)} />
                    ))}
                </div>
            </div>

            <div className="mt-20 border-t border-black/10 dark:border-white/10 pt-10 flex flex-col items-center text-center gap-6">
                <h3 className="text-2xl font-bold">Start a project</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                </p>
                <div className="flex gap-4">
                    <a href="mailto:sameerkumar12choudhary@gmail.com" className="p-3 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors group">
                        <span style={{ maskImage: `url("/images/mail.svg")` }} className="block w-6 h-6 bg-black dark:bg-white svgMask group-hover:opacity-80"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/sameer-choudhary-646117235" target="_blank" className="p-3 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors group">
                        <span style={{ maskImage: `url("/images/linkedin.svg")` }} className="block w-6 h-6 bg-black dark:bg-white svgMask group-hover:opacity-80"></span>
                    </a>
                </div>
                <p className="text-sm text-gray-400 mt-4">© 2024 Sameer Choudhary. All rights reserved.</p>
            </div>
        </div>
    );
}
