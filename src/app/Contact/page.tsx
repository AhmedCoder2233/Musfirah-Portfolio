"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaDiscord,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiGmail, SiLinkedin } from "react-icons/si";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section
      ref={ref}
      id="#contact"
      className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4 min-h-[80vh]"
    >
      {/* Floating contact elements */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              rotate: Math.random() * 360,
              opacity: 0.1 + Math.random() * 0.2,
            }}
            animate={{
              x: [null, Math.random() * 1000],
              y: [null, Math.random() * 1000],
              rotate: [null, 360],
            }}
            transition={{
              duration: 30 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className={`absolute ${
              i % 4 === 0
                ? "text-cyan-400/10"
                : i % 3 === 0
                ? "text-teal-400/10"
                : "text-white/05"
            } text-2xl md:text-3xl`}
          >
            {i % 4 === 0 ? "@" : i % 3 === 0 ? "✉️" : "📱"}
          </motion.div>
        ))}
      </motion.div>

      {/* Glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 -left-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-cyan-400 blur-xl md:blur-3xl opacity-10 md:opacity-20 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-1/4 -right-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-teal-400 blur-xl md:blur-3xl opacity-10 md:opacity-20 pointer-events-none"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-6xl mx-auto z-10 w-full"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl -mt-24 md:text-4xl md:-mt-16 font-bold text-cyan-400 mb-3">
            Let's Connect
          </h2>
          <div className="w-20 md:w-24 h-0.5 md:h-1 bg-cyan-400/70 mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-300">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <a
                    href="mailto:musfirah@example.com"
                    className="text-gray-300 text-sm hover:text-cyan-400 transition-colors"
                  >
                    musfirahtabassum1510@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-4">
              Social Media
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/Musfirah911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-cyan-400 transition-all"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/musfirah-tabassum-911-913-khum/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-blue-600 hover:text-white transition-all"
              >
                <SiLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/musfirah_tabassum?igsh=MWcydzZpa2RlY2Qzdg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-pink-600 hover:text-white transition-all"
              >
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
              <a
                href="https://discord.com/users/musfirah_tabassum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-indigo-600 hover:text-white transition-all"
              >
                <FaDiscord className="text-xl" />
                <span>Discord</span>
              </a>
            </div>
          </motion.div>

          {/* Freelance Platforms Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-4">
              Freelance Platforms
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://www.fiverr.com/musfirah_911/craft-pixel-perfect-and-modern-and-interactive-website-ui?utm_medium=shared&utm_source=copy_link&utm_campaign=base_gig_create_share&utm_term=bdGPezX&view=gig&gig_id=419536147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-green-500 hover:text-white transition-all"
              >
                <SiFiverr className="text-xl" />
                <span>Fiverr</span>
              </a>
              <a
                href="mailto:musfirahtabassum1510@gmail.com"
                className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-red-500 hover:text-white transition-all"
              >
                <SiGmail className="text-xl" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
