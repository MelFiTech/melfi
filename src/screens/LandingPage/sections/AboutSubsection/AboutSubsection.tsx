'use client';
import React, { useEffect, useRef, useState } from 'react';
import { LazyImage } from '../../../../components/OptimizedImage';
import { TabOption, Tabs } from '../../../../components/Tabs/Tabs';
import { TeamMember, TeamMemberCard } from '../../../../components/TeamMemberCard/TeamMemberCard';

const teamMembers: TeamMember[] = [
  {
    quote:
      'I design and build intuitive, user-friendly web applications, turning ideas into seamless digital experiences.',
    name: 'Hafeez Abubakar',
    role: 'Frontend Dev',
    isDark: false,
    image: '/images/team/hafeez.png',
  },
  {
    quote: 'As the Lead Backend Developer, I make sure our systems are fast, secure, and scalable.',
    name: 'Akachi Osuji',
    role: 'Backend Dev',
    isDark: false,
    image: '/images/team/kachie.png',
  },
  {
    quote: 'I enjoy building backend systems that make everyday life easier.',
    name: 'Nnamdi Nwaocha',
    role: 'Backend Dev',
    isDark: false,
    image: '/images/team/nnamdi.png',
  },
  {
    quote: 'I build software solutions that make a difference.',
    name: 'Majeed Modibbo',
    role: 'Senior Software end.',
    isDark: false,
    image: '/images/team/majeed.png',
  },
];

const clientLogos = [
  { src: '/logos/aimtoget.png', alt: 'Aimtoget' },
  { src: '/logos/nyra.png', alt: 'Nyra' },
  { src: '/logos/karama.png', alt: 'Karama' },
  { src: '/logos/monzi.png', alt: 'Monzi' },
  { src: '/logos/snugs.png', alt: 'Snugs' },
  { src: '/logos/dysh.png', alt: 'Dysh' },
  { src: '/logos/zinex.png', alt: 'Zinex' },
  { src: '/logos/sekere.png', alt: 'Sekere' },
  { src: '/logos/aimtoget.png', alt: 'Aimtoget' }, // Duplicate to fill 3x3
];

// Dynamic pagination dots based on scroll position
const getPaginationDots = (currentIndex: number, totalItems: number) => {
  const dots = [];
  for (let i = 0; i < totalItems; i++) {
    dots.push({ active: i === currentIndex });
  }
  return dots;
};

