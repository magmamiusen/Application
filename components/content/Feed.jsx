//Importacion de los componentes principales.
import Head from 'next/head';
import Add from '../database/Add';
import LogoutButton from '../auth/Logout';
import GeneralGet from '../database/GeneralGet';
import Link from 'next/link';
import style from '../../styles/content/Feed.module.scss';
import { motion } from 'framer-motion';

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
                <section className={style.bar} ></section>

                {/* Contenedor de los bloques de enlace */}
                <section className={style.wrapper} >

                    {/* Enlace a la sesion de 'Reposteria' */}
                    <Link href="#" >
                        <a className={style.item} >
                            🎂
                        </a>
                    </Link>

                    {/* Enlace a la sesion de 'vegetariana' */}
                    <Link href="#" >
                        <a className={style.item} >
                            🍅
                        </a>
                    </Link>

                    {/* Enlace a */}
                    <Link href="#" >
                        <a className={style.item} >
                            🥩
                        </a>
                    </Link>

                    {/* Enlace a */}
                    <Link href="#" >
                        <a className={style.item} >
                            🍽️
                        </a>
                    </Link>
                </section>
                <GeneralGet type="Pasteleria" />
            </main>
        </div>
    );
};

//Exportacion del componente Feed.
export default Feed;