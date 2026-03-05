import React, { useState, useEffect } from 'react';
import { Search, Copy, CheckCircle2, Lock } from 'lucide-react';
import { Button } from './Button';

export const BooleanSearchTool: React.FC = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [result, setResult] = useState('');
    const [usageCount, setUsageCount] = useState(0);
    const [copied, setCopied] = useState(false);

    const LIMIT = 20;

    useEffect(() => {
        const count = parseInt(localStorage.getItem('werftools_boolean_search_count') || '0', 10);
        setUsageCount(count);
    }, []);

    const handleGenerate = () => {
        if (!jobTitle) return;

        if (usageCount >= LIMIT) {
            return;
        }

        let query = `site:nl.linkedin.com/in "${jobTitle}"`;
        if (location) {
            query += ` "${location}"`;
        }

        setResult(query);
        const newCount = usageCount + 1;
        setUsageCount(newCount);
        localStorage.setItem('werftools_boolean_search_count', newCount.toString());
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
                <Search className="text-brand-orange" size={28} />
                <h3 className="text-2xl font-display font-bold text-brand-dark uppercase">
                    LinkedIn <span className="text-brand-orange">X-Ray</span> Search
                </h3>
            </div>
            <p className="text-gray-600 mb-8">
                Genereer een slimme Google zoekopdracht om direct LinkedIn profielen te vinden.
            </p>

            <div className="space-y-5 mb-8 flex-grow">
                <div>
                    <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">Functietitel (Verplicht)</label>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Bv. Software Developer"
                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-brand-dark focus:ring-2 focus:ring-brand-orange outline-none transition"
                        disabled={usageCount >= LIMIT && !result}
                    />
                </div>
                <div>
                    <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">Locatie (Optioneel)</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Bv. Amsterdam"
                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-brand-dark focus:ring-2 focus:ring-brand-orange outline-none transition"
                        disabled={usageCount >= LIMIT && !result}
                    />
                </div>
                {usageCount < LIMIT && (
                    <Button
                        onClick={handleGenerate}
                        disabled={!jobTitle}
                        className="w-full flex justify-center items-center gap-2"
                    >
                        Genereer Zoekopdracht <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1">Nog {LIMIT - usageCount} over</span> <Search size={16} />
                    </Button>
                )}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden relative min-h-[140px] flex flex-col">
                {result ? (
                    <div className="p-5 flex-1 flex flex-col">
                        <label className="block text-brand-green text-[10px] font-bold mb-2 uppercase tracking-widest">Jouw X-Ray String</label>
                        <p className="text-brand-dark font-mono text-sm break-all">
                            {result}
                        </p>
                        <div className="mt-auto pt-4 flex justify-end gap-4">
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-orange transition font-bold uppercase tracking-wider"
                            >
                                {copied ? <CheckCircle2 size={16} className="text-brand-green" /> : <Copy size={16} />}
                                {copied ? 'Gekopieerd!' : 'Kopieer'}
                            </button>
                            <a
                                href={`https://www.google.com/search?q=${encodeURIComponent(result)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white bg-brand-orange hover:bg-orange-600 px-3 py-1.5 rounded-lg transition font-bold uppercase tracking-wider"
                            >
                                Zoek in Google <Search size={14} />
                            </a>
                        </div>
                    </div>
                ) : usageCount >= LIMIT ? (
                    <div className="absolute inset-0 bg-brand-dark flex flex-col justify-center items-center p-6 text-center z-10">
                        <Lock className="text-brand-orange mb-3" size={24} />
                        <h4 className="text-white font-bold mb-2">Limiet Bereikt (20/20)</h4>
                        <p className="text-gray-400 text-xs mb-4">Je hebt je 20 gratis zoekopdrachten verbruikt. Ontdek hoe je onbeperkt talent kan sourcen met onze software.</p>
                        <Button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-brand-orange hover:bg-orange-600 !py-2 !px-4 !text-xs w-full"
                        >
                            Plan een Demo
                        </Button>
                    </div>
                ) : (
                    <div className="p-6 flex-1 flex items-center justify-center text-gray-400 text-sm italic text-center">
                        Vul een functietitel in om je zoekopdracht te genereren...
                    </div>
                )}
            </div>
            {usageCount > 0 && (
                <div className="mt-4 p-4 bg-brand-orange/10 rounded-xl border border-brand-orange/20 text-center">
                    <p className="text-brand-dark text-xs font-bold mb-2">Wil je nog meer resultaat en direct kandidaten benaderen?</p>
                    <a href="/contact" className="text-brand-orange text-xs font-bold uppercase tracking-wider hover:underline flex items-center justify-center gap-1">
                        Plan een demo voor onze tool <Lock size={12} />
                    </a>
                </div>
            )}
        </div>
    );
};
