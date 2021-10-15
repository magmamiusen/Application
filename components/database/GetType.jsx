import { useState, useEffect } from ""react"";
import { dataBase } from ""./config"";
import style from ""../../styles/database/GetType.module.scss"";
import styleModal from ""../../styles/content/modalRecipe.module.scss"";
import { motion } from ""framer-motion"";

const GetType = props => {
    
    const [ recipes, setRecipes ] = useState([{ 
        name: "",
    },]);
    const [ index, setIndex ] = useState(0);

    useEffect( () => {
            
        //funcion para guardar la lista de datos que obtenemos
        const listGet = async () => {
            const list = await dataBase.collection(""recipes"")
            .where(""type"", ""=="", props.type)
            .get()

            //Asignacion de la lista dentro de nuestro array
            setRecipes(list.docs.map(doc => doc.data()));
        };

        //Inicializacion de la funcion
        listGet();
    }, [props.type]);

    return (
        <>
            <section className={style.wrapper} >
                {recipes.map(doc => {

                    return (
                        <motion.a 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                duration: 0,
                                delay: ""1."" + recipes.indexOf(doc) + 2
                            }}
                            href="#open-modal"
                            style={{backgroundImage: `url(${doc.image})`}} 
                            key={recipes.indexOf(doc)}
                            onClick={() => setIndex(recipes.indexOf(doc)) }
                        ></motion.a>
                    );
                })}
            </section>
            <div 
                id="open-modal" 
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
                            alt={""video principal : "" + recipes[index].name}
                            title={""video principal : "" + recipes[index].name}
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

export default GetType;