/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Twitter, Github } from 'lucide-react';

interface SocialIconsProps {
    className?: string;
    containerClassName?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className, containerClassName }) => {
    const socialLinks = [
        { icon: Mail, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Github, href: '#' },
    ];

    return (
        <div className={containerClassName}>
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    className={`liquid-glass w-[52px] h-[52px] rounded-[14px] flex items-center justify-center hover:bg-white/10 transition-colors duration-300 ${className}`}
                >
                    <social.icon size={20} className="text-cream" />
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
