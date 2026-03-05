import React from 'react';
import { Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface FooterProps {
   onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
   return (
      <footer className="bg-gray-900 text-white pt-24 pb-8 border-t border-gray-800" id="contact">
         <div className="container mx-auto px-4">

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-brand-green to-emerald-600 rounded-3xl p-10 md:p-16 text-center shadow-2xl transform -translate-y-36 mb-[-60px] relative overflow-hidden">
               {/* Decorative background circle */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full pointer-events-none"></div>

               <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4 text-white">
                  Ben je nu echt helemaal naar beneden gescrold?
               </h2>
               <h3 className="text-xl md:text-2xl font-display font-bold uppercase mb-6 text-white/90">
                  Plan dan maar direct een demo in!
               </h3>
               <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium italic">
                  "Verlaag je time-to-hire, krijg inzage in realtime data, en geef je team de beste AI-tools zodat ze zich weer volop kunnen focussen op de échte gesprekken met kandidaten."
               </p>
               <div className="flex justify-center">
                  <button
                     onClick={() => window.location.href = 'mailto:barrywanschers@gmail.com'}
                     className="bg-brand-orange text-white font-bold px-10 py-4 text-lg uppercase rounded-full hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-2 group"
                  >
                     BOEK EEN DEMO
                  </button>
               </div>
            </div>

            <div className="grid md:grid-cols-4 gap-12 mt-20">
               {/* Column 1: Brand */}
               <div>
                  <button onClick={() => onNavigate(Page.HOME)} className="font-display font-bold text-3xl tracking-tighter text-brand-orange mb-6 text-left">
                     WERF<span className="text-white">TOOLS</span>
                  </button>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     Het slimste recruitment ecosysteem van Nederland. Wij automatiseren werving terwijl we de menselijke maat behouden.
                  </p>
                  <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-brand-orange transition"><Linkedin size={20} /></a>
                     <a href="#" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-brand-orange transition"><Instagram size={20} /></a>
                     <a href="#" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-brand-orange transition"><Facebook size={20} /></a>
                  </div>
               </div>

               {/* Column 2: Links */}
               <div>
                  <h4 className="font-display font-bold text-lg text-brand-green mb-6 uppercase">Bedrijf</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                     {NAV_ITEMS.map(item => (
                        <li key={item.label}>
                           <button onClick={() => onNavigate(item.href)} className="hover:text-white transition">
                              {item.label}
                           </button>
                        </li>
                     ))}
                     <li><button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-white transition">Vacatures</button></li>
                  </ul>
               </div>

               {/* Column 3: Contact */}
               <div>
                  <h4 className="font-display font-bold text-lg text-brand-green mb-6 uppercase">Neem Contact Op</h4>
                  <ul className="space-y-4 text-sm text-gray-400">
                     <li className="font-bold text-white text-lg">
                        <a href="tel:+310302072878" className="hover:text-brand-orange transition">+31(0)30-2072878</a>
                     </li>
                     <li><a href="mailto:support@werftools.nl" className="hover:text-white transition">support@werftools.nl</a></li>
                     <li className="space-y-3">
                        <div>
                           <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">Utrecht</p>
                           Gietijzerstraat 60<br />
                           3534 AV Utrecht
                        </div>
                        <div>
                           <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">Amsterdam</p>
                           John M. Keynesplein 12-46<br />
                           1066 AP Amsterdam (B.2 Gebouw)
                        </div>
                     </li>
                     <li className="text-xs opacity-50">KvK: 91383811</li>
                  </ul>
               </div>

               {/* Column 4: Newsletter */}
               <div>
                  <h4 className="font-display font-bold text-lg text-brand-green mb-6 uppercase">Volg je ons al?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                     Abonneer op onze nieuwsbrief en mis niets.
                  </p>
                  <form action="mailto:barrywanschers@gmail.com" method="POST" encType="text/plain" className="flex bg-white rounded overflow-hidden p-1">
                     <input type="email" name="newsletter" placeholder="Je e-mailadres..." className="bg-transparent px-3 py-2 text-gray-900 w-full outline-none text-sm" />
                     <button type="submit" className="bg-brand-dark text-white px-3 hover:bg-brand-orange transition rounded">
                        <ArrowRight size={18} />
                     </button>
                  </form>
               </div>
            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-600">
               &copy; {new Date().getFullYear()} Werftools | Alle rechten voorbehouden
            </div>
         </div>
      </footer>
   );
};