"use client"

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ThemeSwitcher from "../Hero/ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { useTranslations, useLocale } from 'next-intl';
import { useOnClickOutside } from 'usehooks-ts';

const Header = () => {
  const t = useTranslations('Header');
  const locale = useLocale();

  return (<motion.header initial={{ y: -50 }} animate={{ y: 0 }} className="fixed top-0 inset-x-0 p-2 z-50 flex justify-center pointer-events-none">
    <nav className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-7xl pointer-events-auto">
      <div></div>

      <div className="flex justify-center">
        <SlideTabs />
      </div>

      <ul className='flex gap-3 items-center justify-end md:hidden'>

        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <a href="https://github.com/Sameerkc3579" target="_blank" className='group'><span style={{ maskImage: `url("/images/github.svg")` }} className="block mx-auto size-[18px] bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sameer-choudhary-646117235" target="_blank" className='group'><span style={{ maskImage: `url("/images/linkedin.svg")` }} className="block mx-auto size-[18px] bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
        </li>
      </ul>


    </nav>
  </motion.header>
  );
};

const SlideTabs = () => {
  const t = useTranslations('Header');
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="z-20 mx-auto flex items-center justify-center w-fit rounded-full relative bg-black/80 backdrop-blur-md p-1 border border-white/20 shadow-sm"
    >
      <Tab setPosition={setPosition}>home</Tab>
      <Tab setPosition={setPosition}>projects</Tab>
      <Tab setPosition={setPosition}>about</Tab>
      <Tab setPosition={setPosition}>contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};


const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);
  const t = useTranslations('Header');
  const locale = useLocale();

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer text-xs uppercase text-white mix-blend-difference"
    >
      <a className="px-3 py-1.5 block " href={children === 'about' ? `/${locale}/about` : children === 'projects' ? `/${locale}/projects` : `/${locale}#${children}`}>
        {t(children)}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white"
    />
  );
};

export default Header;
