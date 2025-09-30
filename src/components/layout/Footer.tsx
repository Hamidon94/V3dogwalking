import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/dogwalking-logo.png" alt="DogWalking" className="w-12 h-12 mr-3" />
              <span className="text-2xl font-bold text-blue-600">DogWalking</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Le plus grand réseau mondial de promeneurs certifiés et promeneurs de chiens 5 étoiles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services avec photos et arguments */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">🚶</span>
                </div>
                <div>
                  <a href="/#services" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                    Promenade de chien
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Exercice quotidien personnalisé</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">🏠</span>
                </div>
                <div>
                  <a href="/#services" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                    Hébergement
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Séjour confortable chez l'habitant</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">🏡</span>
                </div>
                <div>
                  <a href="/#services" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                    Garde à domicile
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Surveillance 24h/24 chez vous</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">🚪</span>
                </div>
                <div>
                  <a href="/#services" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                    Visites à domicile
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Visites courtes et régulières</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">🎾</span>
                </div>
                <div>
                  <a href="/#services" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                    Garderie pour chien
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Socialisation et jeux en groupe</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="mr-2">📞</span>
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="mr-2">🛡️</span>
                  Sécurité
                </Link>
              </li>
              <li className="pt-2">
                <div className="text-gray-600 text-sm">
                  <div className="flex items-center mb-1">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <span>contact@dogwalking.fr</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Paris, France</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
            
            {/* Section Témoignages */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Témoignages</h4>
              <div className="text-xs text-gray-600">
                <p className="mb-2">"Service exceptionnel ! Mon chien adore ses promenades."</p>
                <p className="font-medium">- Marie, Paris</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 DogWalking. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">Trustpilot</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-blue-500">★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">24,000+ avis</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