export const AboutSubsection = (): React.ReactElement => {
  const [activeTab, setActiveTab] = useState('team');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabOptions: TabOption[] = [
    { label: 'Company', value: 'company', active: activeTab === 'company' },
    { label: 'Our Team', value: 'team', active: activeTab === 'team' },
    { label: 'Clients', value: 'clients', active: activeTab === 'clients' },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Manual scroll handling for team cards with circular scrolling
  useEffect(() => {
    if (activeTab !== 'team' || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const cardWidth = 300; // Approximate card width + gap
    const totalCards = teamMembers.length;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      setScrollPosition(scrollLeft);

      // Calculate current card index based on scroll position
      const newIndex = Math.round(scrollLeft / cardWidth) % totalCards;
      setCurrentCardIndex(newIndex);

      // Implement circular scrolling
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const halfScroll = maxScroll / 2;

      if (scrollLeft >= maxScroll) {
        // Reset to beginning for seamless loop
        scrollContainer.scrollLeft = 0;
      } else if (scrollLeft < 0) {
        // Reset to end for seamless loop
        scrollContainer.scrollLeft = maxScroll;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // Auto-scroll for circular effect
  useEffect(() => {
    if (activeTab !== 'team' || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollSpeed = 0.3; // pixels per frame
    let animationId: number;

    const autoScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [activeTab]);

  const renderCompanyContent = () => (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1248px] mx-auto'>
      {/* Text content on the left */}
      <div className='flex flex-col gap-4'>
        <h2 className='font-medium text-neutral-900 text-4xl tracking-[0] leading-[normal]'>
          About Melfi Agency
        </h2>
        <p className="[font-family:'Sora',Helvetica] font-normal text-neutral-900 text-base tracking-[-0.64px] leading-[26px] opacity-75">
          We are a global design & development studio helping startups and brands create stunning,
          user-focused websites and apps. Our team combines creativity with technical expertise to
          deliver digital products that drive growth.
        </p>
        <p className="[font-family:'Sora',Helvetica] font-normal text-neutral-900 text-base tracking-[-0.64px] leading-[26px] opacity-75">
          Founded with a vision to bridge the gap between design and development, we've been helping
          businesses transform their ideas into successful digital products for over 10 years.
        </p>
      </div>

      {/* Image on the right */}
      <div className='flex justify-center lg:justify-end'>
        <div className='w-[400px] h-[300px] bg-[#f1f1f1] rounded-3xl flex items-center justify-center'>
          <span className="text-neutral-500 [font-family:'Sora',Helvetica]">Company Image</span>
        </div>
      </div>
    </div>
  );

  const renderTeamContent = () => (
    <div className='flex flex-col  items-center gap-12 w-full'>
      <header className='flex flex-col max-w-[717px] items-center justify-center gap-2 relative flex-[0_0_auto] px-4'>
        <div className='flex flex-col items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]'>
          <h2 className='relative max-w-[570px] mt-[-1.00px] font-medium text-neutral-900 text-4xl text-center tracking-[0] leading-[normal]'>
            Talents on Ground
          </h2>
          <p className="relative max-w-[569px] opacity-50 [font-family:'Sora',Helvetica] font-normal text-neutral-900 text-base text-center tracking-[-0.64px] leading-[26px]">
            Melfi is made up of amazing smart team that sit on a round table, analyze your product
            and bring the best to your business.
          </p>
        </div>
      </header>

      {/* Scrollable container with better styling */}
      <div className='relative w-full max-w-7xl mx-auto px-4'>
        <div
          ref={scrollRef}
          className='flex gap-6 overflow-x-auto scrollbar-hide relative w-full pb-4'
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className='flex-shrink-0'>
              <TeamMemberCard member={member} index={index} />
            </div>
          ))}
          {/* Duplicate cards for seamless loop */}
          {teamMembers.map((member, index) => (
            <div key={`duplicate-${index}`} className='flex-shrink-0'>
              <TeamMemberCard member={member} index={index + teamMembers.length} />
            </div>
          ))}
        </div>

        {/* Scroll indicators */}
        <div className='absolute left-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10' />
        <div className='absolute right-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10' />
      </div>

      <div className='inline-flex items-center gap-3 relative flex-[0_0_auto]'>
        {getPaginationDots(currentCardIndex, teamMembers.length).map((dot, index) => (
          <div
            key={index}
            className={`relative h-3 rounded-[30px] transition-all duration-300 cursor-pointer ${
              dot.active ? 'w-[27px] bg-[#8c8c8c]' : 'w-3 bg-[#e4e4e4] hover:bg-[#c4c4c4]'
            }`}
            onClick={() => {
              if (scrollRef.current) {
                const cardWidth = 300;
                scrollRef.current.scrollTo({
                  left: index * cardWidth,
                  behavior: 'smooth',
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderClientsContent = () => (
    <div className='flex flex-col items-center gap-12 max-w-[1248px] mx-auto'>
      <header className='flex flex-col items-center justify-center gap-2'>
        <h2 className='font-medium text-neutral-900 text-4xl text-center tracking-[0] leading-[normal]'>
          Our Clients
        </h2>
        <p className="opacity-50 [font-family:'Sora',Helvetica] font-normal text-neutral-900 text-base text-center tracking-[-0.64px] leading-[26px] max-w-[569px]">
          We've had the privilege of working with amazing companies and startups across different
          industries.
        </p>
      </header>

      {/* 3x3 Grid of client logos */}
      <div className='grid grid-cols-3 gap-8 w-full max-w-[600px]'>
        {clientLogos.slice(0, 9).map((logo, index) => (
          <div
            key={index}
            className='w-full h-[80px] bg-white rounded-lg border border-[#2222220f] flex items-center justify-center p-4'
          >
            <LazyImage
              src={logo.src}
              alt={`${logo.alt} logo`}
              className='max-w-full max-h-full object-contain opacity-80'
              width={120}
              height={60}
              quality={75}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id='about' className='relative w-full bg-white py-24 overflow-hidden scroll-mt-28'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center gap-12'>
          <Tabs options={tabOptions} onTabChange={handleTabChange} />

          <div className='w-full min-h-[600px] flex items-center justify-center'>
            {activeTab === 'company' && renderCompanyContent()}
            {activeTab === 'team' && renderTeamContent()}
            {activeTab === 'clients' && renderClientsContent()}
          </div>
        </div>
      </div>

      {/* Background gradients */}
      {activeTab === 'team' && (
        <>
          <div className='top-[510px] hidden md:block left-[-158px] w-[478px] h-[162px] -rotate-90 absolute bg-[linear-gradient(180deg,rgba(255,255,255,1)_32%,rgba(255,255,255,0)_100%)]' />
          <div className='top-[510px] hidden md:block right-[-158px] w-[478px] h-[162px] rotate-90 absolute bg-[linear-gradient(180deg,rgba(255,255,255,1)_32%,rgba(255,255,255,0)_100%)]' />
        </>
      )}
    </section>
  );
};
