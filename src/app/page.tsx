import { LandingPage } from '@/screens/LandingPage/LandingPage'
import { Header } from '@/components/Header/Header'
import { FooterSubsection } from '@/screens/LandingPage/sections/FooterSubsection/FooterSubsection'

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <FooterSubsection />
    </>
  )
}