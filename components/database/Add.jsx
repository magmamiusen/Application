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
import style from '../../styles/database/Add.module.scss';

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

  const [video, setVideo] = useState('');

  const videoStore = async e => {

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
    setVideo(linkUrl);

  };

  //Funcion para enviar los datos de la receta a firebase firestore.
  const sent = values => {
    
    //Configaracion de la ruta donde pondremos los datos de la receta
    dataBase.collection( 'recipes' )
    .add({
        name: values.name,
        description: values.description,
        howTo: values.howTo,
        ingredients: values.ingredients,
        type: values.type,
        author: user.name,
        idAuthor: user.email,
        image: link,
        video: video,
        date: new Date().toString(),
    })
    .then( () => {
      alert('La receta se ha agregado correctamente');
      //Una vez la receta se ha subido con exito, la pagina se recarga.
      window.location.reload();
    });
  };

  //Formulario para que el usuario escriba la informacion de la receta.
  return (
    <section className={ style.wrapper } >

      {/* Componente Formik para declarar los valores del formulario */}
      <Formik 
        initialValues={{ 
          name: '', 
          type: '', 
          description: '',
          howTo: '',
          ingredients: '' 
        }} 
        onSubmit={ sent } 
      >

        {/* formulario para ingresar la receta */}
        <Form className={ style.item } >

          {/* Titulo 'Nombra tu receta' */}
          <label>
            Nombra tu receta
          </label>

          {/* input para ingresar el nombre */}
          <Field 
            name="name" 
            type="text" 
            className={ style.effect }
            required 
          />

          {/* Titulo '¿De que se trata tu receta?' */}
          <label>
            ¿De que se trata tu receta?
          </label>

          {/* input para ingresar la descripcion */}
          <Field 
            name="description" 
            as="textarea" 
            required 
          />

          {/* titulo '¿Como se hace tu receta?' */}
          <label>
            ¿Como se hace tu receta?
          </label>

          {/* input para ingresar el paso a paso */}
          <Field 
            name="howTo" 
            as="textarea" 
            required 
          />

          <label>
            ¿Que ingredientes tiene tu receta?
          </label>

          {/* input para ingresar los ingredientes */}
          <Field 
            name="ingredients" 
            as="textarea" 
            required 
          />

          {/* Selecciona una miniatura para tu receta */}
          <label>
            Selecciona una miniatura para tu receta
          </label>

          {/* input para ingresar la imagen */}
          <input 
            name="file" 
            type="file" 
            onChange={fileStore} 
            required 
            className={ style.effect }
          />

          {/* Selecciona una miniatura para tu receta */}
          <label>
            Selecciona un video para tu receta
          </label>

          {/* input para ingresar la imagen */}
          <input 
            name="file" 
            type="file" 
            onChange={videoStore} 
            required 
            className={ style.effect }
          />

          {/* titulo '¿De que tipo es tu receta?' */}
          <label>
            ¿De que tipo es tu receta?
          </label>

          {/* input para selecionar el tipo */}
          <Field 
            name="type" 
            as="select" 
            required 
            className={ style.effect }
          >

            {/* Opcion por defecto */}
            <option value="" >
              Elige el tipo de tu receta
            </option>

            {/* Opcion 'Pasteleria' */}
            <option value="Pasteleria" >
              Pasteleria
            </option>

            {/* Opcion 'Vegetariano' */}
            <option value="Vegetariano" >
              Vegetariano
            </option>

            {/* Opcion 'Parrilla' */}
            <option value="Parrilla" >
              Parrilla
            </option>

            {/* Opcion 'Otro' */}
            <option value="Otro" >
              Otro
            </option>
          </Field>

          {/* boton para subir la receta */}
          <button 
            type="submit" 
            className={ style.effect }
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