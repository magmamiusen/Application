//Pagina de llegada del usuario.

//Importaciones de componentes para iniciar la autenticacion.
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../components/auth/Login";
import Initial from "../components/auth/Initial";

//Componente padre para redirigir a Auth0 y mostrar contenido de recepy.
const Index = () => {
  return (
    <Auth0Provider 
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN_URL} 
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID} 
      redirectUri="application-pink.vercel.app/" 
    >
      <div>
        <LoginButton />
        <Initial />
      </div>
    </Auth0Provider>
  );
};

//Exportacion del componente Index
export default Index;