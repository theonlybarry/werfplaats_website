import React, { useState } from 'react';
import { Cpu, Workflow, Users, BarChart3, Puzzle, LayoutTemplate, ArrowRight, MousePointerClick, Zap, UserPlus } from 'lucide-react';

export const Services: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      icon: Cpu,
      title: "AI Sourcing & Screening",
      desc: "Vind en match automatisch de beste kandidaten uit talentpools en externe bronnen met onze geavanceerde AI.",
      demoText: "Onze AI doorzoekt 10.000+ profielen per seconde en scoort ze op fitheid, zodat jouw team meteen de beste 5% target.",
      metric: "94% Match Fit"
    },
    {
      icon: Workflow,
      title: "Recruitment Workflows",
      desc: "Automatiseer repetitieve taken, e-mails en opvolgingen. Bouw efficiënte pijplijnen op maat van jouw proces.",
      demoText: "Trek de kandidaat in 'Interview'. Werftools stuurt direct een Calendly-link, verwittigt hiring managers en actualiseert de status.",
      metric: "Uren bespaard"
    },
    {
      icon: Users,
      title: "Talent Pool Management",
      desc: "Bouw en onderhoud warme relaties. Segmenteer kandidaten en houd contact voor toekomstige vacatures.",
      demoText: "Groepeer kandidaten op skillset en stuur ze op het juiste moment gepersonaliseerde WhatsApp of e-mail updates.",
      metric: "Warme Leads"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      desc: "Krijg direct inzicht in de prestaties van je campagnes en identificeer knelpunten in je recruitmentproces.",
      demoText: "Live dashboard met time-to-hire, source-of-hire en bottelnecks per afdeling in één helder fiscaal overzicht.",
      metric: "Realtime Data"
    },
    {
      icon: Puzzle,
      title: "Naadloze Integraties",
      desc: "Koppel probleemloos met systemen zoals Bullhorn, Microsoft 365 en andere HR-tech tools in je stack.",
      demoText: "1-Klik sync via de API. Koppel je ATS en Werftools verzorgt de bidirectional data swap, zonder code te typen.",
      metric: "ATS Synergi"
    },
    {
      icon: LayoutTemplate,
      title: "Werken-Bij Sites",
      desc: "Genereer en beheer conversiegerichte carrièresites direct vanuit het platform. Altijd on-brand.",
      demoText: "Onze blokken-editor genereert binnen seconden SEO en mobiel geoptimaliseerde werken-bij webpagina's.",
      metric: "+15% Conversie"
    },
    {
      icon: UserPlus,
      title: "De Echte Recruiters",
      desc: "Naast intelligente AI staan onze ervaren recruiters altijd voor je klaar. Schakel direct menselijke expertise in.",
      demoText: "Met twee klikken vraag je op een vacature extra ondersteuning aan. Eén van onze recruiters kijkt direct mee en pakt het op.",
      metric: "Persoonlijke Match"
    }
  ];

  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            HET <span className="text-brand-orange">ECOSYSTEEM</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-white transition-colors">
            Ontdek onze modulaire oplossingen en interacteer met de features hieronder om inzicht te krijgen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hoveredIdx === i;
            // Make the 7th block (Echte Recruiters) span full width
            const isFullWidth = s.title === "De Echte Recruiters";
            const colSpanClasses = isFullWidth ? "md:col-span-2 lg:col-span-3" : "";

            return (
              <div
                key={i}
                className={`relative bg-gray-900 border overflow-hidden p-8 rounded-3xl transition-all duration-500 cursor-default ${colSpanClasses} ${isHovered ? 'border-brand-orange scale-105 shadow-2xl z-10' : 'border-gray-800 scale-100 z-0'
                  }`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Default State view */}
                <div className={`transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-4 absolute pointer-events-none' : 'opacity-100 translate-y-0 relative'}`}>
                  <div className="mb-6"><Icon className="w-12 h-12 text-brand-orange" /></div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-brand-green font-bold text-sm uppercase tracking-widest">
                    <MousePointerClick size={16} /> Hover voor Demo
                  </div>
                </div>

                {/* Hover/Interactive Simulation View */}
                <div className={`transition-all duration-500 flex flex-col justify-center h-full ${isHovered ? 'opacity-100 translate-y-0 relative' : 'opacity-0 -translate-y-4 absolute pointer-events-none'}`}>
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                    <div className="w-10 h-10 bg-brand-orange/20 rounded text-brand-orange flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                    <h4 className="text-white font-display font-bold text-xl uppercase tracking-wider">{s.title}</h4>
                  </div>

                  <div className="bg-black/50 rounded-xl p-5 mb-6 border border-gray-800">
                    <p className="font-mono text-sm text-brand-green mb-4 leading-relaxed">
                      <span className="text-gray-500 mr-2">{'>'}</span>{s.demoText}
                    </p>
                    <div className="flex justify-between items-end">
                      <div className="h-2 w-24 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-orange w-3/4 animate-pulse"></div>
                      </div>
                      <span className="text-xs font-bold text-white bg-gray-800 px-2 py-1 rounded">{s.metric}</span>
                    </div>
                  </div>

                  <button className="flex items-center justify-center gap-2 w-full text-center text-sm font-bold uppercase tracking-widest text-brand-orange hover:text-white transition-colors">
                    Ontdek meer <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};