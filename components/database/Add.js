import { Formik, Field, Form, set } from 'formik';
import { dataBase, storage } from './config';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

const Add = () => {

  const { user } = useAuth0();
  const [link, setLink] = useState('');

  const fileStore = async e => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const path = storageRef.child(file.name);
    await path.put(file);
    const linkUrl = await path.getDownloadURL();
    setLink(linkUrl);
  };

  const sent = values => {
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
      //window.location.reload();
    });
  };

  return (
    <Formik initialValues={{ name: '', type: '', description: '' }} onSubmit={sent} >
      <Form>
        <Field name="name" type="text" required />
        <Field name="description" as="textarea" required />
        <input name="file" type="file" onChange={fileStore} required />
        <Field name="type" as="select" required >
          <option value="" >Elige el tipo de tu receta</option>
          <option value="Pasteleria" >Pasteleria</option>
          <option value="Vegetariano" >Vegetariano</option>
        </Field>
        <button type="submit" >Submit</button>
      </Form>
    </Formik>
  );
};

export default Add;