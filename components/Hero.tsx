import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { CheckCircle, Instagram, Facebook, Smartphone, MousePointer2, TrendingUp, Users } from 'lucide-react';

const CAMPAIGNS = {
  Instagram: {
    title: "Werken bij Werftools?",
    image: "/ai_recruitment_dashboard_1772704962208.png",
    stats: { conversions: 42, cpa: "€8,40" },
    accent: "bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500"
  },
  Facebook: {
    title: "Nieuwe Uitdaging in Tech",
    image: "/ai_recruitment_dashboard_1772704962208.png",
    stats: { conversions: 128, cpa: "€5,12" },
    accent: "bg-blue-600"
  },
  TikTok: {
    title: "Join the Team! 🚀",
    image: "/ai_recruitment_dashboard_1772704962208.png",
    stats: { conversions: 89, cpa: "€3,90" },
    accent: "bg-black"
  }
};

export const Hero: React.FC = () => {
  const [candidates, setCandidates] = useState(12480);

  // Counter animation for social proof
  useEffect(() => {
    const timer = setInterval(() => {
      setCandidates(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-brand-dark flex items-start md:items-center pt-32 md:pt-20 pb-16 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] animate-pulse-soft"></div>
        <div className="absolute bottom-[20%] left-[5%] w-64 h-64 bg-brand-green/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Content (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Live: <span className="text-brand-green">{candidates.toLocaleString()}</span> kandidaten gegenereerd deze maand
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.85] tracking-tighter">
              AI ONTMOET <br />
              <span className="text-brand-orange italic drop-shadow-[0_0_20px_rgba(255,90,31,0.3)]">ECHTE</span> <br />
              RECRUITERS.
            </h1>

            <p className="text-gray-400 text-lg md:text-2xl max-w-xl leading-snug font-medium">
              Automatiseer sourcing, screening en werving met AI - terwijl recruiters zich focussen op <span className="text-white border-b-2 border-brand-green">relaties, talent</span> en betere hires.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button onClick={() => window.location.href = 'mailto:barrywanschers@gmail.com'} variant="primary" className="!px-10 !py-5 !text-lg rounded-full group">
                BOEK EEN DEMO
                <MousePointer2 className="inline ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" className="!px-10 !py-5 !text-lg rounded-full border-white/20 text-white hover:border-brand-orange">
                ONZE CASES
              </Button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-brand-orange font-display text-4xl font-bold">+90%</p>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mt-1">Invullingsgraad</p>
              </div>
              <div>
                <p className="text-brand-green font-display text-4xl font-bold">8 wk</p>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mt-1">Gem. doorlooptijd</p>
              </div>
              <div className="hidden md:block">
                <p className="text-white font-display text-4xl font-bold">€0,-</p>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mt-1">No cure, No pay</p>
              </div>
            </div>
          </div>

          {/* Right Content (5 columns) - AI DASHBOARD PREVIEW */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 flex flex-col items-center">

              {/* Dashboard Presentation Container */}
              <div className="relative w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-800 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden group">

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Sleek Browser-like Top Bar */}
                <div className="w-full h-8 bg-black/40 flex items-center px-4 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-green/80"></div>
                  </div>
                </div>

                {/* The Ecosystem Image */}
                <img
                  src="/dark_recruitment_platform_ui_1772705609085.png"
                  alt="Werftools AI Recruitment Ecosystem"
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />

              </div>

              {/* Floating Data Tags */}
              <div className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl animate-float-slow hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-lg text-brand-green">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Sourcing Rate</p>
                    <p className="text-xl font-display font-black text-white">99.8%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl animate-float-slow [animation-delay:1s] hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-orange/20 p-2 rounded-lg text-brand-orange">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Matches</p>
                    <p className="text-xl font-display font-black text-white">2.4m+</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.21,104.76,128.52,110.15,191.2,103.74Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};