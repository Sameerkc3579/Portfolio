import Box from './components/Box'
import { useTranslations, useLocale } from "next-intl";
import { motion } from 'framer-motion';
import { projects } from '@/app/constants/projects';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale();

  return <section className="scroll-mt-16" id='projects'>
    <div className='flex flex-col gap-1 items-start'>
      <h2 className="text-4xl sm:text-3xl xs:text-xl xxs:text-xl mb-3 lg:mb-1 sm:mb-0">{t('title')}</h2>
    </div>
    <motion.ul variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className='grid grid-cols-3 gap-[60px] md:gap-9 lg:gap-2 my-[40px] md:grid-cols-1'>
      {projects.slice(0, 3).map((project) => { // show only first 3 on home
        return <motion.li variants={item} key={project.name}>
          <Box  {...project} description={t(project.descriptionKey)} />
        </motion.li>
      })}
    </motion.ul>
    <div className="flex justify-center mt-8">
      <Link href={`/${locale}/projects`} className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition-opacity">
        View All Projects
      </Link>
    </div>
  </section>
}
