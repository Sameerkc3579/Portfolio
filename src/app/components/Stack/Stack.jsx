"use client"

import { skills_imgs } from "@/app/constants/skills_imgs";
import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Stack() {
  const t = useTranslations('Stack');

  return <section className="relative  scroll-mt-52" id="stack">
    {/* <div className="flex flex-col gap-1 absolute right-7 top-[-145px] xs:top-[-127px] circles:hidden">
{Array.from({ length: 8 }).map((_,i) => (
        <div key={i} style={{borderColor:  i % 2 == 0 ? '#7a7a7a' : '#464646'}} className="rounded-full size-3 border-solid  border-[1px]"></div>
    ))}
</div>  */}
    <div className="grid grid-rows-2 gap-2 grid-cols-6 md:grid-cols-4 xs:grid-cols-3 xs:grid-rows-5 md:grid-rows-4 md:px-2 my-[40px]">
      <div className="col-span-6 md:col-span-4 xs:col-span-3 font-light bg-black/5 border-black/20 dark:bg-[#0b0b0b65] dark:border-[hsl(0,0%,9%)] border-[1px] rounded-3xl relative flex flex-col items-center justify-center px-4">

        <h2 className="text-4xl md:text-3xl xs:text-xl w-full text-center leading-snug dark:mix-blend-difference relative">
          {t('solving')} {t('stack')}
        </h2>
      </div>

      {[{ class: "col-span-2 md:col-span-2 xs:col-span-3", skills: ["python", "cpp", "java"] },
      { class: "col-span-2 md:col-span-2 xs:col-span-3", skills: ["html", "css", "js"] },
      { class: "col-span-2 md:col-span-2 xs:col-span-3", skills: ["react", "next", "node", "tailwind"] },
      { class: "col-span-2 md:col-span-2 xs:col-span-3", skills: ["tensorflow", "pytorch"] },
      { class: "col-span-2 md:col-span-2 xs:col-span-3", skills: ["numpy", "pandas", "scikit"] },
      { class: "col-span-2 md:col-span-2 xs:col-span-3", skills: ["opencv", "yolo", "transformers", "nlp"] },
      { class: "col-start-3 col-span-2 md:col-span-4 xs:col-span-3 flex justify-center", skills: ["sql"] }
      ].map((group, i) => (
        <div key={i} className={`rounded-3xl border-black/20 dark:border-[hsl(0,0%,9%)] border-[1px] bg-black/5 dark:bg-[#0b0b0b65] flex flex-col items-center justify-center gap-4 p-3 cursor-default ${group.class}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {group.skills.map(skillKey => {
              const skill = skills_imgs[skillKey];
              if (!skill) return null;
              return (
                <div key={skillKey} className="flex flex-col items-center gap-1">
                  <div className="relative w-12 h-12">
                    <Image src={skill.image} alt={skill.name} fill className="object-contain" />
                  </div>
                  <span className="text-xs text-center font-medium dark:text-gray-400 text-gray-600">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
}

