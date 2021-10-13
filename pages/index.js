//Pagina de llegada del usuario.

//Importaciones de componentes para iniciar la autenticacion.
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/auth/Login";
import Initial from "../components/auth/Initial";
import { useEffect } from "react";

//Componente padre para redirigir a Auth0 y mostrar contenido de recepy.
const Index = () => {
  return (
    <Auth0Provider 
      domain="dev-dou8wmxc.us.auth0.com"
      clientId="OSpj6EyQBe7rD681JugQsNWIFVT76U48"
      redirectUri="https://application-pink.vercel.app/home/lobby" 
    >
      <div> 
        <LoginButton />
      </div>
    </Auth0Provider>
  );
};

//Exportacion del componente Index
export default Index;