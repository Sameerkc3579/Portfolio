import { skills_imgs } from "@/app/constants/skills_imgs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Box.module.scss"
import StackBox from "../../Experience/StackBox";

export default function Box({ img, gif, name, description, skills, link, subtitle, isOnline, fit = 'bg-cover' }) {
  const t = useTranslations('Projects');
  return <a href={link} target="_blank"
    style={{ '--img-project': `url('${img}')`, '--gif-project': `url('${gif ?? img}')` }}
    className={`shadow-[0_0_10px_#00000040] dark:shadow-[0_0_20px_#ffffff30] relative z-10 transition-all overflow-visible p-4 cursor-pointer border-solid border-[1px] rounded-[30px] h-full flex flex-col gradient group ${styles.box}`}
  >
    <span className="absolute inset-0 bg-box-gradient opacity-0 -z-10 transition-opacity duration-300 ease-in-out rounded-[30px] group-hover:opacity-100"></span>
    <div className={`bg-white rounded-t-3xl overflow-hidden rounded-b-xl h-[300px] lg:h-[150px]  w-full ${fit} bg-no-repeat ${styles.box_img}`}>
    </div>
    <div className="mt-6 font-code pb-12">
      <span className="text-3xl lg:text-2xl sm:text-xl font-bold">{name}</span>
      {subtitle && <span className="text-xs"> ({subtitle})</span>}
      <br />
      <p className="text-lg text-[#7a7a7a] dark:text-[#C9C9C9] block my-2 leading-relaxed">{description}</p>
      <div className="flex items-center absolute bottom-4 flex-wrap gap-2">
        {skills.map((skill, index) => (
          <StackBox key={index} img={skills_imgs[skill].image} skill={skills_imgs[skill].name} />
        ))}
      </div>
    </div>
  </a>
}