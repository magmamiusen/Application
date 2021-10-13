//Importacion de las funciones principales.
import { 
  Formik, 
  Field, 
  Form 
} from 'formik';
import { 
  dataBase, 
  storage 
} from './config';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import style from '../../styles/database/Add.module.scss'

//Componente para agregar las recetas.
const Add = () => {
  //Uso del hook, para obtener la informacion del usuario que ha sido autenticado.
  const { user } = useAuth0();

  //Declaracion del estado para almacenar el enlace que traemos desde firebase storage.
  const [link, setLink] = useState('');

  //Funcion para capturar y enviar la imagen a firebase storage
  const fileStore = async e => {

    //Constante para almacenar el archivo.
    const file = e.target.files[0];

    //Referencia a la firebase storage.
    const storageRef = storage.ref();

    //Ruta donde se guardara el archivo en firebase storage, se guardara con su nombre.
    const path = storageRef.child(file.name);

    //Se envia la rita con la informacion del archivo
    await path.put(file);

    //Obtenemos el link donde se almacena la imagen para 'conectarlo' con la informacion en firebase firestore.
    const linkUrl = await path.getDownloadURL();

    //Actualizacion de la informacion en el Link.
    setLink(linkUrl);
  };

  //Funcion para enviar los datos de la receta a firebase firestore.
  const sent = values => {
    
    //Configaracion de la ruta donde pondremos los datos de la receta
    dataBase.collection('recipes')
    .add({
        name: values.name,
        description: values.description,
        type: values.type,
        author: user.name,
        idAuthor: user.email,
        image: link,
        date: new Date(),
    })
    .then( () => {

      //Una vez la receta se ha subido con exito, la pagina se recarga.
      window.location.reload();
    });
  };

  //Formulario para que el usuario escriba la informacion de la receta.
  return (
    <section className={style.wrapper} >
      <Formik 
        initialValues={{ 
        name: '', 
        type: '', 
        description: '',
        howTo: '' 
        }} onSubmit={sent}
      >

        {/* formulario para ingresar la receta */}
        <Form className={style.item} >
          <label>
            Nombra tu receta
          </label>
          {/* input para ingresar el nombre */}
          <Field 
            name="name" 
            type="text" 
            className={style.effect}
            required 
          />
          <label>
            ¿De que se trata tu receta?
          </label>
          {/* input para ingresar la descripcion */}
          <Field 
            name="description" 
            as="textarea" 
            className={style.effect}
            required 
          />
          <label>
            ¿Como se hace tu receta?
          </label>
          {/* input para ingresar la descripcion */}
          <Field 
            name="howTo" 
            as="textarea" 
            className={style.effect}
            required 
          />
          <label>
            Selecciona una miniatura para tu receta
          </label>
          {/* input para ingresar la imagen */}
          <input 
            name="file" 
            type="file" 
            onChange={fileStore} 
            required 
            className={style.effect}
          />
          <label>
            ¿De que tipo es tu receta?
          </label>
          {/* input para selecionar el tipo */}
          <Field 
            name="type" 
            as="select" 
            required 
            className={style.effect}
          >
            <option value="" >
              Elige el tipo de tu receta
            </option>
            <option value="Pasteleria" >
              Pasteleria
            </option>
            <option value="Vegetariano" >
              Vegetariano
            </option>
            <option value="Parrilla" >
              Parrilla
            </option>
            <option value="Otro" >
              Otro
            </option>
          </Field>
          {/* boton para subir la receta */}
          <button 
            type="submit" 
            className={style.effect}
          >
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

//Exportacion del componente Add.
export default Add;