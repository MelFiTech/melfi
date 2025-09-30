import { Star } from 'lucide-react';
import React from 'react';
import { Ticker } from '../../../../components/Ticker/Ticker';
import { Badge } from '../../../../components/ui/badge';

export const TrustedClientsSubsection = (): React.ReactElement => {
  const features = [
    {
      icon: 'dev',
      text: 'Design & Dev',
    },
    {
      icon: 'star',
      text: '5 star rating',
    },
    {
      icon: 'bag',
      text: '10+ years experience',
    },
    {
      icon: 'user',
      text: 'Fast pace Delivery Team',
    },
  ];

  const logos = [
    { src: '/logos/aimtoget.png', alt: 'Aimtoget' },
    { src: '/logos/nyra.png', alt: 'Nyra' },
    { src: '/logos/karama.png', alt: 'Karama' },
    { src: '/logos/monzi.png', alt: 'Monzi' },
    { src: '/logos/snugs.png', alt: 'Snugs' },
    { src: '/logos/dysh.png', alt: 'Dysh' },
    { src: '/logos/zinex.png', alt: 'Zinex' },
    { src: '/logos/sekere.png', alt: 'Sekere' },
  ];

  return (
    <section className='relative w-full h-[400px] bg-white scroll-mt-28'>
      <div className='flex flex-col md:w-[611px] w-[300px] gap-4 absolute top-[99px] md:left-[calc(50.00%_-_305px)] items-center justify-center'>
        <h2 className='w-fit md:mt-[-1.00px] font-medium text-neutral-900 md:text-4xl text-2xl tracking-[0] leading-[normal]'>
          Trusted by 20+ Startups
        </h2>

        <div className='inline-flex items-center gap-5 flex-[0_0_auto] md:ml-[-11.00px] md:mr-[-11.00px] ml-[-5.00px] mr-[-5.00px]'>
          {features.map((feature, index) => (
            <Badge
              key={index}
              variant='outline'
              className='inline-flex items-center gap-2 flex-[0_0_auto] border-none bg-transparent p-0 h-auto'
            >
              {feature.icon === 'star' ? (
                <Star className='w-5 h-5 text-amber-500' aria-hidden />
              ) : feature.icon === 'bag' ? (
                <img src='/icons/bag.png' alt='Bag' className='w-5 h-5' />
              ) : feature.icon === 'user' ? (
                <img src='/icons/user.png' alt='Users' className='w-5 h-5' />
              ) : (
                <img src='/icons/dev.png' alt='Dev' className='w-5 h-5' />
              )}
              <span className="w-fit mt-[-1.00px] opacity-50 [font-family:'Sora',Helvetica] font-normal text-neutral-900 md:text-sm text-xs tracking-[-0.56px] leading-[26px] whitespace-nowrap">
                {feature.text}
              </span>
            </Badge>
          ))}
        </div>
      </div>

      <div
        className='flex flex-col w-full items-center absolute top-64 overflow-x-scroll md:overflow-x-hidden
     left-0'
      >
        <Ticker className='px-6' speed={80} gapClassName='gap-16'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className='md:w-[134px] w-[100px] h-[44px] bg-white flex items-center justify-center rounded'
            >
              <img
                src={logo.src}
                alt={`${logo.alt} logo`}
                className='max-w-full max-h-full object-contain opacity-80'
              />
            </div>
          ))}
        </Ticker>
      </div>

      <div className='absolute md:top-[119px] top-[250px] left-[-119px] md:w-[400px] w-[250px] h-[162px] -rotate-90 bg-[linear-gradient(180deg,rgba(255,255,255,1)_42%,rgba(255,255,255,0)_100%)]' />

      <div className='absolute md:top-[119px] top-[250px] right-[-119px] md:w-[400px] w-[250px] h-[162px] rotate-90 bg-[linear-gradient(180deg,rgba(255,255,255,1)_42%,rgba(255,255,255,0)_100%)]' />
    </section>
  );
};
