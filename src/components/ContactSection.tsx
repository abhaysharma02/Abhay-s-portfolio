"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Twitter, Send } from "lucide-react";

export default function ContactSection() {
    const socialLinks = [
        { name: "Email", icon: Mail, href: "mailto:abhas1357@gmail.com", text: "abhas1357@gmail.com" },
        { name: "Phone", icon: Phone, href: "tel:7828247897", text: "+91 7828247897" },
        { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abhay-kumar-sharma-1a3336256/", text: "abhay-kumar-sharma" },
        { name: "GitHub", icon: Github, href: "https://github.com/abhaysharma02", text: "abhaysharma02" },
        { name: "Twitter", icon: Twitter, href: "https://x.com/abhas1357", text: "@abhas1357" },
    ];

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSubmitStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Start a <span className="text-neutral-500">Conversation</span>
                    </h2>
                    <div className="w-12 h-1 bg-white/20 rounded-full mb-6" />
                    <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Open to opportunities and ready to build the next big thing. Let&apos;s talk about your next project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 glass-card p-8 md:p-10 rounded-3xl"
                    >
                        <form className="space-y-6 flex flex-col h-full" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2 pl-1">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="glass-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2 pl-1">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="glass-input"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2 pl-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="How can we help each other?"
                                    className="glass-input min-h-[150px] resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-neutral-200 hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] mt-4"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send size={18} />}
                            </button>
                            {submitStatus === "success" && (
                                <p className="text-emerald-400 text-sm font-medium text-center mt-4">Message sent successfully!</p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-red-400 text-sm font-medium text-center mt-4">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 flex flex-col gap-4"
                    >
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="glass-card p-5 rounded-2xl flex items-center gap-5 group transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                    <link.icon size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-0.5">{link.name}</h4>
                                    <p className="text-neutral-200 font-medium group-hover:text-white transition-colors tracking-tight">{link.text}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
