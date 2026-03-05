import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Testimonials: React.FC = () => {
   return (
      <section className="bg-brand-orange py-24 relative overflow-hidden">
         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

            {/* Left Side Text */}
            <div className="lg:w-1/2 text-white space-y-6">
               <div className="inline-block bg-white text-brand-orange p-2 rounded-lg shadow-sm transform -rotate-3">
                  <Quote size={32} fill="currentColor" />
               </div>
               <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-none italic">
                  WAT VINDEN ONZE <br /> OPDRACHTGEVERS?
               </h2>
               <p className="text-lg font-medium opacity-90 max-w-md">
                  Bij Werftools nemen we geen genoegen met een zesje. Jij toch ook niet?!
               </p>
            </div>

            {/* Right Side Cards */}
            <div className="lg:w-1/2 w-full">
               <div className="space-y-6">
                  {REVIEWS.map((review) => (
                     <div key={review.id} className="bg-white rounded-xl p-6 shadow-2xl transform transition hover:scale-[1.02]">
                        <div className="flex items-start gap-4 mb-4">
                           <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
                           <div>
                              <h4 className="font-bold text-brand-dark flex items-center gap-1">
                                 {review.name}
                                 <span className="text-blue-500 text-[10px] ml-1">●</span>
                              </h4>
                              <p className="text-xs text-gray-400">{review.role} @ {review.company}</p>
                              <div className="flex text-yellow-400 mt-1">
                                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                              </div>
                           </div>
                           <div className="ml-auto">
                              {/* Google G icon simulation */}
                              <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                                 <span className="font-bold text-sm text-blue-500">G</span>
                              </div>
                           </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                           "{review.content}"
                        </p>
                        <a href="#" className="text-blue-500 text-xs mt-2 block font-medium hover:underline">Lees meer</a>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};