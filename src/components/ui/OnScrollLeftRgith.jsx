import { motion } from "framer-motion";
import React from "react";

const OnScrollLeftRight = ({ tostart, children }) => {
  return (
    <motion.div
      initial={{ x: tostart, opacity: 0 }} // start from left or right
      whileInView={{ x: 0, opacity: 1 }} // move to original position
      transition={{ duration: 1.1 }}
      viewport={{ once: true, amount: 0.6 }} // animate only once when in view
    >
      {children}
    </motion.div>
  );
};

export default OnScrollLeftRight;
