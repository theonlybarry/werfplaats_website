import React from 'react';
import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { PlatformOverview } from '../components/PlatformOverview';
import { Testimonials } from '../components/Testimonials';
import { Team } from '../components/Team';
import { WinningTeam } from '../components/WinningTeam';
import { FinalCTA } from '../components/FinalCTA';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <SocialProof />
      <PlatformOverview />
      <WinningTeam />
      <Testimonials />
      <Team />
      <FinalCTA />
    </>
  );
};