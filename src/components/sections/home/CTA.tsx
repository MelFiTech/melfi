'use client';

import { CTACard } from '@/components/ui/CTACard';

export default function CTA() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTACard
          title="Be quick!"
          subtitle="Spots are almost gone for August."
          tagline="Let's bring your dream to live."
          buttonText="Send us a Mail today"
          buttonIcon="☺️"
        />
      </div>
    </section>
  );
} 