/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CollectionSection from './components/CollectionSection';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <main className="relative bg-background">
      {/* Texture Overlay */}
      <div className="texture-overlay" />
      
      {/* Background Atmospherics */}
      <div className="bg-atmospherics" />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <CTASection />
      
      {/* Footer / Copyright (Optional but good practice) */}
      <footer className="bg-background py-12 border-t border-white/5">
        <div className="mx-auto max-w-[1831px] px-6 lg:px-12 flex justify-between items-center opacity-40 font-mono text-[10px] uppercase tracking-widest">
            <span>© 2026 Orbis.Nft Digital Artifacts</span>
            <span>Fixed Beyond Time and Place</span>
        </div>
      </footer>
    </main>
  );
}
