import React from 'react';
import { BooleanSearchTool } from '../components/BooleanSearchTool';
import { MarketResearchTool } from '../components/MarketResearchTool';
import { Wrench, Sparkles, Zap, Search, PieChart } from 'lucide-react';

export const Tools: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full mb-6">
            <Wrench size={16} />
            <span className="text-xs font-black uppercase tracking-widest">Premium Tools</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-6">
            GRATIS <span className="text-brand-orange">TOOLS</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Wij delen graag onze kennis. Gebruik deze tools om je eigen recruitment proces een kickstart te geven.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <section className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden" id="search-tool">
              <BooleanSearchTool />
            </section>

            <section className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden" id="market-tool">
              <MarketResearchTool />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};