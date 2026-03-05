import React from 'react';
import { Users, Zap, TrendingUp, Handshake } from 'lucide-react';
import { Button } from './Button';

export const WinningTeam: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange font-bold text-sm uppercase tracking-widest mb-6">
                        <Handshake size={16} /> Best of Both Worlds
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase leading-tight">
                        WERFTOOLS + WERFPLAATS = <br className="hidden md:block" />
                        <span className="text-brand-orange">HET WINNENDE TEAM</span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        De pure efficiëntie van geavanceerde software, feilloos gecombineerd met snelle menselijke intelligentie.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6 md:space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0 mt-1">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">De Human Touch in Elke Flow</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Binnen Werftools kun je in <strong>elke stap van elke flow</strong> direct de echte recruiters van Werfplaats inschakelen. Twijfel je over een kandidaat? Wil je dat wij een eerste screening doen? Met één klik neemt een expert het tijdelijk of volledig van je over.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-1">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Schaal Supersnel Op</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Of je nu deze maand <strong>1 of 10 vacatures</strong> wilt invullen, onze flexibele schil van recruiters schaalt direct met je mee. Wij leveren de power wanneer jij dat nodig hebt, zonder dure overhead of vaste contracten.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Altijd In Control</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Omdat alles in hetzelfde ecosysteem plaatsvindt, verlies je nooit het overzicht. Je ziet real-time wat de AI doet en welke stappen de recruiters van Werfplaats hebben ondernomen.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-4 md:mt-0">
                        {/* Visual Representation of the Synergy */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
                            <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-gray-700 pb-4">
                                <div className="flex items-center gap-3 text-white font-bold text-lg font-display tracking-widest">
                                    WERFTOOLS
                                </div>
                                <div className="text-gray-500 text-sm">Dashboard view</div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between border border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">AI Screening Voltooid</p>
                                            <p className="text-gray-400 text-xs">92% Match voor 'Accountmanager'</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center -my-2 relative z-10">
                                    <div className="bg-brand-dark px-3 text-brand-orange">
                                        <TrendingUp size={24} className="rotate-90" />
                                    </div>
                                </div>

                                <div className="bg-brand-orange/10 rounded-xl p-4 sm:p-5 border border-brand-orange/30 shadow-inner relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-brand-orange/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-brand-orange flex-shrink-0">
                                                <img src="https://werfplaats.nl/wp-content/uploads/2025/05/Stan-van-Dam-7.png" alt="Recruiter Stan" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-brand-orange font-bold text-[10px] sm:text-xs uppercase tracking-widest leading-none mb-1">Werfplaats Ingeschakeld</p>
                                                <p className="text-white text-xs sm:text-sm italic">"Ik neem contact op voor de Culture Fit!"</p>
                                            </div>
                                        </div>
                                        <Button variant="primary" className="w-full py-2 text-sm">
                                            Zet door naar Interview ronde
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Decors */}
                        <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-6 bg-brand-green text-brand-dark font-black tracking-widest uppercase p-3 sm:p-4 rounded-xl shadow-xl transform rotate-3 text-[10px] sm:text-xs">
                            Jouw flexibele schil
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
