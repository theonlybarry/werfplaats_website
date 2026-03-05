import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-8 leading-none">
              LATEN WE <br /><span className="text-brand-orange">PRATEN.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              Klaar om je werving naar een hoger plan te tillen? Neem contact met ons op of boek direct een demo.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark uppercase">Bellen</h4>
                  <a href="tel:+310302072878" className="text-gray-600 hover:text-brand-orange transition">+31(0)30-2072878</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark uppercase">E-mail</h4>
                  <a href="mailto:barrywanschers@gmail.com" className="text-gray-600 hover:text-brand-orange transition">barrywanschers@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark uppercase">Locatie</h4>
                  <p className="text-gray-600">Gietijzerstraat 60, Utrecht</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6" action="mailto:barrywanschers@gmail.com" method="POST" encType="text/plain">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Naam</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition" placeholder="Je naam" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Bedrijf</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition" placeholder="Bedrijfsnaam" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
                <input type="email" className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition" placeholder="E-mailadres" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Bericht</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition" placeholder="Waar kunnen we je mee helpen?"></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-brand-orange text-white py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-orange-600 transition">
                Verstuur bericht <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};