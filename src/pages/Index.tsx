import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProducts from "@/components/FeaturedProducts";
import SegmentsPreview from "@/components/SegmentsPreview";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[112px] lg:pt-[120px]">
        <HeroSlider />
        <TrustBadges />
        <CategoryCards />
        <FeaturedProducts title="Produtos em Destaque" />
        <SegmentsPreview />
        <FeaturedProducts title="Lançamentos" showNew />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
