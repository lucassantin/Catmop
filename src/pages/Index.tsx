import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProducts from "@/components/FeaturedProducts";
import SegmentsPreview from "@/components/SegmentsPreview";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import BottomNav from "@/components/BottomNav";
import MobileDrawer from "@/components/MobileDrawer";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-[120px] pb-20 lg:pb-0">
        <HeroSlider />
        <TrustBadges />
        <CategoryCards />
        <FeaturedProducts title="Produtos em Destaque" />
        <SegmentsPreview />
        <FeaturedProducts title="Lançamentos" showNew />
        <CTASection />
      </main>
      
      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Mobile Bottom Nav */}
      <BottomNav onMenuClick={() => setIsDrawerOpen(true)} />
    </div>
  );
};

export default Index;
