/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const Navbar: React.FC = () => {
    const navLinks = [
        { name: 'Homepage', href: '#' },
        { name: 'Gallery', href: '#' },
        { name: 'Buy NFT', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <nav className="liquid-glass rounded-[28px] px-[40px] py-[16px] hidden lg:block">
            <ul className="flex items-center gap-[40px]">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
