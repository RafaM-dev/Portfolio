'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFlag } from 'react-icons/fa';
import { useTranslations } from "next-intl";
import enFlag from "../../assets/united-states.png";
import esFlag from "../../assets/spain.png";
import { StaticImageData } from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image'; // Add this line
import { AnimatePresence, motion } from 'framer-motion';
import { TbFileCv } from "react-icons/tb";

interface Option {
    country: string;
    code: string;
    flag: StaticImageData;
}

const Navbar: React.FC = () => {
    const t = useTranslations("Navbar");
    const router = useRouter();
    const pathname = usePathname();

    const options = React.useMemo(() => [
        { country: "English", code: "en", flag: enFlag },
        { country: "Spanish", code: "es", flag: esFlag },
    ], []);

    const [currentOption, setCurrentOption] = useState(options[0]);

    const handleLanguageChange = () => {
        const newOption = currentOption.code === 'es' ? options[1] : options[0];
        setCurrentOption(newOption);
        router.push(`/${newOption.code}`);
    };

    let linkHref = `${pathname}/contacto`;

    if (pathname.includes('/contacto')) {
        linkHref = `/`;
    }

    useEffect(() => {
        const currentLang = pathname.split('/')[1];
        const option = options.find(opt => opt.code !== currentLang);
        setCurrentOption(option || options[0]);
    }, [pathname, options]);

    return (
        <nav className='flex justify-end mb-2 mr-8 '>
            <ul className='flex justify-center items-center gap-5  z-50'>

                <li>
                    <Link href={linkHref} className="rounded-md  py-2 xl:text-2xl text-xl font-medium relative group font-montserrat">
                        <span>{pathname.includes('/contacto') ? t("home") : t("contact")}</span>
                        <span className="absolute -bottom-0 left-1/2 w-0 h-[0.1rem] bg-[#ffffff]group-hover:w-1/2 group-hover:transition-all group-hover:duration-300 duration-300"></span>
                        <span className="absolute -bottom-0 right-1/2 w-0 h-[0.1rem] bg-[#ffffff] group-hover:w-1/2 group-hover:transition-all group-hover:duration-300 duration-300"></span>
                        <span className="absolute -bottom-0 left-1/2 w-0 h-[0.1rem] bg-[#ffffff] group-hover:w-1/2 group-hover:transition-all group-hover:duration-300 duration-300"></span>
                        <span className="absolute -bottom-0 right-1/2 w-0 h-[0.1rem] bg-[#ffffff] group-hover:w-1/2 group-hover:transition-all group-hover:duration-300 duration-300"></span>
                    </Link>
                </li>
           
                <AnimatePresence mode='wait'>
                    <motion.li
                        key={currentOption.code}
                        onClick={handleLanguageChange}
                        className='cursor-pointer'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={currentOption.flag} alt={currentOption.country} width={32} />
                    </motion.li>
                </AnimatePresence>
            </ul>
        </nav>
    );
};

export default Navbar;