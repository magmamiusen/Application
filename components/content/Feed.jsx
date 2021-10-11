//Importacion de los componentes principales.
import Head from 'next/head';
import Add from '../database/Add';
import LogoutButton from '../auth/Logout';
import GeneralGet from '../database/GeneralGet';
import Link from 'next/link';
import style from '../../styles/content/Feed.module.scss';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';

//Componente padre para mostrar el contenido de la pagina.
const Feed = () => {
    const { user } = useAuth0();

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
                <section className={style.navbar} >
                    <motion.a href="#" >
                        +
                    </motion.a>
                    <motion.a href="#" >
                        ?
                    </motion.a>
                    <motion.a 
                        href="#"
                        style={{backgroundImage: `url(${user.picture})`}}
                    >
                    </motion.a>
                </section>

                {/* Contenedor de los bloques de enlace */}
                <section className={style.wrapper} >

                    {/* Enlace a la sesion de 'Reposteria' */}
                    <Link href="#" >
                        <motion.a 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1,
                                duration: 0
                            }}
                            className={ style.item }
                            title="Reposteria"
                        >
                            🎂
                        </motion.a>
                    </Link>

                    {/* Enlace a la sesion de 'vegetariana' */}
                    <Link href="#" >
                        <motion.a 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.2, 
                                duration: 0
                            }}
                            className={ style.item }
                            title="Parrilla"
                        >
                            🥕
                        </motion.a>
                    </Link>

                    {/* Enlace a la sesion de 'vegetariana' */}
                    <Link href="#" >
                        <motion.a 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.4 ,
                                duration: 0
                            }}
                            className={ style.item }
                            title="Parrilla"
                        >
                            🥩
                        </motion.a>
                    </Link>

                    {/* Enlace a la sesion de 'restaurante' */}
                    <Link href="#" >
                        <motion.a 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.6,
                                duration: 0
                            }}
                            className={ style.item }
                            title="Restaurante"
                        >
                            🍽️
                        </motion.a>
                    </Link>
                </section>
                <GeneralGet isGeneral={true} />
            </main>
        </div>
    );
};

//Exportacion del componente Feed.
export default Feed;