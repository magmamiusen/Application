import { useEffect, useState } from 'react';
import style from '../../styles/content/Main.module.scss';
import { dataBase } from './config';
import { motion } from 'framer-motion';

const Special = () => {
    const [ recipes, setRecipes ] = useState([]);

    useEffect( ()=> {
        //funcion para guardar la lista de datos que obtenemos
        const listGet = async () => {
            const list = await dataBase.collection('recipes')
            .orderBy('name')
            .limit(3)
            .get()

            //Asignacion de la lista dentro de nuestro array
            setRecipes(list.docs.map(doc => doc.data()));
        };

        //Inicializacion de la funcion
        listGet();
    });

    return (
        <motion.section 
            className={style.special} 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
                delay: 1.4,
                duration: 0
            }}
        >
            {recipes.map(doc => {
                return (
                    <a key={recipes.indexOf(doc)} >
                        <div style={{backgroundImage: `linear-gradient(to bottom, transparent, rgb(0, 0, 0)),url(${doc.image})`}} >
                            <h1>{doc.name}</h1>
                        </div>
                    </a>
                );
            })}
        </motion.section>
    );
};

export default Special;