import React, { useEffect, useState } from "react";
import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";

export const Loading = () => {
  const [key, setKey] = useState(0);
  const text = "RafaDev...".split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setKey(prevKey => prevKey + 1);
    }, text.length * 250);

    return () => clearTimeout(timer);
  }, [key]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="App"
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.35,
              delay: i / 5,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}