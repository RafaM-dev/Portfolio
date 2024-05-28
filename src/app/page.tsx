'use client'
import React, { useState, useEffect } from 'react';
import { InteractiveImage } from "@/components/Avatar";
import { CardDemo } from "@/components/Card";
import ParticlesComponent from '@/components/Particles';
import { motion } from 'framer-motion';
import { Loading } from '@/components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ParticlesComponent />
          <InteractiveImage />
          <CardDemo />
        </motion.div>
      )}
    </>
  );
}