import React from "react";
import { motion } from "framer-motion";
export default function Testimonial({ name, rating, message }) {
    const stars = "⭐".repeat(rating).padEnd(5, "☆");
  
    return (
      <motion.div initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md backdrop-blur-md transition hover:shadow-xl text-white">
        <div className="mb-2 text-lg font-semibold">{name}</div>
        <div className="mb-3 text-yellow-400 text-xl">{stars}</div>
        <p className="text-sm text-gray-200">{message}</p>
      </motion.div>
    );
  }
  