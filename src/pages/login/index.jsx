import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

import {LoginContainer} from "./style.ts";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Envio", { username, password });
    };

    const navigate = useNavigate();
    const routeHome = () => {
        navigate('/')
    }

    return (
        <LoginContainer>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-field">
                    <FaUser className="icon" />
                    <input
                        type="email"
                        placeholder='Digite seu e-mail'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-field">

                    <FaLock className="icon" />
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit" onClick={routeHome}>Submit</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
        </LoginContainer>
    );
};

export default Login;
