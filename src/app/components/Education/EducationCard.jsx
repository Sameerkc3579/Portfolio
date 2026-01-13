import { useTranslations } from "next-intl";
import StackBox from '../Experience/StackBox';

const EducationCard = ({ title, company, date, obligations, achievements, skills }) => {
    const t = useTranslations("Education");
    return (
        <div className='flex flex-col gap-2 outline outline-1 outline-black dark:outline-white p-[6px] rounded-[30px] bg-black/5 dark:bg-[#ffffff07]'>
            <div className="flex items-start justify-between rounded-t-3xl rounded-b-xl pb-4 pt-4 px-6 bg-black/80 dark:bg-white/90 text-white dark:text-black">
                <span className="flex flex-col gap-1">
                    <span className='text-xl lg:text-sm leading-5 font-bold'>{title} <span className='invisible md:visible text-[10px]'>({date})</span></span>
                    <span className="text-gray-400 dark:text-gray-700 text-sm font-medium">{company}</span>
                </span>
                <span className='md:hidden font-medium'>{date}</span>
            </div>
            <div className="text-base lg:text-sm xxs:text-xs dark:bg-white/5 bg-black/5 rounded-t-xl rounded-b-3xl p-6">
                {skills && skills.length > 0 && <span className="flex ml-[1px] mb-4 items-center gap-1 text-nowrap xs:flex-col xs:items-start xs:gap-2">
                    <div className="flex pl-[1.3px] items-center gap-2 flex-wrap">
                        {skills.map((skill, index) => (
                            <StackBox key={index} img={skill.img} skill={skill.name} />
                        ))}
                    </div>
                </span>}
                <span className="font-semibold">{t('Coursework.title')}</span>
                <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
                    {obligations.map((obligation, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2">◉</span>
                            <span className="leading-relaxed">{obligation}</span>
                        </li>
                    ))}
                </ul>
                {achievements && achievements.length > 0 && <><span className="font-semibold">{t('Achievements.title')}</span>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-2">◉</span>
                                <span className="leading-relaxed">{achievement}</span>
                            </li>
                        ))}
                    </ul></>}
            </div>
        </div>
    );
};

export default EducationCard;
