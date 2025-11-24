import { useState } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {useLoginGoogleMutation, useSignUpMutation} from "../services/api.ts"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";


const SignUp = () => {
    const [cadastro] = useSignUpMutation();

        const [loginGoogle] = useLoginGoogleMutation();
        const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        cadastro({
            nome: formData.name,
            email: formData.email,
            senha: formData.password
        })
        navigate('/login');
    };

    const handleGoogleLoginSuccess = async (credentialResponse: CredentialResponse) => {
            const googleToken = credentialResponse.credential; 
    
            if (!googleToken) {
                handleGoogleLoginError();
                return;
            }
    
            try {
                const response = await loginGoogle(
                    { token: googleToken } // Objeto GoogleTokenDTO
                );
    
                const { token } = response.data;
    
                localStorage.setItem('authToken', token);
    
                navigate('/profile');
            } catch (error) {
                console.error("Erro ao validar login com Google no backend:", error);
            }
        };
    
        const handleGoogleLoginError = () => {
            console.error("Login com Google falhou");
        };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 container max-w-md mx-auto px-4 py-16 flex items-center justify-center">
                <Card className="w-full">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">Criar conta</CardTitle>
                        <CardDescription className="text-center">
                            Preencha os dados abaixo para criar sua conta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome completo</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="João Silva"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                                <Button type="submit" className="w-full" size="lg">
                                    Criar conta
                                </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">
                                    Ou cadastre-se com
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginError}
                                useOneTap
                                theme="outline"
                                width="100%"
                            />
                            {/* <Button variant="outline" type="button">
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                GitHub
                            </Button> */}
                        </div>
                        <p className="text-center text-sm text-muted-foreground">
                            Já tem uma conta?{" "}
                            <Link to="/login" className="text-primary hover:underline font-medium">
                                Entrar
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </main>

            <Footer />
        </div>
    );
};

export default SignUp;
