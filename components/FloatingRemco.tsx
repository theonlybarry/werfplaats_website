import React, { useState } from 'react';
import { Phone, MessageSquare, Star, X } from 'lucide-react';

export const FloatingRemco: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 z-[100] p-3 md:p-8 flex flex-col items-end pointer-events-none">
      {/* Large Speech Bubble */}
      <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl rounded-br-none shadow-[0_15px_40px_rgba(0,0,0,0.2)] md:shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-brand-orange/20 md:border-2 md:border-brand-orange/30 mb-[-15px] md:mb-[-30px] mr-12 md:mr-20 max-w-[200px] md:max-w-[300px] relative pointer-events-auto transform transition-all hover:scale-105 cursor-pointer group">

        {/* Close button for mobile to clear space if needed */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
          className="absolute -top-2 -left-2 bg-brand-dark text-white rounded-full p-1 md:hidden shadow-lg"
        >
          <X size={12} />
        </button>

        <div className="hidden md:flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="text-yellow-400" fill="currentColor" />
          ))}
          <span className="text-[10px] font-bold text-gray-400 ml-1 uppercase tracking-widest">TOP RATED</span>
        </div>

        <p className="font-display font-black text-brand-dark text-lg md:text-2xl leading-none mb-1 md:mb-2 uppercase italic tracking-tighter">
          KLAAR VOOR EEN <span className="text-brand-orange underline decoration-brand-green/30">GROEISPURT?</span>
        </p>

        <p className="hidden md:block text-sm text-gray-600 mb-5 leading-snug font-medium">
          "Hoi, ik ben Remco. Zullen we samen kijken hoe we jouw werving moeiteloos maken?"
        </p>

        {/* Mobile simplified text */}
        <p className="md:hidden text-[10px] text-gray-500 mb-3 font-bold uppercase tracking-tight">
          Remco staat voor je klaar!
        </p>

        <a
          href="https://wa.me/31643982680"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 md:gap-3 text-white bg-brand-dark px-3 py-2 md:px-5 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-base shadow-xl group-hover:bg-[#25D366] transition-all w-full justify-center group-hover:shadow-[#25D366]/40"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5 w-4 h-4 animate-bounce" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
          <span className="uppercase tracking-widest">WHATSAPP DIRECT</span>
        </a>

        {/* Tooltip triangle */}
        <div className="absolute -bottom-2 md:-bottom-3 right-6 md:right-8 w-6 h-6 md:w-10 md:h-10 bg-white transform rotate-45 border-r border-b border-brand-orange/20 md:border-brand-orange/30"></div>
      </div>

      {/* Remco Avatar */}
      <div className="relative pointer-events-auto group">
        {/* Glow / Aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange to-brand-green opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-all scale-125"></div>

        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 rounded-full border-4 md:border-[10px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden bg-white relative z-10 group-hover:scale-105 transition-all duration-500 ring-4 md:ring-8 ring-brand-orange/5">
          <img
            src="https://werfplaats.nl/wp-content/uploads/2023/08/RAW_711-scaled.jpg"
            alt="Founder Remco"
            className="w-full h-full object-cover object-top scale-150 translate-y-2 md:translate-y-4 group-hover:scale-[1.55] transition-transform duration-1000"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085184628-66e7352174d7?q=80&w=600&auto=format&fit=crop";
            }}
          />

          {/* Visual "Remco" Label over image */}
          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 text-center z-20">
            <span className="bg-brand-orange text-white text-[8px] md:text-[10px] font-black px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-lg uppercase tracking-tighter">
              REMCO
            </span>
          </div>
        </div>

        {/* Online Status Indicator */}
        <div className="absolute bottom-4 md:bottom-10 right-1 md:right-4 w-8 h-8 md:w-14 md:h-14 bg-brand-green border-2 md:border-[5px] border-white rounded-full z-20 flex items-center justify-center shadow-2xl group-hover:rotate-[360deg] transition-all duration-700">
          <div className="relative">
            <span className="animate-ping absolute inset-0 rounded-full bg-white opacity-75"></span>
            <MessageSquare size={16} className="text-white relative z-10 md:w-6 md:h-6" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};