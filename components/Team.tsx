import React from 'react';
import { TEAM } from '../constants';
import { Button } from './Button';

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-brand-orange font-display text-xl tracking-widest mb-2 italic">HET TEAM ACHTER DE SOFTWARE</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-green uppercase mb-6">
          JOUW FLEXIBELE SCHIL
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Achter Werftools staat een team van échte recruitment experts. Zodra de AI het werk niet alleen aankan, schalen wij direct met je mee om het verschil te maken.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {TEAM.map((member) => (
            <div key={member.id} className="group relative w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-2xl bg-gray-100 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Information Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold font-display text-lg leading-none mb-1 uppercase tracking-tight">{member.name}</p>
                <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Button onClick={() => window.location.href = 'mailto:support@werftools.nl'} variant="primary" className="bg-brand-orange hover:bg-orange-600 !px-12">
          ONTDEK HET TEAM
        </Button>
      </div>
    </section>
  );
};