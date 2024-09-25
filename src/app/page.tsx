import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
export default function Home() {
  return (
    <div className="grid place-content-center ">
      <HeroSection />
      <FeatureSection />
      <WorkSection />
    </div>
  )
}