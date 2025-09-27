import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchForm from "@/components/search/SearchForm";
import heroImage from "@/assets/hero-pets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rover-green/10 via-rover-blue/10 to-rover-green/5">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20 gap-12">
          {/* Left side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Soins Aimants pour Vos Animaux
              <br />
              <span className="rover-text-green">Dans Votre Quartier</span>™
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              Réservez des pet sitters et promeneurs de confiance.
            </p>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:hidden mb-8">
              <Link to="/search">
                <Button className="rover-button-secondary w-full sm:w-auto px-8 py-4 text-lg">
                  Trouver un Pet Sitter
                </Button>
              </Link>
              <Link to="/become-sitter">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
                  Devenir Pet Sitter
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Search Form */}
          <div className="flex-1 w-full max-w-lg">
            <SearchForm className="bg-white/95 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;