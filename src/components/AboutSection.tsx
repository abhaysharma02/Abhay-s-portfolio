"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4">
                            Behind the <span className="text-neutral-500">Code</span>
                        </h2>
                        <div className="w-12 h-1 bg-white/20 rounded-full" />
                    </div>

                    <div className="glass-card relative overflow-hidden p-8 md:p-14 text-lg md:text-xl text-neutral-400 leading-relaxed font-light space-y-8">
                        {/* Subtle inner background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-3xl rounded-full" />

                        <p className="relative z-10">
                            I am a Computer Science Engineering student and full stack developer focused on building <span className="text-white font-medium drop-shadow-sm">real world SaaS platforms</span>.
                        </p>
                        <p className="relative z-10">
                            I have created multiple working products including <span className="text-white font-medium drop-shadow-sm">EventNest</span>, <span className="text-white font-medium drop-shadow-sm">Nestely</span>, and <span className="text-white font-medium drop-shadow-sm">Kartly</span>.
                        </p>
                        <p className="relative z-10">
                            My goal is to build scalable startups and useful software for real users, pushing beyond simple college projects to create production-ready tools that solve actual problems.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
