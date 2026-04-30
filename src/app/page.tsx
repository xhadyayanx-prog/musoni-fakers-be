import React from 'react';
import styles from './page.module.scss';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import MicrofinanceSection from '@/components/MicrofinanceSection/MicrofinanceSection';
import WhatWeDoSection from '@/components/WhatWeDoSection/WhatWeDoSection';
import TechDrivenSection from '@/components/TechDrivenSection/TechDrivenSection';
import OurImpactSection from '@/components/OurImpactSection/OurImpactSection';
import DigitalChannelsSection from '@/components/DigitalChannelsSection/DigitalChannelsSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import InvestorsSection from '@/components/InvestorsSection/InvestorsSection';
import PioneersSection from '@/components/PioneersSection/PioneersSection';
import GetInTouchSection from '@/components/GetInTouchSection/GetInTouchSection';
import Footer from '@/components/Footer/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget/WhatsAppWidget';

export default function HomePage() {
  return (
    <main className={styles?.page}>
      <Navbar />
      <HeroSection />
      <MicrofinanceSection />
      <WhatWeDoSection />
      <TechDrivenSection />
      <OurImpactSection />
      <DigitalChannelsSection />
      <TestimonialsSection />
      <InvestorsSection />
      <PioneersSection />
      <GetInTouchSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
