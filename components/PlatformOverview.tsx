import React, { useState, useEffect } from 'react';
import { Shield, Cloud, Lock, Server, Users, History, CheckCircle2, Linkedin, Mail, Calendar, MessageSquare, Database, FileText, Cpu, Workflow, BarChart3, Zap, Check, ArrowRight, Target, Megaphone, MapPin } from 'lucide-react';

const FEATURES = [
    {
        id: 'sourcing',
        icon: Cpu,
        title: 'AI Sourcing & Matching',
        desc: 'Vind sneller toptalent. Onze AI algoritmes analyseren CVs en vacatures om automatisch de perfecte match te maken met een betrouwbaarheidsscore.',
    },
    {
        id: 'workflows',
        icon: Workflow,
        title: 'Automated Workflows',
        desc: 'Bouw recruitment pipelines per afdeling. Verstuur geautomatiseerde e-mails, plan interviews in en zet taken klaar zonder handmatig werk.',
    },
    {
        id: 'data',
        icon: BarChart3,
        title: 'Live Analytics',
        desc: 'Volledige controle over je werving. Krijg realtime inzicht in time-to-hire, funnel conversies en de prestaties van je recruitmentkanalen.',
    },
    {
        id: 'research',
        icon: Target,
        title: 'Arbeidsmarkt Onderzoek',
        desc: 'Krijg inzicht in jouw doelgroep met data-gedreven persona\'s. Weet precies waar jouw ideale kandidaat zich bevindt en wat hen drijft.',
    },
    {
        id: 'jobboards',
        icon: Megaphone,
        title: 'Vacaturesites',
        desc: 'Post direct op de grote platformen. Wij publiceren en optimaliseren jouw vacatures automatisch op sites zoals Indeed, LinkedIn en meer.',
    },
    {
        id: 'recruiter',
        icon: Users,
        title: 'De Echte Recruiter',
        desc: 'Onze recruiters houden een oogje in het zeil. Zij voelen de match, spreken de juiste toon en zien de echte mens achter de kandidaat.',
    },
    {
        id: 'planning',
        icon: Calendar,
        title: 'Automatisch Plannen',
        desc: 'Laat kandidaten zelf een moment inplannen voor een interview. Volledig gesynchroniseerd met jouw agenda.',
    },
    {
        id: 'talentpool',
        icon: Database,
        title: 'Talentpool & Screening',
        desc: 'Bouw een actieve talentpool op en screen kandidaten automatisch op basis van hun vaardigheden en beschikbaarheid.',
    }
];

