import React from 'react';
import { AiPitchGenerator } from '../components/AiPitchGenerator';
import { Wrench, Sparkles, Zap } from 'lucide-react';

export const Tools: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full mb-6">
            <Wrench size={16} />
            <span className="text-xs font-black uppercase tracking-widest">Premium Tools</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            GRATIS <span className="text-brand-orange">TOOLS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Wij delen graag onze kennis. Gebruik deze tools om je eigen recruitment proces een kickstart te geven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 border border-white/5 p-8 rounded-3xl">
             <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                <Sparkles size={24} />
             </div>
             <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Hook Generator</h3>
             <p className="text-gray-400 mb-6">Onze AI-powered tool die in een handomdraai de perfecte openingszinnen voor je advertenties genereert.</p>
             <div className="text-brand-green text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <Zap size={14} /> Nu beschikbaar hieronder
             </div>
          </div>
          <div className="bg-gray-900/50 border border-white/5 p-8 rounded-3xl opacity-50 grayscale">
             <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green mb-6">
                <Wrench size={24} />
             </div>
             <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">ROI Calculator</h3>
             <p className="text-gray-400 mb-6">Bereken wat je bespaart door marketing in te zetten vs. traditionele bureaus. Binnenkort beschikbaar.</p>
             <span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded uppercase font-bold tracking-widest">Coming Soon</span>
          </div>
        </div>

        <AiPitchGenerator />
      </div>
    </div>
  );
};