import React from 'react';
import { Team } from '../components/Team';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-40 bg-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full mb-6">
              <span className="text-xs font-black uppercase tracking-widest">Onze Missie</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-8 leading-none">
              WIJ ZIJN <br /><span className="text-brand-orange">WERFTOOLS.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Recruitment is de afgelopen jaren onnodig complex en tijdsintensief geworden. Bij Werftools geloven we dat het aantrekken van toptalent efficiënt, datagedreven en bovenal menselijk moet zijn.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Daarom bouwen we het ecosysteem voor de toekomst van werving. Door de kracht van slimme AI tools, naadloze automatisering en geavanceerde dashboards samen te brengen, geven we recruiters hun tijd terug. Zodat zij zich weer kunnen focussen op wat écht telt: de mens achter het cv.
            </p>

            <div className="flex gap-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div>
                <div className="text-3xl font-display font-bold text-brand-dark mb-1">10k+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kandidaten Bereikt</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-brand-green mb-1">94%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Klanttevredenheid</div>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="absolute -inset-4 bg-brand-orange/10 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              alt="Werftools Team Collaborating in Modern Office"
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-brand-dark py-24 mb-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">Onze <span className="text-brand-orange">Kernwaarden</span></h2>
            <p className="text-gray-400 text-lg">De visie die richting geeft aan alles wat we bouwen en hoe we met onze partners samenwerken.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 bg-brand-orange/20 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-white uppercase mb-3">Resultaatgericht</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Geen loze beloftes. Onze tools zijn ontworpen om meetbare ROI en snellere hires op te leveren.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:-translate-y-2 transition-transform delay-100">
              <div className="w-12 h-12 bg-brand-green/20 text-brand-green rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-white uppercase mb-3">Innovatie First</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Dankzij in-house AI-modellen blijven we altijd een stap voor op de veranderende arbeidsmarkt.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:-translate-y-2 transition-transform delay-200">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-white uppercase mb-3">Data Gedreven</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Buikgevoel is goed, data is beter. We maken talent analytics toegankelijk en actiegericht.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:-translate-y-2 transition-transform delay-300">
              <div className="w-12 h-12 bg-brand-orange/20 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-white uppercase mb-3">Menselijk Blijven</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Automatisering mag authenticiteit nooit in de weg staan. Wij automatiseren het wervingsproces, niet de menselijke connectie.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="pb-24">
        <Team />
      </div>
    </div>
  );
};