export const PlatformOverview: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);
    const [matchScore, setMatchScore] = useState(0);
    const [workflowSteps, setWorkflowSteps] = useState<number[]>([]);

    // Mock animations for the dashboard visualization
    useEffect(() => {
        if (activeFeature === 'sourcing') {
            setMatchScore(0);
            const timer = setTimeout(() => setMatchScore(94), 300);
            return () => clearTimeout(timer);
        } else if (activeFeature === 'workflows') {
            setWorkflowSteps([]);
            const intervals = [
                setTimeout(() => setWorkflowSteps([0]), 300),
                setTimeout(() => setWorkflowSteps([0, 1]), 800),
                setTimeout(() => setWorkflowSteps([0, 1, 2]), 1300),
            ];
            return () => intervals.forEach(clearTimeout);
        }
    }, [activeFeature]);

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px]"></div>
            <div className="absolute top-40 -left-40 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-brand-orange font-display text-xl tracking-widest mb-4">HET PLATFORM IN ACTIE</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 leading-tight">
                        ERVAAR JOUW <span className="text-brand-green">RECRUITMENT ECOSYSTEEM</span>
                    </h3>
                    <div className="space-y-4">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Klik door de interactieve demo hieronder en bekijk hoe Werftools jouw recruitmentproces automatiseert, versnelt en inzichtelijk maakt, terwijl onze echte recruiters voor je klaar staan.
                        </p>
                    </div>
                </div>

                {/* Interactive Demonstrator */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row mb-24">
                    {/* Left Sidebar: Controls */}
                    <div className="lg:w-1/3 bg-gray-900 border-r border-gray-800 p-6 flex flex-col gap-2 z-20">
                        {FEATURES.map((feature) => {
                            const isActive = activeFeature === feature.id;
                            const Icon = feature.icon;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveFeature(feature.id)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${isActive
                                        ? 'bg-brand-dark border-brand-orange shadow-lg transform translate-x-2'
                                        : 'bg-transparent border-transparent hover:bg-gray-800 hover:border-gray-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-full ${isActive ? 'bg-brand-orange/20 text-brand-orange' : 'bg-gray-800 text-gray-400'}`}>
                                            <Icon size={20} />
                                        </div>
                                        <h4 className={`font-display text-lg uppercase font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                            {feature.title}
                                        </h4>
                                    </div>
                                    <p className={`text-sm leading-relaxed mt-3 pl-12 ${isActive ? 'text-gray-300 block' : 'text-gray-500 hidden'}`}>
                                        {feature.desc}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Area: Dynamic Mock UI */}
                    <div className="lg:w-2/3 bg-gray-50 p-4 md:p-8 lg:p-12 relative flex items-center justify-center min-h-[400px] md:min-h-[500px] overflow-hidden">

                        {/* Decorative Canvas Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px]"></div>

                        <div className="relative z-10 w-full max-w-xl flex justify-center mt-8 lg:mt-0">
                            {/* 1. AI Sourcing Visualization */}
                            {activeFeature === 'sourcing' && (
                                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-500 md:scale-105 transform origin-center">
                                    <div className="bg-gray-900 p-3 sm:p-4 border-b border-gray-800 flex justify-between items-center">
                                        <h5 className="text-white font-bold font-display uppercase tracking-wider text-[10px] sm:text-sm flex items-center gap-2">
                                            <Cpu size={16} className="text-brand-orange hidden sm:block" /> Sourcing Engine Actief
                                        </h5>
                                        <span className="flex h-3 w-3 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                                        </span>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-gray-50 flex-shrink-0">
                                                <img src="https://i.pravatar.cc/150?img=32" alt="Candidate" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h6 className="text-lg sm:text-xl font-bold text-gray-900">Sophie de Vlieger</h6>
                                                <p className="text-gray-500 text-sm">Senior Frontend Developer</p>
                                                <div className="flex gap-2 mt-2">
                                                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold">React</span>
                                                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold">TypeScript</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative pt-6 border-t border-gray-100">
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2">
                                                <Zap className="text-brand-orange animate-pulse" size={24} />
                                            </div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">AI Match Fit</span>
                                                <span className="text-3xl font-display font-black text-brand-green transition-all duration-1000">
                                                    {matchScore}%
                                                </span>
                                            </div>
                                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-brand-orange to-brand-green transition-all duration-1000 ease-out"
                                                    style={{ width: `${matchScore}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <button className="w-full mt-6 bg-brand-dark text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                                            Voeg toe aan pijplijn
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* 2. Workflows Visualization */}
                            {activeFeature === 'workflows' && (
                                <div className="w-full animate-in fade-in slide-in-from-right-8 duration-500 md:scale-105 transform origin-left">
                                    <div className="space-y-4">
                                        {['Sollicitatie Ontvangen', 'AI Screening Voltooid (Fit: 94%)', 'Automatische Interview Uitnodiging', 'Herinnering Verzonden'].map((step, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex items-center gap-4 transition-all duration-500 ${workflowSteps.includes(idx) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${workflowSteps.includes(idx) ? 'bg-brand-green border-brand-green text-white shadow-lg' : 'bg-white border-gray-300 text-gray-300'}`}>
                                                        <Check size={20} />
                                                    </div>
                                                    {idx !== 3 && <div className={`w-1 h-8 ${workflowSteps.includes(idx + 1) ? 'bg-brand-green' : 'bg-gray-200'}`}></div>}
                                                </div>
                                                <div className="pb-8">
                                                    <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700">
                                                        {step}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 3. Analytics Visualization */}
                            {activeFeature === 'data' && (
                                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 animate-in fade-in zoom-in duration-500 md:scale-105 transform origin-center">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                                        <h5 className="font-display font-bold text-xl sm:text-2xl uppercase text-brand-dark">Campagne ROI</h5>
                                        <select className="bg-gray-50 border border-gray-200 rounded px-3 py-1 text-sm font-bold text-gray-600 outline-none">
                                            <option>Deze Maand</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Time to Hire</p>
                                            <p className="text-3xl font-display font-black text-brand-dark">12 <span className="text-lg text-brand-green">Dgn</span></p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Cost per Hire</p>
                                            <p className="text-3xl font-display font-black text-brand-dark">€245 <span className="text-lg text-brand-green">↓12%</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 h-40">
                                        {[30, 45, 60, 40, 80, 50, 95].map((h, i) => (
                                            <div key={i} className="flex-1 bg-gray-100 rounded-t-sm relative group cursor-pointer hover:bg-gray-200 transition-colors">
                                                <div
                                                    className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-brand-orange to-brand-green animate-in slide-in-from-bottom duration-1000"
                                                    style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                                                ></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 4. Real Recruiter Visualization */}
                            {activeFeature === 'recruiter' && (
                                <div className="w-full animate-in fade-in zoom-in duration-500 md:scale-105 transform origin-center">
                                    <div className="bg-brand-dark p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[50px]"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-16 h-16 rounded-full border-2 border-brand-orange overflow-hidden bg-white">
                                                    <img src="https://werfplaats.nl/wp-content/uploads/2025/05/Stan-van-Dam-7.png" alt="Stan" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-display text-2xl font-bold">Stan</h4>
                                                    <p className="text-brand-orange font-bold text-sm uppercase tracking-widest">Recruitment Support</p>
                                                </div>
                                            </div>

                                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 border-l-4 border-l-brand-green mb-6">
                                                <p className="text-white leading-relaxed italic">
                                                    "De AI heeft Sophie als 94% match gemarkeerd. Ik heb zojuist met haar gebeld—ze is niet alleen technisch sterk, maar past ook perfect in jullie bedrijfscultuur. Ik zet haar door voor de finale ronde!"
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 flex items-center gap-3">
                                                    <div className="bg-brand-green/20 p-2 rounded text-brand-green"><MessageSquare size={16} /></div>
                                                    <span className="text-white font-bold text-sm">Persoonlijke Touch</span>
                                                </div>
                                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-3">
                                                    <div className="bg-brand-orange/20 p-2 rounded text-brand-orange"><Users size={16} /></div>
                                                    <span className="text-white font-bold text-sm">Culture Fit</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 5. Target / Research Visualization */}
                            {activeFeature === 'research' && (
                                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 animate-in fade-in zoom-in duration-500 md:scale-105 transform origin-center">
                                    <h5 className="font-display font-bold text-xl sm:text-2xl uppercase text-brand-dark mb-4 sm:mb-6">Candidate Persona</h5>
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="bg-brand-orange/10 p-5 rounded-xl border border-brand-orange/20 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                            <div className="relative z-10">
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-bold text-brand-dark uppercase tracking-widest text-xs">Latent Zoekend</span>
                                                    <span className="font-bold text-brand-orange">72%</span>
                                                </div>
                                                <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                                                    <div className="h-full bg-gradient-to-r from-brand-orange to-red-500 w-[72%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-100 text-center hover:bg-gray-100 transition-colors cursor-default">
                                                <Target className="mx-auto text-brand-green mb-3" size={28} />
                                                <p className="font-bold text-gray-900 text-sm uppercase">Top Motivator</p>
                                                <p className="text-gray-500 text-sm mt-1">Salaris & Flexibiliteit</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:bg-gray-100 transition-colors cursor-default">
                                                <MapPin className="mx-auto text-blue-500 mb-3" size={28} />
                                                <p className="font-bold text-gray-900 text-sm uppercase">Locatie</p>
                                                <p className="text-gray-500 text-sm mt-1">Lokaal / Hybride</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-900 text-white p-4 rounded-xl flex items-center justify-between">
                                            <span className="font-bold text-sm tracking-widest uppercase">Doelgroep Groote</span>
                                            <span className="text-brand-green font-black text-xl">14.500</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 6. Jobboards Visualization */}
                            {activeFeature === 'jobboards' && (
                                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 animate-in fade-in zoom-in duration-500 text-center md:scale-105 transform origin-center">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-inner border border-brand-green/20">
                                        <Megaphone size={28} className="sm:hidden" />
                                        <Megaphone size={36} className="hidden sm:block" />
                                    </div>
                                    <h5 className="font-display font-bold text-xl sm:text-2xl uppercase text-brand-dark mb-3 sm:mb-4">Multi-posting Actief</h5>
                                    <p className="text-gray-500 mb-6 sm:mb-8 max-w-sm mx-auto text-sm sm:text-base">Jouw vacature wordt nu realtime verspreid en gemanaged op de grootste kanalen.</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-start gap-3 bg-gray-50 shadow-sm relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0A66C2]"></div>
                                            <Linkedin className="text-[#0A66C2]" size={24} />
                                            <span className="font-bold text-gray-700">LinkedIn</span>
                                            <CheckCircle2 className="text-brand-green ml-auto" size={18} />
                                        </div>
                                        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-start gap-3 bg-gray-50 shadow-sm relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                                            <span className="font-black text-blue-600 font-display text-lg leading-none">indeed</span>
                                            <CheckCircle2 className="text-brand-green ml-auto" size={18} />
                                        </div>
                                        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-start gap-3 bg-gray-50 shadow-sm relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                                            <span className="font-bold text-gray-700 text-sm leading-tight text-left">Nat. Vacaturebank</span>
                                            <div className="w-4 h-4 border-2 border-brand-orange border-t-transparent rounded-full animate-spin ml-auto"></div>
                                        </div>
                                        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-start gap-3 bg-gray-50 shadow-sm relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600"></div>
                                            <span className="font-bold text-gray-700">Monsterboard</span>
                                            <div className="w-4 h-4 border-2 border-brand-orange border-t-transparent rounded-full animate-spin ml-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 7. Planning Visualization */}
                            {activeFeature === 'planning' && (
                                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 animate-in fade-in zoom-in duration-500 md:scale-105 transform origin-center">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 text-left">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                                            <Calendar size={24} className="sm:hidden" />
                                            <Calendar size={28} className="hidden sm:block" />
                                        </div>
                                        <div>
                                            <h5 className="font-display font-bold text-xl sm:text-2xl uppercase text-brand-dark">Interview Gepland</h5>
                                            <p className="text-gray-500 text-xs sm:text-sm">Automatisch gesynchroniseerd</p>
                                        </div>
                                    </div>
                                    <div className="border border-gray-100 rounded-xl p-4 sm:p-6 bg-gray-50 mb-6">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                            <div>
                                                <p className="font-bold text-gray-900">Kennismaking: <span className="text-brand-orange">Sophie de Vlieger</span></p>
                                                <p className="text-sm text-gray-500">Met: Hiring Manager (Tom)</p>
                                            </div>
                                            <div className="bg-white px-3 py-1 rounded shadow-sm text-center">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">DO</p>
                                                <p className="text-xl font-black text-brand-dark leading-none">14</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                            <Lock size={16} className="text-brand-green" /> 10:00 - 11:00 (Microsoft Teams)
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Status: Bevestigd</span>
                                        <span className="text-brand-green font-bold flex items-center gap-1"><CheckCircle2 size={16} /> Agenda Update</span>
                                    </div>
                                </div>
                            )}

                            {/* 8. Talentpool Visualization */}
                            {activeFeature === 'talentpool' && (
                                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 animate-in fade-in zoom-in duration-500 md:scale-105 transform origin-center">
                                    <h5 className="font-display font-bold text-xl sm:text-2xl uppercase text-brand-dark mb-4 sm:mb-6">Actieve Talentpool</h5>
                                    <div className="space-y-2 sm:space-y-3">
                                        {[
                                            { name: 'Mark Janssen', role: 'Fullstack Dev', score: 92 },
                                            { name: 'Lisa de Boer', role: 'Product Owner', score: 88 },
                                            { name: 'Kevin R.', role: 'Data Analist', score: 85 }
                                        ].map((candidate, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                                        {candidate.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 leading-tight">{candidate.name}</p>
                                                        <p className="text-xs text-gray-500">{candidate.role}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="flex items-center gap-1 text-brand-green font-bold bg-brand-green/10 px-2 py-1 rounded">
                                                        <Zap size={14} /> {candidate.score}% Fit
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-6 border-2 border-brand-dark text-brand-dark py-3 rounded-lg font-bold hover:bg-brand-dark hover:text-white transition uppercase tracking-widest text-sm">
                                        Bekijk alle 438 profielen
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Legacy Integrations / Features Area Below */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-brand-dark relative hover:shadow-2xl transition-shadow">
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                            Veilig & Betrouwbaar
                        </div>

                        <h4 className="font-display text-2xl font-bold text-brand-dark mb-4 uppercase">Moderne Cloudinfrastructuur</h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Werftools is gebouwd met veilige en moderne cloudinfrastructuur, speciaal ontworpen voor bedrijven die de hoogste eisen stellen aan privacy, compliance en databescherming.
                        </p>

                        {/* Prominent Certification Logos / Badges */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-xl p-4 w-28 text-center">
                                <Shield className="text-brand-green mb-2" size={28} />
                                <span className="font-black text-[10px] uppercase tracking-widest text-brand-dark leading-tight">GDPR<br />Compliant</span>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-xl p-4 w-28 text-center">
                                <Lock className="text-brand-green mb-2" size={28} />
                                <span className="font-black text-[10px] uppercase tracking-widest text-brand-dark leading-tight">ISO<br />27001</span>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-xl p-4 w-28 text-center">
                                <CheckCircle2 className="text-brand-orange mb-2" size={28} />
                                <span className="font-black text-[10px] uppercase tracking-widest text-brand-dark leading-tight">SOC2<br />Type 2</span>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-xl p-4 w-28 text-center">
                                <Cloud className="text-brand-green mb-2" size={28} />
                                <span className="font-black text-[10px] uppercase tracking-widest text-brand-dark leading-tight">HIPAA<br />Compliant</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display text-3xl font-bold text-brand-dark mb-8 uppercase">Naadloze Integraties</h4>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: 'LinkedIn', icon: <Linkedin size={20} className="text-[#0A66C2]" /> },
                                { name: 'Microsoft 365', icon: <Database size={20} className="text-[#00A4EF]" /> },
                                { name: 'Google Workspace', iconUrl: 'https://cdn.simpleicons.org/google/4285F4' },
                                { name: 'Indeed', iconUrl: 'https://cdn.simpleicons.org/indeed/003399' },
                                { name: 'Bullhorn', icon: <FileText size={20} className="text-[#F16A22]" /> },
                                { name: 'WhatsApp', iconUrl: 'https://cdn.simpleicons.org/whatsapp/25D366' },
                                { name: 'Slack', iconUrl: 'https://cdn.simpleicons.org/slack/4A154B' },
                                { name: 'Salesforce', icon: <Cloud size={20} className="text-[#00A1E0]" /> },
                                { name: 'HubSpot', iconUrl: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
                                { name: 'Workday', icon: <Database size={20} className="text-[#005CB9]" /> },
                                { name: 'Zoom', iconUrl: 'https://cdn.simpleicons.org/zoom/2D8CFF' },
                                { name: 'Notion', iconUrl: 'https://cdn.simpleicons.org/notion/000000' }
                            ].map((integration, idx) => (
                                <div key={idx} className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all flex items-center gap-3">
                                    {integration.icon ? integration.icon : <img src={integration.iconUrl} alt={integration.name} className="w-5 h-5 object-contain" />}
                                    <span className="font-bold text-brand-dark">{integration.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
