import Benifits from "@/components/Benifits";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import FAQs from '../components/FAQs';

export default function Home() {
  return (
    <div className="grid place-content-center ">
      <HeroSection />
      <FeatureSection />
      <WorkSection />
      <Benifits />
      <FAQs />
    </div>
  )
}