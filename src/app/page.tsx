import Hero from '@/components/sections/home/Hero';
import Clients from '@/components/sections/home/Clients';
import Offering from '@/components/sections/home/Offering';
import Projects from '@/components/sections/home/Projects';
import HowWeWork from '@/components/sections/home/HowWeWork';
import Testimonials from '@/components/sections/home/Testimonials';
import Why from '@/components/sections/home/Why';
import FAQ from '@/components/sections/home/FAQ';
import CTA from '@/components/sections/home/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Offering />
      <Projects />
      <HowWeWork />
      <Testimonials />
      <Why />
      <FAQ />
      <CTA />
    </main>
  );
}
