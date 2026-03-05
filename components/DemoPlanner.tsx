import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Building, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const DemoPlanner: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');

    // 40-minute morning slots
    const timeSlots = ['09:00', '09:40', '10:20', '11:00', '11:40'];

    const getNextDays = () => {
        const dates = [];
        let i = 1;
        while (dates.length < 7) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            // Skip Sunday (0) and Saturday (6)
            if (d.getDay() !== 0 && d.getDay() !== 6) {
                dates.push(d);
            }
            i++;
        }
        return dates;
    };

    const days = getNextDays();

    const handleBookDemo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime || !name || !email) return;

        const formattedDate = selectedDate.toLocaleDateString('nl-NL', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const subject = encodeURIComponent(`Demo Aanvraag Werftools: ${company || name}`);
        const body = encodeURIComponent(`Beste Werftools,\n\nIk wil graag een demo inplannen op:\nDatum: ${formattedDate}\nTijd: ${selectedTime}\n\nGegevens:\nNaam: ${name}\nBedrijf: ${company || 'Niet ingevuld'}\nE-mail: ${email}\n\nMet vriendelijke groet,\n${name}`);

        window.location.href = `mailto:support@werftools.nl?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="font-display font-bold text-2xl text-brand-dark uppercase tracking-wide">Plan een Demo</h3>
                    <p className="text-gray-500 text-sm mt-1">Kies een dag en tijdslot (40 min)</p>
                </div>
                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center">
                    <CalendarIcon size={24} />
                </div>
            </div>

            <form onSubmit={handleBookDemo} className="space-y-6 flex-grow flex flex-col">
                {/* Step 1: Select Date */}
                <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <CalendarIcon size={14} /> 1. Kies een datum
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {days.map((date, i) => {
                            const isSelected = selectedDate?.toDateString() === date.toDateString();
                            const dayName = date.toLocaleDateString('nl-NL', { weekday: 'short' });
                            const dayNum = date.getDate();
                            const month = date.toLocaleDateString('nl-NL', { month: 'short' });

                            return (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => {
                                        setSelectedDate(date);
                                        setSelectedTime(null); // Reset time when date changes
                                    }}
                                    className={`flex-shrink-0 w-16 h-20 rounded-xl border flex flex-col items-center justify-center transition-all ${isSelected
                                        ? 'border-brand-orange bg-brand-orange/5 text-brand-orange ring-2 ring-brand-orange/20 shadow-sm'
                                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="text-[10px] font-bold uppercase">{dayName}</span>
                                    <span className="font-display font-bold text-xl leading-none my-1">{dayNum}</span>
                                    <span className="text-[10px] uppercase text-gray-400">{month}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Step 2: Select Time */}
                <div className={`transition-all duration-300 ${selectedDate ? 'opacity-100' : 'opacity-40 pointer-events-none grayscale'}`}>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Clock size={14} /> 2. Ochtend Tijdslot
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(time => (
                            <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`py-2 rounded-lg text-sm font-bold transition-all border ${selectedTime === time
                                    ? 'bg-brand-orange text-white border-brand-orange shadow-md'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-orange hover:text-brand-orange'
                                    }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Step 3: Details */}
                <div className={`space-y-4 pt-4 border-t border-gray-100 transition-all duration-300 flex-grow ${selectedTime ? 'opacity-100' : 'opacity-40 pointer-events-none grayscale'}`}>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <User size={14} /> 3. Jouw Gegevens
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <User size={16} className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2" />
                            <input
                                required
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition"
                                placeholder="Voor- en achternaam"
                            />
                        </div>
                        <div className="relative">
                            <Building size={16} className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition"
                                placeholder="Bedrijfsnaam"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <Mail size={16} className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2" />
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition"
                            placeholder="Werk e-mailadres"
                        />
                    </div>
                </div>

                <button
                    disabled={!selectedDate || !selectedTime || !name || !email}
                    type="submit"
                    className="w-full mt-auto flex justify-center items-center gap-2 bg-brand-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                    <div className="absolute inset-0 w-0 bg-brand-orange transition-all duration-[600ms] ease-out group-hover:w-full group-disabled:hidden"></div>
                    <span className="relative z-10 flex items-center gap-2">
                        Demo Aanvragen <Send size={18} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-disabled:transform-none" />
                    </span>
                </button>
            </form>
        </div>
    );
};
