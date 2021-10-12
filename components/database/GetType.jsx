import { useState, useEffect } from 'react';
import { dataBase } from './config';
import style from '../../styles/database/GetType.module.scss';
import { motion } from 'framer-motion';

const GetType = props => {
    
    const [ recipes, setRecipes ] = useState([]);

    useEffect( () => {
            
        //funcion para guardar la lista de datos que obtenemos
        const listGet = async () => {
            const list = await dataBase.collection('recipes')
            .where('type', '==', props.type)
            .get()

            //Asignacion de la lista dentro de nuestro array
            setRecipes(list.docs.map(doc => doc.data()));
        };

        //Inicializacion de la funcion
        listGet();
    }, [props.type]);

    return (
        <section className={style.wrapper} >
            {recipes.map(doc => {

                return (
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            duration: 0,
                            delay: '1.' + recipes.indexOf(doc) + 2
                        }}
                        style={{backgroundImage: `url(${doc.image})`}} 
                        key={recipes.indexOf(doc)}
                    ></motion.div>
                );
            })}
        </section>
    );
};

export default GetType;