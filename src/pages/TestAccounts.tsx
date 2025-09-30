import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, User, Shield, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const TestAccounts = () => {
  const testAccounts = [
    {
      type: 'admin',
      email: 'admin@dogwalking.fr',
      password: 'admin123',
      name: 'Admin DogWalking',
      description: 'Compte administrateur avec accès complet',
      icon: Shield,
      color: 'bg-red-100 text-red-600',
      dashboard: '/admin'
    },
    {
      type: 'sitter',
      email: 'marie.sitter@dogwalking.fr',
      password: 'sitter123',
      name: 'Marie Dupont (Pet Sitter)',
      description: 'Compte promeneur certifié avec dashboard de validation',
      icon: Heart,
      color: 'bg-blue-100 text-blue-600',
      dashboard: '/sitter-dashboard'
    },
    {
      type: 'owner',
      email: 'jean.owner@dogwalking.fr',
      password: 'owner123',
      name: 'Jean Martin (Propriétaire)',
      description: 'Compte propriétaire d\'animaux',
      icon: User,
      color: 'bg-green-100 text-green-600',
      dashboard: '/dashboard'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Comptes de Test - DogWalking
            </h1>
            <p className="text-gray-600 text-lg">
              Utilisez ces comptes pré-enregistrés pour tester toutes les fonctionnalités de l'application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testAccounts.map((account) => {
              const IconComponent = account.icon;
              return (
                <Card key={account.type} className="border-blue-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${account.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{account.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {account.type.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="mt-2">
                      {account.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm font-medium">Email:</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{account.email}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(account.email)}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm font-medium">Mot de passe:</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600 font-mono">{account.password}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(account.password)}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link to="/login" className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Se connecter
                        </Button>
                      </Link>
                      <Link to={account.dashboard} className="flex-1">
                        <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                          Dashboard
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Instructions de Test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fonctionnalités testables :</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Connexion et inscription</li>
                    <li>• Dashboards différenciés par type d'utilisateur</li>
                    <li>• Validation de profil pour promeneur certifiés</li>
                    <li>• Navigation complète</li>
                    <li>• Thème bleu et blanc</li>
                    <li>• Logo sans bordure</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parcours recommandé :</h3>
                  <ol className="text-sm text-gray-600 space-y-1">
                    <li>1. Tester la connexion avec chaque compte</li>
                    <li>2. Explorer les dashboards respectifs</li>
                    <li>3. Vérifier les liens de navigation</li>
                    <li>4. Tester l'inscription de nouveaux utilisateurs</li>
                    <li>5. Vérifier le processus de validation (promeneur certifiés)</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestAccounts;
