import { Formik, Field, Form } from 'formik';
import { dataBase } from './config';
import { useAuth0 } from '@auth0/auth0-react';

const Add = () => {

    const { user } = useAuth0();

    const sent = values => {
        dataBase.collection("recipes").add({
            name: values.name,
            description: values.description,
            type: values.type,
            author: user.name,
            idAuthor: user.email,
            image: values.image,
            date: new Date(),
        });
    };

    return (
        <Formik initialValues={{ name: '', type: '', description: '', image: '' }} onSubmit={sent} >
          <Form>
            <Field name="name" type="text" required />
            <Field name="description" as="textarea" required />
            <Field name="image" type="file" required />
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