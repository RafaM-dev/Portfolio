'use client'
import { ContactForm } from '@/components/Contact';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Navbar />
      <ContactForm />
    </motion.div>
  )
}

export default ContactPage;