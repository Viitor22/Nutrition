import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {useLoginGoogleMutation, useLoginMutation} from "../services/api.ts"


const Login = () => {
    const [login] = useLoginMutation();
    const [loginGoogle] = useLoginGoogleMutation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await login(
                { email, senha: password }
            );

        if ('data' in result) {
            const { token } = result.data; 
            
            localStorage.setItem('authToken', token);
            navigate('/profile');

        } else if ('error' in result) {
            const errorObject = result.error;

            if (typeof errorObject === 'object' && errorObject !== null && 'status' in errorObject) {
                const httpStatus = errorObject.status; 
                
                console.error("Login falhou. Status HTTP:", httpStatus);
                
                if (httpStatus === 401) {
                    alert("Credenciais inválidas. Tente novamente.");
                } else {
                    alert("Erro no servidor. Código: " + httpStatus);
                }
            } else {
                console.error("Erro desconhecido na requisição:", errorObject);
            }
        }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        navigate('/profile');
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
                        <CardTitle className="text-2xl text-center">Bem-vindo de volta</CardTitle>
                        <CardDescription className="text-center">
                            Entre com suas credenciais para acessar sua conta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Senha</Label>
                                    <Link
                                        to="/recuperar-senha"
                                        className="text-sm text-primary hover:underline"
                                    >
                                        Esqueceu a senha?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full" size="lg">
                                Entrar
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
                                    Ou continue com
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 w-full">
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginError}
                                useOneTap
                                theme="outline"
                                width="100%"
                            />
                        </div>
                        <p className="text-center text-sm text-muted-foreground">
                            Não tem uma conta?{" "}
                            <Link to="/cadastro" className="text-primary hover:underline font-medium">
                                Cadastre-se
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </main>

            <Footer />
        </div>
    );
};

export default Login;