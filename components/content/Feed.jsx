//Importacion de los componentes principales.
import Head from 'next/head';
import Add from '../database/Add';
import LogoutButton from '../auth/Logout';
import GeneralGet from '../database/GeneralGet';

//Componente padre para mostrar el contenido de la pagina.
const Feed = () => {
    return (
        <div>
            {/* Componente Head para los meta datos de la pagina principal */}
            <Head>
                {/* Titulo de la pagina */}
                <title>
                    Principal - Recepy
                </title>

                {/* Meta datos de la pagina */}
                <meta 
                    name="description" 
                    content="Pagina principal de Recepy" 
                />
                <meta 
                    name="keywords" 
                    content="Comida, Recetas, ¿Como?, red social, red, cocina, gastronomia, proyecto, aplicacion, sena, nextjs, auth0, vercel, sass, pagina, cultura"
                />
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1.0" 
                />

                {/* Favicon de la pagina */}
                <link 
                    rel="icon" 
                    href="/favicon.ico" 
                />
            </Head>

            {/* Contenido principal de la pagina */}
            <main>
                <GeneralGet type="Pasteleria" />
            </main>
        </div>
    );
};

//Exportacion del componente Feed.
export default Feed;