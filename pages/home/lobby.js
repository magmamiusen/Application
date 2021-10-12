//Importacion de los componentes
import Initial from '../../components/auth/Initial';
import { Auth0Provider } from '@auth0/auth0-react';

//Componente lobby, donde se renderiza la toda nuestra pagina
const Lobby = () => {
    return (
        <Auth0Provider 
            domain="dev-dou8wmxc.us.auth0.com"
            clientId="OSpj6EyQBe7rD681JugQsNWIFVT76U48"
            redirectUri="http://localhost:3000/home/lobby" 
        >
            <Initial />
        </Auth0Provider>
    );
};

//Exportacion de el componente Lobby
export default Lobby;