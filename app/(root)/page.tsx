import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OurServices from '@/components/OurServices';
import Testimonials from '@/components/Testimonials';
import Questions from '@/components/Questions';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <OurServices />
      <Testimonials />
      <Questions />
    </main>
  );
}
