"use client";

import { motion } from "framer-motion";
import { Coffee, Leaf, Code, Triangle, Server, Database, GitBranch, Network, Palette, LayoutTemplate, Layers, Blocks } from "lucide-react";

// Lucide doesn't have exact logos for all tech, so we use representative minimal icons
// to maintain the clean Apple/Vercel aesthetic without introducing clashing brand colors.
const skills = [
    { name: "Java", icon: Coffee },
    { name: "Spring Boot", icon: Leaf },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Triangle },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "REST API", icon: Network },
    { name: "Tailwind CSS", icon: Palette },
    { name: "UI/UX", icon: LayoutTemplate },
    { name: "Full Stack", icon: Layers }
];

const containerVariables = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariables = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Technical <span className="text-neutral-500">Arsenal</span>
                    </h2>
                    <div className="w-12 h-1 bg-white/20 rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariables}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariables}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="glass p-6 rounded-3xl flex flex-col items-center justify-center cursor-default min-w-[120px] aspect-square group transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1] shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)]"
                        >
                            <skill.icon
                                size={32}
                                strokeWidth={1.5}
                                className="text-neutral-400 group-hover:text-white transition-colors duration-300 mb-4"
                            />
                            <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300 tracking-wide">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
