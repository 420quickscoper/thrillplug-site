"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ServiceModuleProps {
    numberStr: string;
    headline: string;
    subHeadline: string;
    process: string;
    deliverables: string[];
}

export default function ServiceModule({
    numberStr,
    headline,
    subHeadline,
    process,
    deliverables,
}: ServiceModuleProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            className="max-w-6xl mx-auto px-6 py-24 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-12"
        >
            {/* Left Column: Number and Broad Value */}
            <div className="md:col-span-6 md:pl-12 md:pr-8 md:border-l border-border md:sticky md:top-32 self-start">
                <motion.div variants={itemVariants} className="text-muted font-mono mb-6 text-sm">
                    {numberStr}
                </motion.div>
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-black uppercase tracking-tighter leading-[1.05] mb-6 text-foreground pr-4"
                    style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}
                >
                    {headline}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted leading-tight font-light">
                    {subHeadline}
                </motion.p>
            </div>

            {/* Right Column: Process and Deliverables */}
            <div className="md:col-span-6 md:pl-8 flex flex-col justify-center">
                <motion.div variants={itemVariants} className="mb-12">
                    <h3 className="text-xs uppercase tracking-widest text-muted mb-4 font-bold border-b border-border pb-2 inline-block">The Process</h3>
                    <p className="text-lg leading-relaxed text-foreground opacity-90">
                        {process}
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3 className="text-xs uppercase tracking-widest text-muted mb-4 font-bold border-b border-border pb-2 inline-block">Exact Deliverables</h3>
                    <ul className="space-y-4">
                        {deliverables.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-4 text-sm md:text-base leading-relaxed"
                            >
                                <div className="mt-1.5 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                                <span className="opacity-80">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}
