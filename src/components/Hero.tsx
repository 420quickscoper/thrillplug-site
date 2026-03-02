"use client";

import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const { scrollY } = useScroll();

    const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
    const displacementRef = useRef<SVGFEDisplacementMapElement>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!turbulenceRef.current || !displacementRef.current) return;

        // Cap the scrolling effect at 800px
        const progress = Math.min(latest / 800, 1);

        // Calculate intensities (Increased by 30%)
        const yFreq = progress * 0.065;
        const xFreq = progress * 0.026;
        const scale = progress * 52;

        // Apply directly to DOM nodes to avoid React/Framer hydration issues with SVG filters
        turbulenceRef.current.setAttribute("baseFrequency", `${xFreq} ${yFreq}`);
        displacementRef.current.setAttribute("scale", scale.toString());
    });

    return (
        <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6 mt-16">
            {/* Standard SVG, no motion wrappers, safe for SSR */}
            <svg style={{ display: "none" }}>
                <defs>
                    <filter id="scroll-distortion">
                        <feTurbulence
                            ref={turbulenceRef}
                            type="fractalNoise"
                            baseFrequency="0 0"
                            numOctaves="2"
                            result="warp"
                        />
                        <feDisplacementMap
                            ref={displacementRef}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="0"
                            in="SourceGraphic"
                            in2="warp"
                        />
                    </filter>
                </defs>
            </svg>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-5xl"
            >
                <h1
                    className="text-[clamp(3rem,10vw,10rem)] leading-[0.8] font-black tracking-tighter text-foreground mb-8"
                    style={{
                        filter: 'url(#scroll-distortion)',
                        WebkitFilter: 'url(#scroll-distortion)',
                        transform: 'translateZ(0)' // Force hardware acceleration
                    }}
                >
                    thrillplug.
                </h1>
                <p className="text-sm md:text-base tracking-[0.2em] uppercase text-muted max-w-lg mx-auto">
                    We don't broker the connection. We are the connection.
                </p>
            </motion.div>
        </section>
    );
}
