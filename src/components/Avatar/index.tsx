'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import myImage from '../../assets/yo2__2_-removebg-preview-transformed.png';

export const InteractiveImage = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 2, delay: 2}}
            style={{
                position: 'absolute',
                top: 13,
                left: 430,
                zIndex: 0,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Image
                src={myImage}
                alt="Interactive"
                layout="fixed"
                width={200}
                height={100}
            />
            <div className="px-3.5 py-2 bg-gray-100 rounded-3xl rounded-bl-none justify-between items-center gap-3 flex input-range absolute left-40 top-5 shadow-xl">
                <p className="text-xl font-normal text-gray-900">¡Hola!</p>
            </div>
        </motion.div>
    );
};