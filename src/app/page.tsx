import Benifits from "@/components/Benifits";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import FAQs from '../components/FAQs';
import BottomBanner from "@/components/BottomBanner";
import Integration from "@/components/Integration";
import Navigation from "@/components/Navigation";
import { AnimateView } from "@/components/AnimatevVew";
export default function Home() {
  return (
    <div className="grid place-content-center ">
      <div className="w-full fixed top-0 z-50">
        <AnimateView yaxis={-20} >
          <Navigation />
        </AnimateView>
      </div>
      <HeroSection />
      <FeatureSection />
      <WorkSection />
      <Benifits />
      <BottomBanner />
      <Integration />
      <FAQs />
    </div>
  )
}