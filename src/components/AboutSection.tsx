/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                referrerPolicy="no-referrer"
            >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
            </video>

            {/* Container */}
            <div className="relative z-10 mx-auto h-full max-w-[1831px] px-6 lg:px-12 py-[64px] lg:py-[96px] flex flex-col justify-between">
                {/* Top Row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-0">
                    <div className="relative inline-block">
                        <h2 className="font-grotesk text-[32px] md:text-[60px] uppercase leading-none text-cream">
                            Hello!<br />
                            I'm orbis
                        </h2>
                        <span className="absolute bottom-0 right-0 lg:-right-12 font-condiment text-[36px] md:text-[68px] text-neon -rotate-1 translate-y-1/2 mix-blend-exclusion pointer-events-none whitespace-nowrap">
                            Orbis
                        </span>
                    </div>

                    <div className="max-w-[266px] lg:mt-6">
                        <p className="font-mono text-[14px] md:text-[16px] uppercase leading-relaxed text-cream">
                            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
                        </p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                    <div className="flex flex-col gap-4">
                        <p className="font-mono text-[14px] md:text-[16px] uppercase text-[#010828] lg:text-cream lg:opacity-10 max-w-[400px]">
                            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
                        </p>
                        <p className="font-mono text-[14px] md:text-[16px] uppercase text-[#010828] lg:text-cream lg:opacity-10 max-w-[400px]">
                            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
                        </p>
                    </div>
                    
                    <div className="hidden lg:flex flex-col gap-4 text-right">
                        <p className="font-mono text-[14px] md:text-[16px] uppercase text-cream opacity-10 max-w-[400px]">
                            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
                        </p>
                        <p className="font-mono text-[14px] md:text-[16px] uppercase text-cream opacity-10 max-w-[400px]">
                            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
