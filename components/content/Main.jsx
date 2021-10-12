//Importacion de los componentes principales.
import Head from 'next/head';
import LogoutButton from '../auth/Logout';
import Get from '../database/Get';
import Link from 'next/link';
import style from '../../styles/content/Main.module.scss';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import Special from '../database/Special';

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
                <motion.a 
                        href="#"
                        className={style.item}
                        title="Agrega una receta"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            delay: 1,
                            duration: 0
                        }}
                    >
                        +
                    </motion.a>
                    <motion.a 
                        href="#"
                        className={style.item}
                        title="Saber mas sobre recepy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            delay: 1.2,
                            duration: 0
                        }}
                    >
                        ?
                    </motion.a>
                    <motion.a 
                        title={user.name}
                        className={style.item}
                        href="#"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            delay: 1.4,
                            duration: 0
                        }}
                        style={{backgroundImage: `url(${user.picture})`}}
                    >
                    </motion.a>
                </section>
                <motion.h1 
                    className={style.title} 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        delay: 1.6,
                        duration: 0
                    }}
                >
                    Recetas Destacadas
                </motion.h1>
                <Special />
                <motion.h1 
                    className={style.title}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        delay: 1.6,
                        duration: 0
                    }}
                >
                    Tipos De Recetas
                </motion.h1>
                {/* Contenedor de los bloques de enlace */}
                <section className={style.wrapper} >

                    {/* Enlace a la sesion de 'Pasteleria' */}
                    <Link href="/home/pasteleria" >
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
                    <Link href="/home/vegetariano" >
                        <motion.a 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.2, 
                                duration: 0
                            }}
                            className={ style.item }
                            title="Vegetariano"
                        >
                            🥕
                        </motion.a>
                    </Link>

                    {/* Enlace a la sesion de 'vegetariana' */}
                    <Link href="/home/parrilla" >
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
                    <Link href="/home/otro" >
                        <motion.a 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.6,
                                duration: 0
                            }}
                            className={ style.item }
                            title="Otro"
                        >
                            🐱‍💻
                        </motion.a>
                    </Link>
                </section>
                <motion.h1 
                    className={style.title} 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        delay: 1.6,
                        duration: 0
                    }}
                >
                    Explorar Recetas
                </motion.h1>
                <Get />
                <LogoutButton />
            </main>
        </div>
    );
};

//Exportacion del componente Feed.
export default Feed;