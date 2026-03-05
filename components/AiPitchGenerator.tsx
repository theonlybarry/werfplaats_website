import React, { useState } from 'react';
import { Sparkles, Copy, Loader2 } from 'lucide-react';
import { PitchTone } from '../types';
import { generateRecruitmentPitch } from '../services/geminiService';
import { Button } from './Button';

export const AiPitchGenerator: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [tone, setTone] = useState<PitchTone>(PitchTone.CASUAL);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!jobTitle) return;
    setLoading(true);
    const pitch = await generateRecruitmentPitch(jobTitle, tone);
    setResult(pitch);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Tekst gekopieerd!');
  };

  return (
    <section className="py-24 bg-brand-dark relative" id="tools">
       {/* Decorative gradient */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>

       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
            <div className="p-8 md:p-12">
               <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="text-brand-orange" size={28} />
                  <h3 className="text-3xl font-display font-bold text-white uppercase">
                     AI Vacature <span className="text-brand-orange">Hook</span> Generator
                  </h3>
               </div>
               <p className="text-gray-400 mb-8">
                  Probeer onze AI tool. Vul een functietitel in en ontvang direct een pakkende openingszin voor je social media advertentie.
               </p>

               <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                     <div>
                        <label className="block text-gray-500 text-sm font-bold mb-2 uppercase tracking-wide">Functietitel</label>
                        <input 
                           type="text" 
                           value={jobTitle}
                           onChange={(e) => setJobTitle(e.target.value)}
                           placeholder="Bv. Senior Marketeer"
                           className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-500 text-sm font-bold mb-2 uppercase tracking-wide">Toon</label>
                        <div className="flex flex-wrap gap-3">
                           {Object.values(PitchTone).map((t) => (
                              <button
                                 key={t}
                                 onClick={() => setTone(t)}
                                 className={`px-4 py-2 rounded-full text-sm font-medium transition ${tone === t ? 'bg-brand-green text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                              >
                                 {t}
                              </button>
                           ))}
                        </div>
                     </div>
                     <Button 
                        onClick={handleGenerate} 
                        disabled={loading || !jobTitle}
                        className="w-full flex justify-center items-center gap-2"
                     >
                        {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                        {loading ? 'Aan het denken...' : 'Genereer Hook'}
                     </Button>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 relative min-h-[200px] flex flex-col">
                     <label className="block text-gray-500 text-xs font-bold mb-4 uppercase tracking-wide">Resultaat</label>
                     {result ? (
                        <div className="flex-1">
                           <p className="text-xl text-white font-medium leading-relaxed font-display">
                              "{result}"
                           </p>
                           <button 
                              onClick={copyToClipboard}
                              className="absolute bottom-4 right-4 p-2 text-gray-400 hover:text-white transition"
                              title="Kopieer"
                           >
                              <Copy size={20} />
                           </button>
                        </div>
                     ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-600 text-sm italic">
                           Het resultaat verschijnt hier...
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
};