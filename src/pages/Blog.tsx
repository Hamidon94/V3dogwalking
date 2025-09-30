import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, Heart, Share2, BookOpen } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "Comment choisir le bon promeneur pour votre chien",
      excerpt: "Découvrez les critères essentiels pour sélectionner un promeneur de confiance qui prendra soin de votre compagnon à quatre pattes.",
      content: "Choisir un promeneur pour votre chien est une décision importante qui nécessite une réflexion approfondie. Votre animal de compagnie mérite les meilleurs soins, et il est essentiel de trouver une personne de confiance qui comprendra ses besoins spécifiques.\n\nLa première étape consiste à vérifier les références et l'expérience du promeneur. Un bon professionnel devrait avoir une formation en comportement animal et des références vérifiables d'autres propriétaires d'animaux. N'hésitez pas à demander des témoignages et à contacter d'anciens clients pour avoir leur avis.\n\nLa compatibilité entre le promeneur et votre chien est également cruciale. Organisez une rencontre préliminaire pour observer comment ils interagissent ensemble. Un bon promeneur saura adapter son approche au tempérament de votre animal et respecter ses limites.\n\nEnfin, assurez-vous que le promeneur dispose d'une assurance responsabilité civile et qu'il connaît les premiers secours pour animaux. Ces éléments garantissent la sécurité de votre compagnon pendant les promenades.",
      author: "Dr. Marie Dubois",
      date: "2024-09-25",
      readTime: "5 min",
      category: "conseils",
      image: "/dog-walking.jpg",
      tags: ["promeneur", "sécurité", "conseils"]
    },
    {
      id: 2,
      title: "Les bienfaits de la promenade quotidienne pour votre chien",
      excerpt: "Explorez les avantages physiques et mentaux des promenades régulières pour le bien-être de votre animal de compagnie.",
      content: "La promenade quotidienne représente bien plus qu'un simple exercice physique pour votre chien. Elle constitue un élément fondamental de son équilibre physique et mental, contribuant significativement à sa qualité de vie.\n\nSur le plan physique, les promenades régulières permettent de maintenir un poids santé et de renforcer le système cardiovasculaire de votre animal. L'exercice aide également à prévenir l'arthrite et autres problèmes articulaires, particulièrement importants chez les chiens âgés.\n\nL'aspect mental n'est pas à négliger. Les promenades offrent une stimulation sensorielle essentielle grâce aux nouvelles odeurs, sons et environnements rencontrés. Cette stimulation aide à prévenir l'ennui et les comportements destructeurs qui peuvent en résulter.\n\nLa socialisation est un autre bénéfice majeur. Rencontrer d'autres chiens et personnes pendant les promenades aide votre animal à développer ses compétences sociales et à réduire l'anxiété dans de nouvelles situations.",
      author: "Vétérinaire Pierre Martin",
      date: "2024-09-20",
      readTime: "4 min",
      category: "santé",
      image: "/hero-pets.jpg",
      tags: ["santé", "exercice", "bien-être"]
    },
    {
      id: 3,
      title: "Préparer votre chien pour sa première garde à domicile",
      excerpt: "Guide complet pour préparer votre animal à accueillir un promeneur certifié et assurer une expérience positive pour tous.",
      content: "La première expérience de garde à domicile peut être stressante tant pour vous que pour votre chien. Une préparation adéquate est la clé d'une expérience réussie qui bénéficiera à tous les participants.\n\nCommencez par habituer progressivement votre chien à la présence d'étrangers dans votre domicile. Invitez le promeneur certifié pour une ou plusieurs visites de familiarisation avant la garde proprement dite. Ces rencontres permettront à votre animal de s'habituer à la nouvelle personne et de créer un lien de confiance.\n\nPréparez un dossier détaillé contenant toutes les informations importantes : habitudes alimentaires, horaires de promenade, médicaments éventuels, coordonnées du vétérinaire, et numéros d'urgence. Plus le promeneur certifié sera informé, mieux il pourra s'occuper de votre compagnon.\n\nLaissez des objets familiers comme son jouet préféré ou une couverture avec votre odeur. Ces éléments rassurants aideront votre chien à mieux gérer votre absence et à se sentir en sécurité avec le promeneur certifié.",
      author: "Sophie Leroy, Comportementaliste",
      date: "2024-09-15",
      readTime: "6 min",
      category: "garde",
      image: "/dog-boarding.jpg",
      tags: ["garde", "préparation", "stress"]
    },
    {
      id: 4,
      title: "Assurance et sécurité : ce qu'il faut savoir",
      excerpt: "Tout ce que vous devez savoir sur les assurances et mesures de sécurité dans le domaine des services pour animaux.",
      content: "La sécurité de votre animal de compagnie doit être la priorité absolue lors du choix d'un service de garde ou de promenade. Comprendre les aspects d'assurance et de sécurité vous aidera à prendre des décisions éclairées.\n\nTout professionnel sérieux devrait disposer d'une assurance responsabilité civile professionnelle couvrant les dommages potentiels causés par ou à votre animal. Cette assurance protège à la fois le prestataire et vous-même en cas d'incident.\n\nVérifiez également que le service dispose de protocoles de sécurité clairs : procédures d'urgence, formation aux premiers secours pour animaux, et système de suivi en temps réel des promenades. Ces éléments témoignent du professionnalisme et de l'engagement envers la sécurité.\n\nN'hésitez pas à demander des preuves d'assurance et à vous renseigner sur les procédures en cas d'urgence. Un prestataire transparent n'hésitera pas à partager ces informations cruciales pour votre tranquillité d'esprit.",
      author: "Équipe DogWalking",
      date: "2024-09-10",
      readTime: "7 min",
      category: "sécurité",
      image: "/hero-pets.jpg",
      tags: ["assurance", "sécurité", "urgence"]
    }
  ];

  const categories = [
    { id: "all", name: "Tous les articles", count: articles.length },
    { id: "conseils", name: "Conseils", count: articles.filter(a => a.category === "conseils").length },
    { id: "santé", name: "Santé", count: articles.filter(a => a.category === "santé").length },
    { id: "garde", name: "Garde", count: articles.filter(a => a.category === "garde").length },
    { id: "sécurité", name: "Sécurité", count: articles.filter(a => a.category === "sécurité").length }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog DogWalking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos conseils d'experts, guides pratiques et actualités pour prendre soin de vos compagnons à quatre pattes
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-blue-200 focus:border-blue-500"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 
                  "bg-blue-600 hover:bg-blue-700" : 
                  "border-blue-200 text-blue-600 hover:bg-blue-50"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-blue-100 rounded-t-lg flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-blue-600" />
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-blue-200 text-blue-600">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-gray-500 hover:text-red-500">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-500">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun article trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <Card className="mt-12 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="text-center py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Restez informé des derniers conseils
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Recevez nos meilleurs articles et conseils d'experts directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Votre adresse email"
                className="flex-1 border-blue-200 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                S'abonner
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
