/* eslint-disable react/no-unescaped-entities */
import { resumes } from "@/app/constants/resume";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useScramble } from "use-scramble";
// import Pill from "./Pill"; // <-- 1. Commented out this import since we aren't using images anymore


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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


const Header = () => {
  const locale = useLocale();
  const t = useTranslations("Hero");

  const openResume = () => {
    window.open('/resume.pdf', '_blank') // This opens the file you put in the public folder
  }
  const scrambleSpeed = 0.5;
  const { ref: jp, replay: replayJp } = useScramble({
    text: "AI-ML", // <-- Optional: Changed Japanese to 'AI-ML Engineer' roughly
    speed: scrambleSpeed
  });
  const { ref: latin, replay: replayLatin } = useScramble({
    text: "AI Engineer", // <-- 2. Changed from t('front') to hardcoded "AI Engineer"
    speed: scrambleSpeed
  });

  return (
    <section id="hero" className="mb-[60px] md:mb-[50px] mt-[140px]">
      <div className="text-nowrap text-center font-thin uppercase text-lg font-martian text-comment-grey-darker lg:text-sm xs:text-xs sm:hidden">
        <span style={{ textOrientation: 'upright', writingMode: 'vertical-rl' }} ref={latin} onMouseOver={replayLatin} onFocus={replayLatin} className="absolute left-3  xl:-left-1   bottom-5 "></span>
        <span style={{ textOrientation: 'upright', writingMode: 'vertical-rl' }} ref={jp} onMouseOver={replayJp} onFocus={replayJp} className="absolute right-3 xs:-right-2 lg:-right-1   top-14 tracking-[0.4rem]"></span>
      </div>
      <motion.div initial="hidden" animate={"visible"} variants={container} className="mb-3 justify-center items-center text-center flex flex-col relative">

        <h1 className="text-6xl lg:text-5xl sm:text-5xl xs:text-3xl xxs:text-2xl font-bold flex items-center flex-col justify-center  leading-[60px] md:leading-snug text-nowrap md:text-wrap text-comment-grey w-fit">
          <motion.div variants={item} className="flex items-center gap-2 lg:gap-1 xs:gap-1 relative flex-wrap justify-center">
            {t("iAm")} <span className="gradient_hero">Sameer Choudhary,</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-2 lg:gap-1 xs:gap-1 flex-wrap justify-center">
            <span className="gradient_hero">AI-ML</span> {/* 4. Changed from t("frontend") */}

            {/* 5. REMOVED CAR/PROJECT PILL HERE */}

            Engineer {/* 6. Changed from t("developer") */}
          </motion.div>

          {locale != 'pt-BR' && <motion.div variants={item} className="flex items-center gap-6 lg:gap-4 xs:gap-3 flex-wrap justify-center">
            {t("basedIn")} <span className="gradient_hero">India</span> {/* 7. Changed Brazil to India */}

            {/* 8. REMOVED TOUCAN PILL HERE */}

          </motion.div>}

        </h1>
        <motion.h6 variants={item} className="px-9 text-comment-grey pt-3 pb-8 max-w-[53rem] lg:text-base sm:text-sm xs:text-xs xxs:text-[10px]">
          {t('hello')}
        </motion.h6>
        <motion.div variants={item} className="flex justify-center w-full items-center gap-4 mt-3 lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px] flex-wrap xs:justify-center xs:gap-3">
          <a href="#contact" className=" dark:bg-black bg-white p-2 xxs:p-1 px-9 outline-1 outline-black/10 dark:outline-white/10 outline outline-offset-2 rounded-full hover:opacity-80 w-fit h-full align-middle shadow-inner shadow-black/15 dark:shadow-white/20">
            {t('idea')}
          </a>
          <div className="flex items-center gap-4 xs:gap-3">
            <a onClick={openResume} className="h-full p-2 px-5 rounded-full border border-black/10 dark:border-white/20 hover:opacity-80 w-fit cursor-pointer transition-all hover:scale-105 flex items-center">
              {t('cv')}
            </a>

            {/* 9. UPDATE THESE LINKS TO YOUR OWN GITHUB/LINKEDIN/WHATSAPP */}
            <a href="https://github.com/Sameerkc3579" target="_blank" className='group'><span style={{ maskImage: `url("/images/github_cta.svg")` }} className="block size-[18px] xs:size-3 sm:size-4 bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
            <a href="https://www.linkedin.com/in/sameer-choudhary-646117235" target="_blank" className='group'><span style={{ maskImage: `url("/images/linkedin_cta.svg")` }} className="block size-[18px]  xs:size-3 sm:size-4 bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
            <a href="https://wa.me/917484856107" target="_blank" className='group'><span style={{ maskImage: `url("/images/zap.svg")` }} className="block size-[18px] sm:size-4  xs:size-3 bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
          </div>

        </motion.div>

      </motion.div >
    </section >
  );
};

export default Header;