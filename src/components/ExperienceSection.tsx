"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        title: "Currently Building",
        desc: "Working on EventNest, Nestely, and BhumiSure, focusing on scalability and user acquisition.",
        date: "2024 - Present"
    },
    {
        title: "SaaS Platforms & Dashboards",
        desc: "Creating complex multi-tenant architectures, POS systems, and admin portals for businesses.",
        date: "2023 - 2024"
    },
    {
        title: "Product Ideation",
        desc: "Not only a developer, I build real products. Always validating and shipping new startup ideas.",
        date: "2022 - 2023"
    }
];

export default function ExperienceSection() {
    return (
        <section id="journey" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        The <span className="text-neutral-500">Journey</span>
                    </h2>
                    <div className="w-12 h-1 bg-white/20 rounded-full mb-8" />
                    <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto text-center leading-relaxed">
                        I am not only a developer, I build <span className="text-white font-medium drop-shadow-sm">real products</span>.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

                    <div className="space-y-16">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative pl-12 md:pl-24">
                                {/* Glowing Dot */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="absolute left-[13px] md:left-[33px] top-1.5 w-[14px] h-[14px] rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-black"
                                />

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative"
                                >
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-neutral-400 border border-white/10 rounded-full bg-white/[0.03]">
                                        {item.date}
                                    </span>
                                    <div className="glass-card p-6 md:p-8 rounded-3xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-1">
                                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                                        <p className="text-neutral-400 leading-relaxed font-light text-lg">{item.desc}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
