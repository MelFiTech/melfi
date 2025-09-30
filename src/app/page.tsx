import { Header } from '@/components/Header/Header';
import { LandingPage } from '@/screens/LandingPage/LandingPage';
import { FooterSubsection } from '@/screens/LandingPage/sections/FooterSubsection/FooterSubsection';

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <LandingPage />
      <FooterSubsection />
    </div>
  );
}
