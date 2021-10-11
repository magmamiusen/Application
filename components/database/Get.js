//Importacion de las funciones principales.
import { 
    useEffect,
    useState 
} from 'react';
import { dataBase } from './config';

//Componente para obtener los datos desde firebase.
const Get = props => {

    //Declaracion del estado para almacenar en forma de array las recetas que estan almacenadas en firebase
    const [ recipes, setRecipes ] = useState([]);

    //Uso del useEffect para hacer que los datos sean obtenidos una vez sea cargado el componente
    useEffect( async() => {
        
        //Variable para guardar la lista de datos que obtenemos
        const list = await dataBase.collection('recipes')
        .where('type', '==', props.type)
        .get()

        //Asignacion de la lista dentro de nuestro array
        setRecipes(list.docs.map(doc => doc.data()));
    });

    //Elementos donde se mapearan los datos obtenidos de firebase firestore.
    return (
        <div>

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