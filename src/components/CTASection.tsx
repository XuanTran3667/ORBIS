/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Twitter, Github } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="relative w-full bg-background overflow-hidden">
            {/* Video Background (Native Aspect Ratio) */}
            <div className="w-full relative">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                >
                    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
                </video>

                {/* Text Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-end px-[5%] lg:pr-[20%] lg:pl-[15%]">
                    <div className="relative text-right max-w-[1200px]">
                        {/* Accent Text */}
                        <span className="absolute -top-12 lg:-top-24 left-0 font-condiment text-[17px] md:text-[40px] lg:text-[68px] text-neon mix-blend-exclusion normal-case">
                            Go beyond
                        </span>
                        
                        <h2 className="font-grotesk text-[16px] sm:text-[30px] md:text-[45px] lg:text-[60px] uppercase leading-[1.1] text-cream">
                            <span className="block mb-4 md:mb-8 lg:mb-12">JOIN US.</span>
                            REVEAL WHAT'S HIDDEN.<br />
                            DEFINE WHAT'S NEXT.<br />
                            FOLLOW THE SIGNAL.
                        </h2>
                    </div>
                </div>

                {/* Sidebar Social Icons */}
                <div className="absolute left-[8%] bottom-[12%] sm:bottom-16 md:bottom-20 lg:bottom-[20%] z-20">
                    <div className="liquid-glass rounded-[0.5rem] md:rounded-[1.25rem] flex flex-col overflow-hidden">
                        {[Mail, Twitter, Github].map((Icon, idx) => (
                            <button
                                key={idx}
                                className={`
                                    w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                                    h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[12.77rem]
                                    flex items-center justify-center
                                    hover:bg-white/10 transition-colors duration-300
                                    ${idx !== 2 ? 'border-b border-white/10' : ''}
                                `}
                            >
                                <Icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-cream" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
