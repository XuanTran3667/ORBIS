/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden rounded-b-[32px] bg-background">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                referrerPolicy="no-referrer"
            >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
            </video>

            {/* Container */}
            <div className="relative z-10 mx-auto h-full max-w-[1831px] px-6 lg:px-12 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between py-8">
                    <div className="font-grotesk text-[16px] uppercase tracking-wider text-cream">
                        Orbis.Nft
                    </div>
                    <Navbar />
                    <div className="w-[100px] hidden lg:block" /> {/* Spacer to balance logo */}
                </header>

                {/* Hero Content */}
                <div className="flex-1 flex flex-col justify-center relative">
                    <div className="relative lg:ml-32 max-w-[780px]">
                        <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] md:leading-[1] text-cream">
                            Beyond earth<br />
                            and ( its ) familiar boundaries
                        </h1>
                        
                        {/* Accent Cursive Text */}
                        <span className="absolute -right-4 md:-right-12 top-0 md:top-12 font-condiment text-[24px] md:text-[48px] text-neon -rotate-1 mix-blend-exclusion opacity-90 pointer-events-none whitespace-nowrap">
                            Nft collection
                        </span>
                    </div>

                    {/* Mobile Social Icons */}
                    <div className="lg:hidden mt-12">
                        <SocialIcons containerClassName="flex justify-center gap-4" />
                    </div>
                </div>

                {/* Desktop Social Icons (Top Right) */}
                <div className="hidden lg:block absolute top-32 right-12">
                    <SocialIcons containerClassName="flex flex-col gap-4" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
