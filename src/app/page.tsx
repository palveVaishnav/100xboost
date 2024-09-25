import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div className="grid place-content-center bg-gradient-to-tr from-[#000] to-[#262724]">
      <HeroSection />
      <FeatureSection />
    </div>
  )
}