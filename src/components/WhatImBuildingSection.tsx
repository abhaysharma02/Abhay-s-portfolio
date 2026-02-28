"use client";

import { motion } from "framer-motion";

export default function WhatImBuildingSection() {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Subtle Apple-style central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-8">
                        What I&apos;m Building
                    </h2>

                    <p className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[1.1] max-w-4xl mx-auto">
                        Currently building scalable <span className="text-neutral-500 transition-colors duration-500 hover:text-white cursor-default">SaaS platforms</span>,
                        multi-tenant <span className="text-neutral-500 transition-colors duration-500 hover:text-white cursor-default">dashboards</span>,
                        <span className="text-neutral-500 transition-colors duration-500 hover:text-white cursor-default"> POS systems</span>,
                        and <span className="text-neutral-500 transition-colors duration-500 hover:text-white cursor-default">startup products</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
