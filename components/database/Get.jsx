//Importacion de las funciones principales.
import { 
    useEffect,
    useState 
} from "react";
import { dataBase } from "./config";
import { motion } from "framer-motion";
import style from "../../styles/database/Get.module.scss";
import styleModal from "../../styles/content/modalRecipe.module.scss";

//Componente para obtener los datos desde firebase.
const GeneralGet = props => {

    //Declaracion del estado para almacenar en forma de array las recetas que estan almacenadas en firebase
    const [ recipes, setRecipes ] = useState([{ 
        name: "",
    },]);
    const [ index, setIndex ] = useState(0);

    //Uso del useEffect para hacer que los datos sean obtenidos una vez sea cargado el componente
    useEffect( () => {
            
        //funcion para guardar la lista de datos que obtenemos
        const listGet = async () => {
            const list = await dataBase.collection( "recipes" )
            .get()

            //Asignacion de la lista dentro de nuestro array
            setRecipes(list.docs.map(doc => doc.data()));
        };

        //Inicializacion de la funcion
        listGet();
    }, [props.type]);

    //Elementos donde se mapearan los datos obtenidos de firebase firestore.
    return (
        <div>

            {/* Seccion donde se mapearan los datos */}
            <section className={ style.wrapper } >
                {recipes.map(doc => {

                    //Por cada elemento del array, se devuelven un elemento a con la informacion.
                    return (
                        <>
                            <motion.a 
                                className={ style.item } 
                                key={ recipes.indexOf(doc) }
                                href="#open-modal2"
                                onClick={() => setIndex(recipes.indexOf(doc)) }
                            >
                                {/* Imagen de la receta */}
                                <img src={doc.image} alt={doc.name} className={style.image} />
            
                                {/* Contenido de la receta como nombre, autor y tipo */}
                                <div className={style.content} >
                                    <h1 title={doc.name} >
                                        {doc.name}
                                    </h1>
                                    <h3 title={doc.author} >
                                        {doc.author}
                                    </h3>
                                    <h3 title={doc.type} >
                                        {doc.type}
                                    </h3>
                                </div>
                            </motion.a>
                        </>
                    );
                })}
            </section>
            <div 
                id="open-modal2" 
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
                            alt={"video principal : " + recipes[index].name}
                            title={"video principal : " + recipes[index].name}
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
        </div>
    );
};

//Exportacion del componente Get.
export default GeneralGet;