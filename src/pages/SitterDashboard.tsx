import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Calendar, 
  MapPin, 
  Star, 
  Heart, 
  Settings, 
  Bell, 
  CreditCard, 
  Users, 
  PawPrint,
  CheckCircle,
  AlertCircle,
  Upload,
  FileText,
  Shield
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SitterDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [profileCompletion, setProfileCompletion] = useState(65);
  const [isVerified, setIsVerified] = useState(false);

  const verificationSteps = [
    { id: 1, title: "Photo de profil", completed: true, required: true },
    { id: 2, title: "Informations personnelles", completed: true, required: true },
    { id: 3, title: "Vérification d'identité", completed: false, required: true },
    { id: 4, title: "Références", completed: false, required: true },
    { id: 5, title: "Assurance responsabilité civile", completed: true, required: true },
    { id: 6, title: "Formation premiers secours", completed: false, required: false }
  ];

  const upcomingBookings = [
    {
      id: 1,
      owner: "Sophie M.",
      service: "Promenade de chien",
      date: "Aujourd'hui à 16h00",
      pet: "Bella",
      status: "confirmé",
      price: "25€",
      location: "Parc des Buttes-Chaumont"
    },
    {
      id: 2,
      owner: "Thomas R.",
      service: "Garde à domicile",
      date: "20-22 Oct 2024",
      pet: "Rex & Mia",
      status: "en_attente",
      price: "180€",
      location: "15ème arrondissement"
    }
  ];

  const earnings = {
    thisMonth: 1250,
    lastMonth: 980,
    pending: 320,
    total: 5670
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord Pet Sitter</h1>
            <p className="text-gray-600">Gérez vos services et vos clients</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </div>

        {/* Profile Verification Alert */}
        {!isVerified && (
          <Alert className="mb-6 border-blue-200 bg-blue-50">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <div className="flex items-center justify-between">
                <div>
                  <strong>Profil en cours de validation</strong> - Complétez votre profil pour recevoir plus de demandes
                  <div className="mt-2">
                    <Progress value={profileCompletion} className="w-48" />
                    <span className="text-sm text-blue-600">{profileCompletion}% complété</span>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Compléter le profil
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-blue-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Aperçu</TabsTrigger>
            <TabsTrigger value="bookings" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Réservations</TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Revenus</TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Profil</TabsTrigger>
            <TabsTrigger value="verification" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Validation</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Réservations ce mois</CardTitle>
                  <Calendar className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <p className="text-xs text-gray-600">+3 depuis le mois dernier</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Note moyenne</CardTitle>
                  <Star className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <p className="text-xs text-gray-600">Sur 47 avis</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Revenus ce mois</CardTitle>
                  <CreditCard className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{earnings.thisMonth}€</div>
                  <p className="text-xs text-gray-600">+{earnings.thisMonth - earnings.lastMonth}€ vs mois dernier</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Clients réguliers</CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <p className="text-xs text-gray-600">Clients fidèles</p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Bookings */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Prochaines réservations</CardTitle>
                <CardDescription className="text-gray-600">Vos prochains rendez-vous avec vos clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border border-blue-200 rounded-lg bg-white">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <PawPrint className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{booking.service}</p>
                          <p className="text-sm text-gray-600">Pour {booking.owner} - {booking.pet}</p>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {booking.location}
                          </p>
                          <p className="text-sm text-gray-600">{booking.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={booking.status === "confirmé" ? "default" : "secondary"} 
                               className={booking.status === "confirmé" ? "bg-blue-600" : ""}>
                          {booking.status === "confirmé" ? "Confirmé" : "En attente"}
                        </Badge>
                        <p className="text-sm font-medium mt-1 text-gray-900">{booking.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Validation du profil</CardTitle>
                <CardDescription className="text-gray-600">
                  Complétez ces étapes pour valider votre profil et recevoir plus de demandes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {verificationSteps.map((step) => (
                    <div key={step.id} className="flex items-center justify-between p-4 border border-blue-200 rounded-lg bg-white">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <div className="w-3 h-3 bg-gray-400 rounded-full" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{step.title}</p>
                          {step.required && (
                            <Badge variant="outline" className="text-xs border-red-200 text-red-600">
                              Obligatoire
                            </Badge>
                          )}
                        </div>
                      </div>
                      {!step.completed && (
                        <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                          {step.id === 3 ? "Télécharger pièce d'identité" : 
                           step.id === 4 ? "Ajouter références" :
                           step.id === 6 ? "Suivre formation" : "Compléter"}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-blue-900">Avantages de la validation</h4>
                  </div>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Badge "Profil vérifié" sur votre profil</li>
                    <li>• Priorité dans les résultats de recherche</li>
                    <li>• Accès aux réservations premium</li>
                    <li>• Augmentation des demandes de +40% en moyenne</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Revenus en attente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{earnings.pending}€</div>
                  <p className="text-sm text-gray-600">Disponible dans 2-3 jours</p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Ce mois</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{earnings.thisMonth}€</div>
                  <p className="text-sm text-green-600">+27% vs mois dernier</p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Total gagné</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{earnings.total}€</div>
                  <p className="text-sm text-gray-600">Depuis le début</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Toutes les réservations</CardTitle>
                <CardDescription className="text-gray-600">Historique et réservations à venir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PawPrint className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Vos réservations apparaîtront ici</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Profil public</CardTitle>
                <CardDescription className="text-gray-600">Ce que voient vos clients potentiels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Gérez votre profil public</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Modifier le profil</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default SitterDashboard;
