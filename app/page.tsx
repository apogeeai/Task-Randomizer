import { NavMenu } from '@/components/ui/nav-menu';
import { HeroSection } from '@/components/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <NavMenu />
      <HeroSection />
    </main>
  );
}