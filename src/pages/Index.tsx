import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import DogWalkingProtectSection from "@/components/home/DogWalkingProtectSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <DogWalkingProtectSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
