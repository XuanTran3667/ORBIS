/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight } from 'lucide-react';

const NFTCard: React.FC<{ videoUrl: string; score: string }> = ({ videoUrl, score }) => {
    return (
        <div className="liquid-glass rounded-[24px] p-[14px] hover:bg-white/10 transition-all duration-500 group">
            {/* Video Container */}
            <div className="relative pb-[100%] rounded-[18px] overflow-hidden mb-5">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>

            {/* Overlay Bar */}
            <div className="liquid-glass rounded-[14px] px-[14px] py-[10px] flex items-center justify-between">
                <div>
                    <div className="text-[9px] text-cream/70 uppercase font-mono tracking-wider">
                        Rarity Score:
                    </div>
                    <div className="text-[14px] text-cream font-mono font-bold">
                        {score}
                    </div>
                </div>
                
                <button className="w-[36px] h-[36px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
                    <ChevronRight size={18} className="text-white" />
                </button>
            </div>
        </div>
    );
};

const CollectionSection: React.FC = () => {
    const nftItems = [
        {
            videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
            score: '8.7/10'
        },
        {
            videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
            score: '9/10'
        },
        {
            videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
            score: '8.2/10'
        }
    ];

    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-[1831px] px-6 lg:px-12">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-12">
                    <div>
                        <h2 className="font-grotesk text-[32px] md:text-[60px] uppercase leading-none text-cream">
                            Collection of<br />
                            <span className="ml-12 md:ml-24 lg:ml-32">
                                <span className="font-condiment text-neon normal-case mr-4">Space</span>
                                objects
                            </span>
                        </h2>
                    </div>

                    <button className="group text-left">
                        <div className="flex items-baseline gap-2">
                            <span className="font-grotesk text-[32px] md:text-[60px] text-cream">SEE</span>
                            <div className="flex flex-col">
                                <span className="font-grotesk text-[20px] md:text-[36px] leading-none text-cream">ALL</span>
                                <span className="font-grotesk text-[20px] md:text-[36px] leading-none text-cream">CREATORS</span>
                            </div>
                        </div>
                        <div className="h-[6px] md:h-[10px] bg-neon w-full mt-2 transition-transform duration-300 group-hover:scale-x-110 origin-left" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nftItems.map((item, idx) => (
                        <NFTCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionSection;
