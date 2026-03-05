import React from 'react';
import { Team } from '../components/Team';

export const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-8 leading-none">
              WIJ ZIJN <br /><span className="text-brand-orange">WERFTOOLS.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Wij bouwen het ecosysteem voor de toekomst van werving. Werftools combineert krachtige AI, naadloze workflows en slimme talentpools zodat recruitment teams sneller en menselijker kunnen werken.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ons team van specialisten en developers werkt elke dag aan één doel: jou voorzien van de ultieme software stack om zonder frictie de beste mensen aan te trekken, te boeien en aan te nemen.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-green/10 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              className="relative rounded-3xl shadow-2xl"
              alt="Werftools Platform Data Dashboard"
            />
          </div>
        </div>
      </div>
      <Team />
    </div>
  );
};