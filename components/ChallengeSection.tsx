import React from 'react';
import { AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { Button } from './Button';

export const ChallengeSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Billboard Visual Concept */}
        <div className="bg-brand-dark rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl mb-24 text-center md:text-left">
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-brand-orange font-display text-xl tracking-widest mb-2">DE UITDAGING?</h2>
                 <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    EEN STEEDS KRAPPER WORDENDE <span className="text-brand-green">ARBEIDSMARKT</span>
                 </h3>
                 <p className="text-gray-300 mb-6 leading-relaxed">
                    De afgelopen jaren is de arbeidsmarkt enorm veranderd. Het tijdperk van een vacature plaatsen en afwachten is voorbij. Bedrijven vissen massaal in dezelfde vijver.
                 </p>
                 <div className="p-4 bg-white/5 rounded-lg border-l-4 border-brand-orange">
                    <p className="text-white italic text-sm">
                       "De echte race om talent moet dus nog beginnen..."
                    </p>
                 </div>
              </div>
              
              {/* Simulated Billboard Image */}
              <div className="relative group">
                 <div className="absolute -inset-2 bg-brand-green/20 rounded-xl blur-lg group-hover:bg-brand-green/40 transition-all"></div>
                 <img 
                    src="https://picsum.photos/seed/billboard/600/400" 
                    alt="Billboard Personneel Gezocht" 
                    className="relative rounded-xl shadow-lg border-4 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
                 <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 uppercase rounded-sm transform -rotate-2">
                    Personeel Gezocht!
                 </div>
              </div>
           </div>
        </div>

        {/* Benefits / Solution Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
           <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-green hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6 text-brand-green">
                 <Users size={32} />
              </div>
              <h4 className="font-display font-bold text-2xl text-brand-dark mb-4">WERF JOUW IDEALE KANDIDAAT</h4>
              <p className="text-gray-600">Onze campagnes trekken niet zomaar kandidaten aan. Ze richten zich op de mensen die écht passen bij je cultuur.</p>
           </div>

           <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-orange hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-brand-orange">
                 <TrendingUp size={32} />
              </div>
              <h4 className="font-display font-bold text-2xl text-brand-dark mb-4">BESPAAR TIJD ÉN MIDDELEN</h4>
              <p className="text-gray-600">Met +90% invulling binnen 8 weken heb je geen lange wervingsperiodes of dure recruitment fees meer nodig.</p>
           </div>

           <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-500 hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-500">
                 <AlertTriangle size={32} />
              </div>
              <h4 className="font-display font-bold text-2xl text-brand-dark mb-4">BOUW AAN JE EMPLOYER BRAND</h4>
              <p className="text-gray-600">Laat zien wie je bent. Wij leiden jouw organisatie naar de 1e plek op het podium van de arbeidsmarkt.</p>
           </div>
        </div>
        
        <div className="mt-16 text-center">
           <Button variant="primary" className="mx-2 mb-4">BOEK EEN DEMO</Button>
           <Button variant="outline" className="mx-2 mb-4 border-gray-300 text-gray-700 hover:border-brand-orange">TEST HOE STERK JE FUNDAMENT IS</Button>
        </div>

      </div>
    </section>
  );
};