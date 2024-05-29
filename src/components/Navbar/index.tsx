import Link from 'next/link';
import React from 'react';
import { FaFlag } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className='flex justify-end mb-2'>
            <ul>
                <li>
                    <Link href="/contacto" className='underline underline-offset-4 mr-5'>Contacto</Link>
                </li>
                <li>
                    <Link href="/change-language">
                            <FaFlag />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;