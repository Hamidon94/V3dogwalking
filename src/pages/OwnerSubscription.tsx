import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Clock, Heart, Zap } from "lucide-react";

const OwnerSubscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const plans = [
    {
      id: "basic",
      name: "Basique",
      price: "0€",
      period: "Gratuit",
      description: "Parfait pour commencer",
      features: [
        "Recherche de promeneurs certifiés",
        "Profil de base pour vos animaux",
        "Messagerie limitée (5 messages/mois)",
        "Support par email",
        "1 animal maximum"
      ],
      limitations: [
        "Pas de réservation directe",
        "Pas de suivi GPS",
        "Pas de photos en temps réel"
      ],
      color: "gray",
      popular: false
    },
    {
      id: "premium",
      name: "Premium",
      price: "9,99€",
      period: "par mois",
      description: "Le plus populaire pour les propriétaires actifs",
      features: [
        "Tout du plan Basique",
        "Réservations illimitées",
        "Suivi GPS en temps réel",
        "Photos et vidéos pendant les services",
        "Messagerie illimitée",
        "Support prioritaire 24/7",
        "Jusqu'à 3 animaux",
        "Historique détaillé des services",
        "Notifications push",
        "Annulation gratuite (24h avant)"
      ],
      limitations: [],
      color: "blue",
      popular: true
    },
    {
      id: "family",
      name: "Famille",
      price: "19,99€",
      period: "par mois",
      description: "Idéal pour les familles avec plusieurs animaux",
      features: [
        "Tout du plan Premium",
        "Animaux illimités",
        "Réductions sur les services (10%)",
        "Promeneurs certifiés VIP",
        "Assurance premium incluse",
        "Rapports vétérinaires",
        "Planification automatique",
        "Partage familial (jusqu'à 4 comptes)",
        "Concierge personnel",
        "Accès prioritaire aux nouveaux promeneurs"
      ],
      limitations: [],
      color: "purple",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Tous nos promeneurs sont vérifiés et assurés"
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Trouvez un promeneur à tout moment"
    },
    {
      icon: Heart,
      title: "Soins personnalisés",
      description: "Chaque animal reçoit une attention individuelle"
    },
    {
      icon: Zap,
      title: "Réservation instantanée",
      description: "Réservez en quelques clics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre abonnement
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accédez aux meilleurs promeneurs certifiés pour vos compagnons. 
            Commencez gratuitement ou choisissez un plan premium pour plus de fonctionnalités.
          </p>
        </div>

        {/* Plans de prix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedPlan === plan.id 
                  ? `ring-2 ring-${plan.color}-500 shadow-lg` 
                  : 'hover:shadow-md'
              } ${plan.popular ? 'scale-105' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Plus populaire
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-2">Limitations :</p>
                    <div className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0">×</span>
                          <span className="text-sm text-gray-500">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  className={`w-full mt-6 ${
                    plan.id === 'basic' 
                      ? 'bg-gray-600 hover:bg-gray-700' 
                      : plan.id === 'premium'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                  variant={selectedPlan === plan.id ? "default" : "outline"}
                >
                  {plan.id === 'basic' ? 'Commencer gratuitement' : 'Choisir ce plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Avantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi choisir DogWalking ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Questions fréquentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je changer de plan à tout moment ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. 
                Les changements prennent effet immédiatement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Y a-t-il un engagement ?
              </h3>
              <p className="text-gray-600">
                Non, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment 
                depuis votre tableau de bord.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Comment fonctionne l'assurance ?
              </h3>
              <p className="text-gray-600">
                Tous les services sont couverts par notre assurance DogWalkingProtect 
                jusqu'à 25 000€ pour les soins vétérinaires.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je essayer avant de m'abonner ?
              </h3>
              <p className="text-gray-600">
                Oui, commencez avec notre plan gratuit pour découvrir nos services, 
                puis passez à Premium quand vous êtes prêt.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            Commencer maintenant
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Aucune carte de crédit requise pour le plan gratuit
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerSubscription;
