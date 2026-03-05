import React, { useState } from 'react';
import { PieChart, Loader2, Lock, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { generateMarketResearch } from '../services/geminiService';

export const MarketResearchTool: React.FC = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!jobTitle || !location) return;
        setLoading(true);
        const research = await generateMarketResearch(jobTitle, location);
        setResult(research);
        setLoading(false);
    };

    return (
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
                <PieChart className="text-brand-green" size={28} />
                <h3 className="text-2xl font-display font-bold text-brand-dark uppercase">
                    Mini <span className="text-brand-green">Marktanalyse</span>
                </h3>
            </div>
            <p className="text-gray-600 mb-8">
                Krijg direct een AI-gedreven inzicht in de haalbaarheid, salarisindicatie en schaarste van een vacature.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">Functietitel</label>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Bv. Data Analist"
                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-brand-dark focus:ring-2 focus:ring-brand-green outline-none transition"
                    />
                </div>
                <div>
                    <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">Locatie</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Bv. Utrecht"
                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-brand-dark focus:ring-2 focus:ring-brand-green outline-none transition"
                    />
                </div>
            </div>

            <Button
                onClick={handleGenerate}
                disabled={loading || !jobTitle || !location || !!result}
                className="w-full flex justify-center items-center gap-2 mb-8 bg-brand-green hover:bg-green-600 text-white"
            >
                {loading ? <Loader2 className="animate-spin" /> : <PieChart size={16} />}
                {loading ? 'Analyse wordt gegenereerd...' : 'Start Analyse'}
            </Button>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden relative flex-grow flex flex-col min-h-[250px]">
                {result ? (
                    <div className="relative flex-1">
                        <div className="p-6">
                            <label className="block text-brand-green text-[10px] font-bold mb-4 uppercase tracking-widest">Marktinzicht voor {jobTitle} in {location}</label>

                            {/* The actually visible part (e.g. first paragraph) */}
                            <p className="text-brand-dark font-medium leading-relaxed mb-4">
                                {result.split('\n\n')[0]}
                            </p>

                            {/* The blurred part to tease the content */}
                            <div className="relative">
                                <p className="text-gray-400 leading-relaxed blur-[4px] select-none pointer-events-none whitespace-pre-wrap">
                                    {result.split('\n\n').slice(1).join('\n\n') || "Verdere analyse toont aan dat de schaarste in deze regio voornamelijk wordt gedreven door concurrentie vanuit de grote tech hubs. De salarisverwachtingen liggen gemiddeld 15% hoger dan het landelijk gemiddelde, wat specifieke wervingsstrategieën vereist om deze doelgroep succesvol te converteren."}
                                    ...
                                </p>
                            </div>
                        </div>

                        {/* CTA Overlay over the blurred text */}
                        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col justify-end items-center p-6 text-center z-10 pb-8">
                            <Lock className="text-brand-dark mb-3" size={24} />
                            <h4 className="text-brand-dark font-display font-bold text-xl mb-2">Zie het volledige rapport</h4>
                            <p className="text-gray-600 text-sm mb-5">
                                Ontdek alle data, voorspellingen en strategisch advies voor deze doelgroep.
                            </p>
                            <Button
                                onClick={() => window.location.href = '/contact'}
                                className="bg-brand-dark hover:bg-gray-800 text-white w-full rounded-full shadow-lg flex justify-center items-center gap-2"
                            >
                                Plan een demo voor onze tool <ArrowRight size={16} />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 flex-1 flex items-center justify-center text-gray-400 text-sm italic text-center">
                        Vul titel en locatie in voor een vlotte, data-gedreven systeemanalyse...
                    </div>
                )}
            </div>
        </div>
    );
};
