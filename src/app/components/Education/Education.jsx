import { useTranslations } from "next-intl";
import EducationCard from "./EducationCard";

export default function Education() {
    const t = useTranslations("Education");

    const iiit = {
        title: t("IIIT.title"),
        company: t("IIIT.company"),
        date: t('date.current'),
        obligations: [
            t("Coursework.point1"),
            t("Coursework.point2"),
        ],
        achievements: [],
        skills: [] // User didn't specify skills for education, but I can add generic ones if needed. Leaving empty for now as per resume.
    };

    return (
        <section className="relative scroll-mt-16 mb-[60px]" id="education">
            <div className="mb-7 flex gap-2 flex-col items-start">

                <h2 className="text-4xl lg:text-3xl text-left sm:text-2xl font-light text-wrap leading-tight">
                    {t("title")}
                </h2>
            </div>
            <div className="flex flex-col divide-y-[1px] gap-12">
                <EducationCard {...iiit} />
            </div>
        </section>
    );
}
