//Importacion de las funciones principales.
import { useState } from 'react';
import { dataBase } from './config';
import { motion } from 'framer-motion';

//Componente para obtener los datos desde firebase.
const Get = props => {

    //Declaracion del estado para almacenar en forma de array las recetas que estan almacenadas en firebase
    const [ recipes, setRecipes ] = useState([]);

    //Funcion para obtener los datos desde firebase.
    const getDocs = () => {

        //Ruta y condiciones para obtener los datos desde firebase firestore
        dataBase.collection('recipes')
        .where('type', '==', props.type)
        .get()
        .then( query => {
            
            //Una vez los datos han sido obtenidos, cada uno se guardara en el array de 'recipes'. 
            query.forEach( doc => {
                setRecipes( recipes => [...recipes, doc.data()]);
            });
        });
    };

    //Elementos donde se mapearan los datos obtenidos de firebase firestore.
    return (
        <div>
            {/* Boton para obtener los datos desde firebase */}
            <button onClick={() => getDocs()} >
                obtener datos de {props.type}
            </button>

            {/* Seccion donde se mapearan los datos */}
            <section>
                {recipes.map(doc => {

                    //Por cada elemento del array, se devuelven un elemento a con la informacion.
                    return (
                        <a key={recipes.indexOf(doc)} >
                            <img src={doc.image} alt={doc.image} />
                            <h1>{doc.name}</h1> 
                            <h5>{doc.author}</h5>
                        </a>
                    );
                })}
            </section>
        </div>
    );
};

//Exportacion del componente Get.
export default Get;