import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/loaders/Loader.tsx";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";    

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { User, Mail, Phone, MapPin, Edit, Target, TrendingUp, Award, Calendar } from "lucide-react";
import {useGetProfileQuery, useUpdateProfileMutation, useDeleteProfileMutation} from "../services/api.ts"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '' });

  const {data: users, isLoading, isError} = useGetProfileQuery();
  const [update, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const navigate = useNavigate();

  const nutritionGoals = {
    weight: { current: 68, goal: 65, unit: "kg" },
    calories: { current: 1800, goal: 2000, unit: "kcal" },
    protein: { current: 120, goal: 150, unit: "g" },
    water: { current: 2.5, goal: 3, unit: "L" },
  };

  const achievements = [
    { id: 1, title: "7 Dias Consecutivos", icon: Award, color: "text-accent" },
    { id: 2, title: "Meta de Proteína", icon: Target, color: "text-primary" },
    { id: 3, title: "10 Receitas Salvas", icon: TrendingUp, color: "text-secondary" },
  ];

  useEffect(() => {
    if (isError) {
      navigate("/login", { replace: true });
    }
  }, [isError, navigate]);

  useEffect(() => {
        if (users) {
            setFormData({
                nome: users.nome,
                email: users.email,
            });
        }
    }, [users]);

  if(isLoading){
    return <Loader></Loader>
  };

  if (!users) return <Loader />;

  const userId = users.id || localStorage.getItem('userId'); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
  const handleUpdate = async (e) => {
      e.preventDefault();
          
      if (!userId) {
        console.error("ID do usuário não encontrado para atualização.");
          return;
      }
  
      try {
        const response = await update({
          id: userId,
          body: { 
            nome: formData.nome,
            email: formData.email 
          }
        }).unwrap();
  
        console.log("Atualização bem-sucedida:", response);
        alert("Perfil atualizado!");
        setIsEditing(false);
  
      } catch (err) {
        console.error("Falha na atualização:", err.data ? err.data.message : "Erro desconhecido");
        alert("Erro ao salvar perfil.");
      }
  };

  const userData = {
    name: users.nome,
    email: users.email,
    phone: "83 991759887",
    location: "Campina Grande, Paraíba",
    avatar: "",
    memberSince: "Janeiro de 2024",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-foreground">{userData.name}</h1>
                    <Badge variant="secondary" className="w-fit mx-auto md:mx-0">
                      <Calendar className="h-3 w-3 mr-1" />
                      Membro desde {userData.memberSince}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{userData.phone}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{userData.location}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant={isEditing ? "outline" : "default"}
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancelar" : "Editar Perfil"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="text-center">
                <CardContent className="pt-6">
                  <achievement.icon className={`h-8 w-8 mx-auto mb-2 ${achievement.color}`} />
                  <p className="font-semibold text-foreground">{achievement.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs Content */}
          <Tabs defaultValue="goals" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="goals">Metas Nutricionais</TabsTrigger>
              <TabsTrigger value="info">Informações Pessoais</TabsTrigger>
            </TabsList>

            <TabsContent value="goals" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Progresso das Metas</CardTitle>
                  <CardDescription>
                    Acompanhe seu progresso diário em relação às suas metas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Weight */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Peso</Label>
                      <span className="text-sm text-muted-foreground">
                        {nutritionGoals.weight.current}{nutritionGoals.weight.unit} / {nutritionGoals.weight.goal}{nutritionGoals.weight.unit}
                      </span>
                    </div>
                    <Progress value={(nutritionGoals.weight.current / nutritionGoals.weight.goal) * 100} />
                  </div>

                  {/* Calories */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Calorias Diárias</Label>
                      <span className="text-sm text-muted-foreground">
                        {nutritionGoals.calories.current}{nutritionGoals.calories.unit} / {nutritionGoals.calories.goal}{nutritionGoals.calories.unit}
                      </span>
                    </div>
                    <Progress value={(nutritionGoals.calories.current / nutritionGoals.calories.goal) * 100} />
                  </div>

                  {/* Protein */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Proteína Diária</Label>
                      <span className="text-sm text-muted-foreground">
                        {nutritionGoals.protein.current}{nutritionGoals.protein.unit} / {nutritionGoals.protein.goal}{nutritionGoals.protein.unit}
                      </span>
                    </div>
                    <Progress value={(nutritionGoals.protein.current / nutritionGoals.protein.goal) * 100} />
                  </div>

                  {/* Water */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Hidratação</Label>
                      <span className="text-sm text-muted-foreground">
                        {nutritionGoals.water.current}{nutritionGoals.water.unit} / {nutritionGoals.water.goal}{nutritionGoals.water.unit}
                      </span>
                    </div>
                    <Progress value={(nutritionGoals.water.current / nutritionGoals.water.goal) * 100} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>
                    {isEditing ? "Edite suas informações pessoais" : "Suas informações pessoais"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      <User className="h-4 w-4 inline mr-2" />
                      Nome Completo
                    </Label>
                    <Input 
                      id="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="h-4 w-4 inline mr-2" />
                      E-mail
                    </Label>
                    <Input 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Telefone
                    </Label>
                    <Input 
                      id="phone" 
                      defaultValue={userData.phone}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">
                      <MapPin className="h-4 w-4 inline mr-2" />
                      Localização
                    </Label>
                    <Input 
                      id="location" 
                      defaultValue={userData.location}
                      disabled={!isEditing}
                    />
                  </div>

                  {isEditing && (
                    <Button 
                      type="button"
                      className="w-full bg-gradient-primary hover:opacity-90" 
                      disabled={isUpdating}
                      onClick={handleUpdate}
                    >
                    {isUpdating ? "Salvando..." : "Salvar Alterações"}
                    </Button>
                    )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;