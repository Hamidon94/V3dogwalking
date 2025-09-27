import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Home, Heart, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import dogWalkingImage from "@/assets/dog-walking.jpg";
import dogBoardingImage from "@/assets/dog-boarding.jpg";

const Services = () => {
  const services = [
    {
      id: "boarding",
      title: "Hébergement",
      subtitle: "chez le pet sitter",
      description: "Votre animal reste dans le foyer chaleureux de votre pet sitter. Il sera traité comme un membre de la famille dans un environnement confortable.",
      icon: <Home className="w-8 h-8" />,
      image: dogBoardingImage,
      link: "/services/boarding",
      features: ["Hébergement familial", "Attention 24h/24", "Mises à jour quotidiennes", "Environnement sécurisé"]
    },
    {
      id: "house-sitting", 
      title: "Garde à domicile",
      subtitle: "chez vous",
      description: "Votre pet sitter s'occupe de vos animaux et de votre maison. Vos animaux recevront toute l'attention dont ils ont besoin dans le confort de leur foyer.",
      icon: <Heart className="w-8 h-8" />,
      image: dogBoardingImage,
      link: "/services/house-sitting",
      features: ["À votre domicile", "Surveillance de la maison", "Routine préservée", "Stress réduit"]
    },
    {
      id: "dog-walking",
      title: "Promenade de chien", 
      subtitle: "dans votre quartier",
      description: "Votre chien fait une promenade dans votre quartier. Parfait pour les journées chargées et les chiens ayant de l'énergie supplémentaire à brûler.",
      icon: <MapPin className="w-8 h-8" />,
      image: dogWalkingImage,
      link: "/services/dog-walking",
      features: ["Promenades locales", "Exercice quotidien", "Horaires flexibles", "Photos incluses"]
    },
    {
      id: "doggy-daycare",
      title: "Garderie pour chien",
      subtitle: "chez le pet sitter", 
      description: "Votre chien passe la journée chez votre pet sitter. Il joue et socialise dans un environnement sûr et supervisé.",
      icon: <Users className="w-8 h-8" />,
      image: dogBoardingImage,
      link: "/services/doggy-daycare",
      features: ["Socialisation", "Jeux supervisés", "Exercice en groupe", "Surveillance experte"]
    },
    {
      id: "drop-in-visits",
      title: "Visites à domicile",
      subtitle: "visites à votre domicile",
      description: "Des visites courtes chez vous pour nourrir, promener et jouer avec vos animaux. Parfait pour les animaux qui préfèrent rester à la maison.",
      icon: <Clock className="w-8 h-8" />,
      image: dogWalkingImage, 
      link: "/services/drop-in-visits",
      features: ["Visites flexibles", "À votre domicile", "Soins personnalisés", "Durée adaptable"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-rover-green/10 to-rover-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nos Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Des services de garde d'animaux adaptés à tous vos besoins. Du simple dog-sitting aux séjours prolongés, trouvez la solution parfaite pour votre compagnon.
              </p>
              
              <Link to="/search">
                <Button className="rover-button-secondary px-8 py-4 text-lg">
                  Commencer votre recherche
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-rover-green">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                        <p className="text-rover-green font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-rover-green rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={service.link}>
                      <Button className="rover-button-primary">
                        En savoir plus sur {service.title.toLowerCase()}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-rover-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quel service vous convient le mieux ?
              </h2>
              <p className="text-xl text-gray-600">
                Trouvez le service parfait selon vos besoins et ceux de votre animal
              </p>
            </div>

            <div className="rover-card p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Service</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Durée</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Lieu</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Prix moyen</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">Hébergement</div>
                        <div className="text-sm text-gray-500">chez le pet sitter</div>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700">1+ nuits</td>
                      <td className="py-4 px-4 text-center text-gray-700">Chez le pet sitter</td>
                      <td className="py-4 px-4 text-center font-semibold text-rover-green">25-40€/nuit</td>
                      <td className="py-4 px-4 text-center text-gray-700">Vacances, voyages</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">Garde à domicile</div>
                        <div className="text-sm text-gray-500">chez vous</div>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700">1+ nuits</td>
                      <td className="py-4 px-4 text-center text-gray-700">Votre domicile</td>
                      <td className="py-4 px-4 text-center font-semibold text-rover-green">40-60€/nuit</td>
                      <td className="py-4 px-4 text-center text-gray-700">Animaux anxieux</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">Promenade</div>
                        <div className="text-sm text-gray-500">dans votre quartier</div>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700">30-60 min</td>
                      <td className="py-4 px-4 text-center text-gray-700">Extérieur</td>
                      <td className="py-4 px-4 text-center font-semibold text-rover-green">15-25€/promenade</td>
                      <td className="py-4 px-4 text-center text-gray-700">Journées chargées</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">Garderie</div>
                        <div className="text-sm text-gray-500">chez le pet sitter</div>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700">Journée</td>
                      <td className="py-4 px-4 text-center text-gray-700">Chez le pet sitter</td>
                      <td className="py-4 px-4 text-center font-semibold text-rover-green">20-35€/jour</td>
                      <td className="py-4 px-4 text-center text-gray-700">Socialisation</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">Visites</div>
                        <div className="text-sm text-gray-500">à votre domicile</div>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700">30-60 min</td>
                      <td className="py-4 px-4 text-center text-gray-700">Votre domicile</td>
                      <td className="py-4 px-4 text-center font-semibold text-rover-green">15-20€/visite</td>
                      <td className="py-4 px-4 text-center text-gray-700">Chats, courtes absences</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 rover-bg-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à trouver le service parfait ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Commencez votre recherche et trouvez le pet sitter idéal près de chez vous
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button className="rover-button-primary bg-white text-rover-green hover:bg-gray-100 px-8 py-4 text-lg">
                  Trouver un pet sitter
                </Button>
              </Link>
              <Link to="/become-sitter">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rover-green px-8 py-4 text-lg">
                  Devenir pet sitter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;