"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section
            const sections = ["about", "skills", "projects", "journey", "contact"];
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = section;
                        break;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Work", href: "#projects" },
        { name: "Journey", href: "#journey" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center pt-6 px-6 ${scrolled ? "pt-4" : "pt-8"
                }`}
        >
            <div
                className={`max-w-4xl w-full mx-auto px-6 flex items-center justify-between transition-all duration-500 rounded-full ${scrolled ? "bg-black/40 backdrop-blur-2xl border border-white/[0.08] py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" : "bg-transparent py-2 border border-transparent"
                    }`}
            >
                <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black text-xs font-black">A</span>
                    </div>
                    bhau<span className="text-neutral-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 relative ${activeSection === link.name.toLowerCase() || (activeSection === 'work' && link.name === 'Work')
                                    ? "text-white bg-white/[0.1]"
                                    : "text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden md:flex px-5 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                    Hire Me
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        className="absolute top-[80px] left-6 right-6 bg-neutral-900/90 backdrop-blur-3xl border border-white/[0.08] rounded-3xl md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl font-medium text-neutral-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-8 py-3 mt-4 text-base font-medium bg-white text-black rounded-full text-center hover:scale-105 transition-transform"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
