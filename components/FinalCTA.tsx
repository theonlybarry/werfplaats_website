import React from 'react';
import { Button } from './Button';
import { MousePointer2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
    return (
        <section className="py-24 bg-brand-green relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto bg-brand-dark/95 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-md shadow-2xl relative">

                    {/* Fun little decorative element */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white font-black uppercase tracking-widest text-[10px] md:text-xs px-4 py-2 rounded-full shadow-lg shadow-brand-orange/20 animate-bounce">
                        Nog steeds hier? 👀
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase leading-tight tracking-tight">
                        Ben je nu echt helemaal <span className="text-brand-orange">naar beneden</span> gescrold?
                    </h2>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-300 mb-6 uppercase">
                        Plan dan maar direct een demo in!
                    </h3>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 italic">
                        "Verlaag je time-to-hire, krijg inzage in realtime data, en geef je team de beste AI-tools zodat ze zich weer volop kunnen focussen op de échte gesprekken met kandidaten."
                    </p>

                    <Button
                        onClick={() => window.location.href = 'mailto:support@werftools.nl'}
                        variant="primary"
                        className="!px-10 !py-5 !text-lg rounded-full group hover:shadow-[0_0_30px_rgba(255,90,31,0.5)] transition-all duration-300"
                    >
                        BOEK EEN DEMO
                        <MousePointer2 className="inline ml-2 group-hover:rotate-12 transition-transform" />
                    </Button>

                </div>
            </div>
        </section>
    );
};
