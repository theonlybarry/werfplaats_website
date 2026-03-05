import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '../components/Button';
import { DemoPlanner } from '../components/DemoPlanner';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'demo'>('contact');

  return (
    <div className="pt-40 bg-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Side Info */}
          <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 leading-none">
              LATEN WE <br /><span className="text-brand-orange">PRATEN.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12 max-w-lg">
              Klaar om je werving naar een hoger plan te tillen? Neem direct contact met ons op via onderstaande gegevens of reserveer meteen een live demo.
            </p>

            <div className="space-y-2">
              <a href="tel:+310302072878" className="group flex gap-6 items-start hover:bg-gray-50 p-4 -ml-4 rounded-2xl transition-all w-max">
                <div className="w-14 h-14 bg-brand-orange/10 group-hover:bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wider">Bellen</h4>
                  <p className="text-gray-600 group-hover:text-brand-dark transition-colors">+31(0)30-2072878</p>
                </div>
              </a>

              <a href="mailto:support@werftools.nl" className="group flex gap-6 items-start hover:bg-gray-50 p-4 -ml-4 rounded-2xl transition-all w-max">
                <div className="w-14 h-14 bg-brand-orange/10 group-hover:bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wider">E-mail</h4>
                  <p className="text-gray-600 group-hover:text-brand-dark transition-colors">support@werftools.nl</p>
                </div>
              </a>

              <div className="group flex gap-6 items-start hover:bg-gray-50 p-4 -ml-4 rounded-2xl transition-all w-max cursor-default">
                <div className="w-14 h-14 bg-brand-orange/10 group-hover:bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wider">Locatie</h4>
                  <p className="text-gray-600 group-hover:text-brand-dark transition-colors">Gietijzerstraat 60, Utrecht</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Card */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-150">
            {/* Tab Navigation */}
            <div className="flex w-full mb-6 bg-gray-50 border border-gray-100 rounded-2xl p-1 relative">
              <div
                className={`absolute inset-y-1 w-[calc(50%-4px)] bg-brand-orange rounded-xl transition-all duration-300 ease-out z-0`}
                style={{ transform: activeTab === 'contact' ? 'translateX(4px)' : 'translateX(calc(100% + 4px))' }}
              ></div>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-xl font-bold uppercase tracking-widest text-sm z-10 transition-colors ${activeTab === 'contact' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <MessageSquare size={16} /> Bericht
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-xl font-bold uppercase tracking-widest text-sm z-10 transition-colors ${activeTab === 'demo' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <Calendar size={16} /> Plan Demo
              </button>
            </div>

            {/* Tab Contents */}
            <div className="relative h-[650px] w-full">
              {/* Contact Form View */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'contact' ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 -translate-x-8 pointer-events-none'}`}>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col">
                  <div className="mb-8">
                    <h3 className="font-display font-bold text-2xl text-brand-dark uppercase tracking-wide">Direct een bericht</h3>
                    <p className="text-gray-500 text-sm mt-1">Vul onderstaand formulier in, dan mailen we je z.s.m. terug.</p>
                  </div>

                  <form className="space-y-6 flex-grow flex flex-col" action="mailto:support@werftools.nl" method="POST" encType="text/plain">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Naam</label>
                        <input name="Naam" type="text" className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition" placeholder="Je naam" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Bedrijf</label>
                        <input name="Bedrijf" type="text" className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition" placeholder="Bedrijfsnaam" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
                      <input name="Email" type="email" className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition" placeholder="E-mailadres" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Bericht</label>
                      <textarea name="Bericht" rows={5} className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-xl p-4 outline-none focus:ring-2 focus:ring-brand-orange transition resize-none" placeholder="Waar kunnen we je mee helpen?"></textarea>
                    </div>
                    <button type="submit" className="w-full mt-auto flex justify-center items-center gap-2 bg-brand-dark text-white hover:bg-gray-800 py-4 rounded-xl font-bold uppercase tracking-widest transition-all group">
                      Bericht Versturen <Send size={18} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Demo Planner View */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'demo' ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 translate-x-8 pointer-events-none'}`}>
                <DemoPlanner />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Map Section */}
      <div className="w-full mt-12 bg-gray-100 flex-shrink-0" style={{ height: '400px' }}>
        {/* Softened filter for better readability, maintaining a slight subtle brand tint without making it black */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.9272338162157!2d5.097613511993466!3d52.08110996843431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f4fe2ca60bb%3A0x6b4a3a3036e4f30!2sGietijzerstraat%2060%2C%203534%20AQ%20Utrecht!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'grayscale(20%) sepia(10%) hue-rotate(335deg) contrast(105%)'
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Werftools Locatie"
          className="w-full h-full block"
        ></iframe>
      </div>
    </div>
  );
};