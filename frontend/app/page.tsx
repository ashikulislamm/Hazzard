import {HeroSection} from "@/components/sections/HeroSection";
import MarqueeBar from "@/components/sections/MarqueeBar";
import CollectionsSection from "@/components/sections/CollectionsSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import AvailabilitySection from "@/components/sections/AvailabilitySection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import NewArrivals from "@/components/sections/NewArrivals";
import BrandStory from "@/components/sections/BrandStory";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeBar />
      <AvailabilitySection />
      <NewArrivals />
      <CollectionsSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <BrandStory />
    </main>
  );
}