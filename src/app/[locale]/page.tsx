'use client'
import React, { useState, useEffect } from 'react';
import { CardDemo } from "@/components/Card";
import { motion } from 'framer-motion';
import { Loading } from '@/components/Loading';
import Navbar from '@/components/Navbar';

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
          <Navbar />
          <CardDemo />
        </motion.div>
      )}
    </>
  );
}