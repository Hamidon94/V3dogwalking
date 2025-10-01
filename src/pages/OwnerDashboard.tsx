import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Star, Heart, MessageCircle, CreditCard, Settings, Plus, Dog } from "lucide-react";

const OwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Données simulées
  const upcomingBookings = [
    {
      id: 1,
      service: "Promenade de chien",
      sitter: "Marie L.",
      date: "2024-10-15",
      time: "14:00 - 15:00",
      pet: "Max",
      status: "confirmé",
      price: "25€"
    },
    {
      id: 2,
      service: "Garde à domicile",
      sitter: "Pierre M.",
      date: "2024-10-20",
      time: "09:00 - 18:00",
      pet: "Luna",
      status: "en attente",
      price: "45€"
    }
  ];

  const recentBookings = [
    {
      id: 3,
      service: "Hébergement",
      sitter: "Sophie D.",
      date: "2024-10-01",
      pet: "Max",
      status: "terminé",
      rating: 5,
      price: "42€"
    },
    {
      id: 4,
      service: "Promenade de chien",
      sitter: "Marie L.",
      date: "2024-09-28",
      pet: "Luna",
      status: "terminé",
      rating: 5,
      price: "25€"
    }
  ];

  const pets = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      age: "3 ans",
      size: "Grand",
      photo: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Border Collie",
      age: "2 ans",
      size: "Moyen",
      photo: "/api/placeholder/100/100"
    }
  ];

  const favoriteSitters = [
    {
      id: 1,
      name: "Marie L.",
      rating: 4.9,
      reviews: 127,
      location: "Paris 15ème",
      photo: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Sophie D.",
      rating: 5.0,
      reviews: 234,
      location: "Marseille 8ème",
      photo: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-600 mt-2">Gérez vos réservations et vos animaux</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="bookings">Réservations</TabsTrigger>
            <TabsTrigger value="pets">Mes animaux</TabsTrigger>
            <TabsTrigger value="favorites">Favoris</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            {/* Statistiques rapides */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Réservations actives</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">+1 depuis le mois dernier</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Promeneurs favoris</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Promeneurs de confiance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Dépenses ce mois</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142€</div>
                  <p className="text-xs text-muted-foreground">-12% par rapport au mois dernier</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5.0</div>
                  <p className="text-xs text-muted-foreground">Basé sur 8 évaluations</p>
                </CardContent>
              </Card>
            </div>

            {/* Prochaines réservations */}
            <Card>
              <CardHeader>
                <CardTitle>Prochaines réservations</CardTitle>
                <CardDescription>Vos services à venir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Dog className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{booking.service}</h4>
                          <p className="text-sm text-gray-600">avec {booking.sitter}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{booking.date}</span>
                            <Clock className="w-4 h-4" />
                            <span>{booking.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={booking.status === "confirmé" ? "default" : "secondary"}>
                          {booking.status}
                        </Badge>
                        <p className="text-sm font-medium mt-1">{booking.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Réservations */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mes réservations</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle réservation
              </Button>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Réservations à venir</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Dog className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">{booking.service}</h4>
                            <p className="text-sm text-gray-600">avec {booking.sitter} • {booking.pet}</p>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>{booking.date}</span>
                              <Clock className="w-4 h-4" />
                              <span>{booking.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={booking.status === "confirmé" ? "default" : "secondary"}>
                            {booking.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Contacter
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Dog className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">{booking.service}</h4>
                            <p className="text-sm text-gray-600">avec {booking.sitter} • {booking.pet}</p>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>{booking.date}</span>
                              <div className="flex items-center">
                                {[...Array(booking.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">Terminé</Badge>
                          <p className="text-sm font-medium mt-1">{booking.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Mes animaux */}
          <TabsContent value="pets" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mes animaux</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un animal
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pets.map((pet) => (
                <Card key={pet.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <Dog className="w-8 h-8 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{pet.name}</h3>
                        <p className="text-gray-600">{pet.breed}</p>
                        <p className="text-sm text-gray-500">{pet.age} • {pet.size}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Modifier
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Voir profil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Favoris */}
          <TabsContent value="favorites" className="space-y-6">
            <h2 className="text-2xl font-bold">Promeneurs favoris</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteSitters.map((sitter) => (
                <Card key={sitter.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-lg font-semibold">{sitter.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{sitter.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{sitter.rating} ({sitter.reviews} avis)</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{sitter.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" className="flex-1">
                        Contacter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profil */}
          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">Mon profil</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>Gérez vos informations de compte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Prénom</label>
                    <input className="w-full mt-1 p-2 border rounded-md" defaultValue="Jean" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Nom</label>
                    <input className="w-full mt-1 p-2 border rounded-md" defaultValue="Dupont" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input className="w-full mt-1 p-2 border rounded-md" defaultValue="jean.dupont@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium">Téléphone</label>
                  <input className="w-full mt-1 p-2 border rounded-md" defaultValue="+33 1 23 45 67 89" />
                </div>
                <div>
                  <label className="text-sm font-medium">Adresse</label>
                  <input className="w-full mt-1 p-2 border rounded-md" defaultValue="123 Rue de la Paix, 75001 Paris" />
                </div>
                <Button>Sauvegarder les modifications</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OwnerDashboard;
