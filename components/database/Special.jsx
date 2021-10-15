//Importaciones de las funciones principales
import { 
    useEffect, 
    useState 
} from 'react';
import style from '../../styles/content/Main.module.scss';
import { dataBase } from './config';
import { motion } from 'framer-motion';
import styleModal from '../../styles/content/modalRecipe.module.scss';

//Componente 'special'
const Special = () => {

    //uso del estado para almacenar las recetas
    const [ recipes, setRecipes ] = useState([{ 
        name: '',
    },]);
    const [ index, setIndex ] = useState(0);

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

    //Contenedor donde se renderizaran las recetas destacadas
    return (
        <>
            <section 
                className={ style.special } 
            >
                {recipes.map( doc => {
                    return (
                        <a 
                            href="#open-modal3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.4,
                                duration: 0
                            }}
                            onClick={() => setIndex(recipes.indexOf(doc)) }
                            key={recipes.indexOf(doc)}
                            style={{ 
                                background: `linear-gradient(to bottom, transparent, rgb(0, 0, 0)), url(${doc.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <h1 className={style.title} >
                                {doc.name}
                            </h1>
                            <p className={style.text} >
                                {doc.description}
                            </p>
                        </a>
                    );
                })}
            </section>
            <div 
                id="open-modal3" 
                className={ styleModal.modalOpen }
            >
                <div>

                    {/* Boton para cerrar el formulario */}
                    <a 
                        href="#" 
                        title="Close" 
                    >
                        X
                    </a>
                    <section>
                        <h1>
                            "{recipes[index].name}"
                        </h1>
                        <video 
                            src={recipes[index].video} 
                            controls
                            className={ styleModal.video } 
                            alt={'video principal : ' + recipes[index].name}
                            title={'video principal : ' + recipes[index].name}
                        />
                        <h2>
                            Descripcion.
                        </h2>
                        <textarea value={recipes[index].description} readOnly />
                        <h2>
                            Ingredientes.
                        </h2>
                        <textarea value={recipes[index].ingredients} readOnly />
                        <h2>
                            Paso A Paso.  
                        </h2> 
                        <textarea value={recipes[index].howTo} readOnly />
                    </section>
                </div>
            </div>
        </>
    );
};

export default Special;