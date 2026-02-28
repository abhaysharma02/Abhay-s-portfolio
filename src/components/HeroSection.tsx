"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const typingContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const typingProp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
    const titleText = "Currently building EventNest, Nestely and scalable dashboards.";

    return (
        <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden">
            {/* Background Gradients - Adjusted for vibrant premium style */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/[0.05] blur-[100px] rounded-full pointer-events-none mix-blend-screen animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/[0.04] blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-blob-reverse" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 w-full flex-grow justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full p-[2px] bg-gradient-to-b from-orange-500/30 to-transparent mb-8 shadow-2xl relative"
                >
                    <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl opacity-30"></div>
                    {/* Make sure to place photo.jpg in the public/ folder! */}
                    <img
                        src="/photo.jpg"
                        alt="Abhay Kumar Sharma"
                        onError={(e) => { e.currentTarget.src = "https://github.com/abhaysharma02.png"; }}
                        className="relative w-full h-full object-cover rounded-full border border-white/10"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.05] backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-xs font-semibold text-orange-200 tracking-widest uppercase">Available for Opportunities</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white drop-shadow-sm apple-glow"
                >
                    Abhay Kumar Sharma
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-3xl font-medium tracking-tight mb-6 text-gradient"
                >
                    Full Stack Developer building real SaaS products
                </motion.h2>

                <motion.div
                    variants={typingContainer}
                    initial="hidden"
                    animate="show"
                    className="text-lg md:text-xl text-neutral-500 font-light mb-12 max-w-2xl h-16 flex flex-wrap justify-center leading-relaxed"
                >
                    {titleText.split(" ").map((word, i) => (
                        <motion.span key={i} variants={typingProp} className="mr-1.5">
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:bg-neutral-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] w-full sm:w-auto justify-center"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="group px-8 py-4 glass text-white font-medium rounded-full flex items-center gap-2 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        Contact Me
                        <Mail size={18} />
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="group px-8 py-4 glass text-white font-medium rounded-full flex items-center gap-2 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        Resume
                        <Download size={18} />
                    </a>
                </motion.div>
            </div>

            {/* Stats Section below Hero */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="w-full max-w-5xl mx-auto px-6 mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 z-10"
            >
                {[
                    { label: "Projects", value: "5+" },
                    { label: "Live Apps", value: "2+" },
                    { label: "Technologies", value: "10+" },
                    { label: "Year Experience", value: "1+" },
                ].map((stat, idx) => (
                    <div key={idx} className="glass py-6 px-4 flex flex-col items-center justify-center text-center rounded-2xl hover:bg-white/[0.05] transition-colors border border-white/[0.05]">
                        <span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</span>
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">{stat.label}</span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
