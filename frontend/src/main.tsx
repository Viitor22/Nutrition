import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css";

const googleClientId = "888119959672-h1vghebt44m1n783m8b2ncp596o0fu11.apps.googleusercontent.com";

createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={googleClientId}>
        <App />
    </GoogleOAuthProvider>
);
