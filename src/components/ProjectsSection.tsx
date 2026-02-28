"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Server, Database, Triangle, Palette, LayoutTemplate, Coffee, Leaf, Network } from "lucide-react";

const getTechIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
        case 'react': return <Code size={14} />;
        case 'next.js': return <Triangle size={14} fill="currentColor" />;
        case 'node.js': return <Server size={14} />;
        case 'mongodb': return <Database size={14} />;
        case 'mysql': return <Database size={14} />;
        case 'tailwind css':
        case 'tailwind': return <Palette size={14} />;
        case 'ui/ux': return <LayoutTemplate size={14} />;
        case 'java': return <Coffee size={14} />;
        case 'spring boot': return <Leaf size={14} />;
        case 'rest api': return <Network size={14} />;
        default: return <Code size={14} />;
    }
};

const projects = [
    {
        title: "EventNest.club",
        description: "College event & club management platform with admin dashboard and live deployment.",
        link: "https://eventnest.club",
        github: "#",
        tags: ["Next.js", "React", "Node.js", "MongoDB"],
        preview: "https://image.thum.io/get/width/800/crop/1000/https://eventnest.club",
        status: "Live",
        statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
    },
    {
        title: "Nestely POS / SaaS",
        description: "QR based ordering, vendor dashboard, POS, and multi-tenant SaaS system.",
        link: "https://nestely.in",
        github: "#",
        tags: ["React", "Spring Boot", "MySQL", "Tailwind"],
        preview: "https://image.thum.io/get/width/800/crop/1000/https://nestely.in",
        status: "Live",
        statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
    },
    {
        title: "Kartly POS System",
        description: "POS and QR ordering system for shops and restaurants, similar to Nestely SaaS platform.",
        link: "#",
        github: "#",
        tags: ["Java", "Spring Boot", "REST API"],
        preview: "https://image.thum.io/get/width/800/crop/1000/https://tailwindcss.com", // Placeholder
        status: "Building",
        statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    },
    {
        title: "BhumiSure",
        description: "Land investment & property verification platform with data based insights.",
        link: "#",
        github: "#",
        tags: ["Next.js", "Tailwind CSS", "UI/UX"],
        preview: "https://image.thum.io/get/width/800/crop/1000/https://nextjs.org", // Placeholder
        status: "Building",
        statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
                        Featured <span className="text-neutral-500">Work</span>
                    </h2>
                    <div className="w-12 h-1 bg-white/20 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -8 }}
                            className="group relative flex flex-col h-full rounded-3xl bg-neutral-900/40 border border-white/[0.05] backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                            {/* Image Thumbnail Preview */}
                            <div className="h-80 w-full relative overflow-hidden flex items-center justify-center border-b border-white/[0.05] bg-neutral-900 shadow-inner">
                                <img
                                    src={project.preview}
                                    alt={`${project.title} preview`}
                                    className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                                {/* Status Badge */}
                                <div className="absolute top-6 right-6 z-20">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border flex items-center gap-1.5 backdrop-blur-md shadow-lg ${project.statusColor}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'}`}></span>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed text-lg font-light">{project.description}</p>

                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 flex items-center gap-2 text-xs font-medium text-neutral-300 bg-white/[0.03] rounded-full border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                            {getTechIcon(tag)}
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-sm font-medium text-black bg-white rounded-full px-6 py-3 hover:bg-neutral-200 hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                        <ExternalLink size={16} />
                                        Visit
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/[0.05] border border-white/[0.1] rounded-full px-6 py-3 hover:bg-white/[0.1] hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                                        <Github size={16} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
