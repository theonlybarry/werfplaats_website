import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">

          <div className="py-4 md:py-0 px-4">
            <h4 className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-2">
              1.2M+
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
              Kandidaten Gescreend
            </p>
          </div>

          <div className="py-4 md:py-0 px-4">
            <h4 className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-2">
              40%
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
              Daling in Time-to-Hire
            </p>
          </div>

          <div className="py-4 md:py-0 px-4">
            <h4 className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-2 flex items-center justify-center gap-1">
              9.2 <span className="text-brand-orange text-3xl">★</span>
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
              Klanttevredenheid
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};