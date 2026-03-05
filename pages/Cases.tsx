import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Cases: React.FC = () => {
  const cases = [
    {
      title: "Schilderbedrijf X",
      stat: "+15 Sollicitanten in 2 weken",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
      category: "Bouw & Techniek"
    },
    {
      title: "Zorginstelling Y",
      stat: "4 HBO Verpleegkundigen aangenomen",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      category: "Zorg"
    },
    {
      title: "Logistiek Partner Z",
      stat: "CPA verlaagd met 45%",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      category: "Logistiek"
    }
  ];

  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-6">
            SUCCESS <span className="text-brand-orange">CASES</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bekijk hoe wij andere bedrijven hielpen hun wervingsdoelen te overtreffen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img src={c.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={c.title} />
                <div className="absolute top-4 left-4 bg-brand-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {c.category}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-2 uppercase">{c.title}</h3>
              <p className="text-brand-green font-bold text-lg mb-4">{c.stat}</p>
              <button className="flex items-center gap-2 text-brand-orange font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                Bekijk Case <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};