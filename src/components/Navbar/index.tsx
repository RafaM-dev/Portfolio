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

    useEffect(() => {
        const currentLang = pathname.split('/')[1];
        const option = options.find(opt => opt.code !== currentLang);
        setCurrentOption(option || options[0]);
    }, [pathname, options]);

    return (
        <nav className='flex justify-end mb-2 mr-8 '>
            <ul className='flex justify-center items-center  z-50'>
                <li>
                    <Link href="/contacto" className='underline underline-offset-4 mr-5'>{t("contact")}</Link>
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